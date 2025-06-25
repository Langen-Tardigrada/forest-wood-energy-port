import React from "react";
import ProductPage from "../../../../screen/Product/ProductPage/ProductPage";
import { briquettes } from "../../../../public/information/product/product";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Briquettes",
	description:
		"Wood Briquettes are a compact and efficient biomass fuel made from compressed wood waste.Biomass has emerged as a pivotal component of the renewable energy revolution.",
	alternates: {
		canonical: "https://4est-energy.com/product/briquettes",
	},
};

export default function BriquettesPage() {
	return <ProductPage product={briquettes} />;
}
