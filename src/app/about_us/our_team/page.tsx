import React from "react";
import OurteamPage from "../../../../screen/AboutUs/OurTeam/OurTeam";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Team",
	alternates: {
		canonical: "https://4est-energy.com/about_us/our_team",
	},
};
export default function OurTeamPage() {
	return <OurteamPage />;
}
