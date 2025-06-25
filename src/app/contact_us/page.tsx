import React from "react";
import ContactUs from "../../../screen/ContactUs/ContactUs";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us",
	alternates: {
		canonical: "https://4est-energy.com/contact_us",
	},
};
export default function ContactPage() {
	return <ContactUs />;
}
