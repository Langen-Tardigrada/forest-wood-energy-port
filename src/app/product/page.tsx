import React from "react";
import MainPage from "../../../screen/Product/AllProduct/MainPage";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Product",
	description:
		"At Forest Wood Energy, we are committed to supporting our clients in achieving their clean energy goals by offering a diverse range of biomass products tailored to the specific needs of industrial customers.",
	alternates: {
		canonical: "https://4est-energy.com/product",
	},
};

export default function ProductPage() {
	return <MainPage />;
}
