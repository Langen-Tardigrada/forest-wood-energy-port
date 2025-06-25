import React from "react";
import REI from "../../../../screen/Sustainability/REI/REI";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Reducing environmental impact",
	description:
		"Why Biomass Can Reduce Environmental Impact Biomass stands out as one of the best tools in the effort to reduce environmental impact, particularly in the energy sector.",
	alternates: {
		canonical:
			"https://4est-energy.com/sustainability/reduce_environment_impact",
	},
};

export default function REIPage() {
	return <REI />;
}
