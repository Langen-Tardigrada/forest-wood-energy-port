import React from "react";
import OurMission from "../../../../screen/AboutUs/OurMission/OurMission";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Mission",
	description: "Combating climate change is at the heart of our job.",
	alternates: {
		canonical: "https://4est-energy.com/about_us/our_mission",
	},
};

export default function OurMissionPage() {
	return <OurMission />;
}
