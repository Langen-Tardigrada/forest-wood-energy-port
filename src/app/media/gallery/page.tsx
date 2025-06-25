import React from "react";
import Gallery from "../../../../screen/Media/Gallery/Gallery";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gallery",
	alternates: {
		canonical: "https://4est-energy.com/gallery",
	},
};
export default function GalleryPage() {
	return <Gallery />;
}
