import React from "react";
import { AlbumGuideList } from "../../../../../public/information/gallery/album";
import AlbumPage from "../../../../../screen/Media/Gallery/Album";

export default async function AlbumContent({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const albumItem = AlbumGuideList.find((album) => album.slug === slug);

	if (!albumItem) {
		return <div>Error 404: Page Not Found</div>;
	}

	return (
		<AlbumPage
			medias={albumItem.album}
			albumName={albumItem.name}
			slug={albumItem.slug}
		/>
	);
}
