// app/api/auth/custom-logout/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { User } from "@/models/user";
import dbConnect from "@/lib/db";
import { signOut } from "next-auth/react";

export async function POST() {
	const session = await getServerSession(authOptions);

	if (!session?.user?.email) {
		return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
	}

	await dbConnect;

	await User.updateOne(
		{ email: session.user.email, "loginHistory.logoutAt": null },
		{
			$set: {
				"loginHistory.$.logoutAt": new Date(),
				lastLogoutAt: new Date(),
			},
		}
	);

	await fetch(`${process.env.NEXTAUTH_URL!}/api/auth/custom_logout`, {
		method: "POST",
	});
	await signOut({ callbackUrl: "/" }); // ไปหน้า homepage หรือหน้า login

	return NextResponse.json({ success: true });
}
