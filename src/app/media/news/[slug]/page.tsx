import React from "react";
import ContentPage from "../../../../../screen/Media/News/Content";

export const revalidate = 60;

export default async function NewsContent({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const [newsRes, allRes] = await Promise.all([
		fetch(`${process.env.NEXTAUTH_URL!}/api/news?id=${slug}`), // ข่าว list เบา
		fetch(`${process.env.NEXTAUTH_URL!}/api/news?id_h_d=true`), // ข่าว highlight
	]);

	if (!newsRes.ok) return <div>❌ News not found</div>;

	const newsItem = await newsRes.json();

	if (!allRes.ok) return <div>❌ All News not found</div>;

	const allNewsItem = await allRes.json();

	return <ContentPage news={newsItem} allNews={allNewsItem} />;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const res = await fetch(
		`${process.env.NEXT_PUBLIC_BASE_URL!}/api/news?id=${slug}`
	);
	if (!res.ok) return { title: "Didn't find this news" };

	const news = await res.json();

	return {
		title: `${news.heading}`,
		description: news.introduction || "",
		openGraph: {
			title: news.heading,
			description: news.introduction,
			images: [
				news.imageURL !== ""
					? news.imageURL
					: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/login/fog.png",
			],
		},
		twitter: {
			card: "summary_large_image",
			title: news.heading,
			description: news.introduction,
			images: [
				news.imageURL !== ""
					? news.imageURL
					: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/login/fog.png",
			],
		},
	};
}
