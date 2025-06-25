import React from "react";
import ProductPage from "../../../../screen/Product/ProductPage/ProductPage";
import { pks } from "../../../../public/information/product/product";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "PKS",
	description:
		"Palm kernel Shells (PKS), a carbon-neutral fuel, is derived from the fruit kernel of palm trees, which absorb CO2 when they grow.",
	alternates: {
		canonical: "https://4est-energy.com/product/PKS",
	},
};

export default function PKSPage() {
	return <ProductPage product={pks} />;
}
