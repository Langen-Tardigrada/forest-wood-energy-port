import GoogleProvider from "next-auth/providers/google";
import type { AuthOptions, Session } from "next-auth";
import type { JWT } from "next-auth/jwt";
import { headers } from "next/headers";
import dbConnect from "@/lib/db";
import { User } from "@/models/user";

const WHITELIST_EMAILS = [""];

export const authOptions: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],

	session: {
		strategy: "jwt",
		maxAge: 60 * 30,
	},

	callbacks: {
		async signIn({ user }) {
			const headerList = await headers();
			const ip = headerList.get("x-forwarded-for") || "unknown";
			const userAgent = headerList.get("user-agent") || "unknown";

			await dbConnect();
			await User.updateOne(
				{ email: user.email },
				{
					$set: { name: user.name, lastLoginAt: new Date() },
					$push: {
						loginHistory: { loginAt: new Date(), userAgent, ip },
					},
				},
				{ upsert: true }
			);

			return !!user.email && WHITELIST_EMAILS.includes(user.email!);
		},

		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.role = (user as any).role ?? "Admin";
			}
			return token;
		},

		async session({ session, token }: { session: Session; token: JWT }) {
			if (session.user) {
				(session.user as any).id = token.id;
				(session.user as any).role = token.role;
			}
			return session;
		},
	},

	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		error: `${process.env.NEXT_PUBLIC_BASE_URL!}/auth/error`,
	},
};
