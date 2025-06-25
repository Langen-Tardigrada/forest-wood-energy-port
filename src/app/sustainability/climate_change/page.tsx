import React from "react";
import ClimateChange from "../../../../screen/Sustainability/ClimateChange/ClimateChange";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Climate Change",
	description:
		"Understanding the Impact of Climate change is one of the most pressing challenges of our time, with far-reaching consequences for ecosystems, economies, and human health.",
	alternates: {
		canonical: "https://4est-energy.com/sustainability/climate_change",
	},
};

export default function ClimateChangePage() {
	return <ClimateChange />;
}
