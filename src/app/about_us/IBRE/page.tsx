import React from "react";
import IBRE from "../../../../screen/AboutUs/IBRE/IBRE";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "The Importance of Biomass and Renewable Energy",
	description:
		"Biomass has emerged as a pivotal component of the renewable energy revolution.",
	alternates: {
		canonical: "https://4est-energy.com/about_us/IBRE",
	},
};

export default function IBREPage() {
	return <IBRE />;
}
