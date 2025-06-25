import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import EditContentPage from "../../../../../../screen/Admin/News/Edit/EditNews";
import { redirect } from "next/navigation";
export default async function EditPage({
	searchParams,
}: {
	searchParams: Promise<{ id?: string }>;
}) {
	const { id } = await searchParams;

	if (!id) {
		return <div>❌ Missing news ID</div>;
	}

	const session = await getServerSession(authOptions);
	if (!session) redirect("/admin/management/news");

	const res = await fetch(`${process.env.NEXTAUTH_URL}/api/news?id=${id}`, {
		cache: "no-store",
	});

	if (!res.ok) return <div>❌ Failed to fetch news</div>;

	const news = await res.json();

	return <EditContentPage news={news} />;
}
