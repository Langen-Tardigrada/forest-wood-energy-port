import React from "react";
import ProductPage from "../../../../screen/Product/ProductPage/ProductPage";
import { pellet } from "../../../../public/information/product/product";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Wood Pellet",
	description:
		"Wood pellets are a highly efficient and sustainable biofuel, produced from compressed sawdust and other wood waste materials.",
	alternates: {
		canonical: "https://4est-energy.com/product/wood_pellet",
	},
};

export default function WoodPelletPage() {
	return <ProductPage product={pellet} />;
}
