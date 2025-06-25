import React from "react";
import NewsPage from "../../../../screen/Media/News/News";
import { News as NewsType } from "../../../../screen/Admin/News/types/news";

export const dynamic = "force-dynamic";
export const revalidate = 60;

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "News",
	alternates: {
		canonical: "https://4est-energy.com/news",
	},
};

export default async function News() {
	const base = process.env.NEXT_PUBLIC_BASE_URL!;
	const [allRes, hilightRes] = await Promise.all([
		fetch(`${base}/api/news`, { next: { revalidate: 60 } }),
		fetch(`${base}/api/news?hilight=true`, { next: { revalidate: 60 } }),
	]);

	const allNews: NewsType[] = await allRes.json();
	const hilightNews: NewsType[] = await hilightRes.json();

	return <NewsPage allNews={allNews} hilightNews={hilightNews} />;
}
