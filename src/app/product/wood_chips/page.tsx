import React from "react";
import ProductPage from "../../../../screen/Product/ProductPage/ProductPage";
import { woodchips } from "../../../../public/information/product/product";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Wood Chips",
	description:
		"Wood chips are a sustainable, carbon-neutral biofuel made from the byproducts of forestry operations, such as branches, twigs, and small trees",
	alternates: {
		canonical: "https://4est-energy.com/product/wood_chips",
	},
};
export default function WoodPelletPage() {
	return <ProductPage product={woodchips} />;
}
