import { getServerSession, Session } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";
import NewsPanel from "../../../../../screen/Admin/News/NewsPanel";
import { News } from "../../../../../screen/Admin/News/types/news";

export default async function AdminPage() {
	const session = await getServerSession(authOptions);

	if (!session) {
		redirect("/admin");
	}

	const [allRes, hilightRes] = await Promise.all([
		fetch(`${process.env.NEXTAUTH_URL}/api/news`, {
			cache: "no-store",
		}),
		fetch(`${process.env.NEXTAUTH_URL}/api/news?hilight=true`, {
			cache: "no-store",
		}),
	]);

	const allNews: News[] = await allRes.json();
	const hilightNews: News[] = await hilightRes.json();

	return (
		<NewsPanel
			session={session as Session}
			initialAll={allNews as News[]}
			initialHilight={hilightNews as News[]}
		/>
	);
}
