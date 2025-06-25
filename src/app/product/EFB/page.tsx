import React from "react";
import ProductPage from "../../../../screen/Product/ProductPage/ProductPage";
import { efb } from "../../../../public/information/product/product";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "EFB",
	description:
		"Empty Fruit Bunch (EFB) is an eco-friendly biomass fuel made from the fibrous residues of palm oil production.",
	alternates: {
		canonical: "https://4est-energy.com/product/EFB",
	},
};
export default function EFBPage() {
	return <ProductPage product={efb} />;
}
