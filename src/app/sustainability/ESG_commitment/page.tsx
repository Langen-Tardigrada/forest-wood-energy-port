import React from "react";
import ESG from "../../../../screen/Sustainability/ESG/ESG";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ESG Commitment",
	description: "Environmental Stewardship",
	alternates: {
		canonical: "https://4est-energy.com/sustainability/ESG_commitment",
	},
};
export default function ESGPage() {
	return <ESG />;
}
