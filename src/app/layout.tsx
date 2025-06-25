import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import { jost } from "./css/fonts";
import DynamicThemeProvider from "../../components/dynamicThemeProvider";

config.autoAddCss = false;

export const metadata: Metadata = {
	title: "Forest Wood Energy",
	description:
		"Forest Wood Energy is committed to powering a sustainable future with renewable energy solutions.",
	keywords:
		"forest wood energy, sustainable energy, renewable energy, eco-friendly energy",
	openGraph: {
		title: "Forest Wood Energy",
		description:
			"Forest Wood Energy is committed to powering a sustainable future with renewable energy solutions.",
		url: "https://4est-energy.com/",
		images: [
			{
				url: "",
				width: 1200,
				height: 600,
				alt: "Forest Wood Energy",
			},
		],
		type: "website",
	},
	icons: {
		icon: [
			{ url: "/favicon.ico", type: "image/x-icon" },
			{ url: "/logo.svg", type: "image/svg+xml", sizes: "32x32" },
		],
		apple: "/apple-touch-icon.png", // ถ้ามี
		shortcut: "/favicon.ico", // optional
	},
	alternates: {
		canonical: "https://4est-energy.com/",
	},
	authors: [
		{
			name: "Forest Wood Energy",
			url: "https://4est-energy.com",
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			style={{ scrollbarWidth: "none" }}
			className={`${jost.variable}`}
		>
			<body style={{ margin: 0, display: "flex" }}>
				<DynamicThemeProvider> {children} </DynamicThemeProvider>
			</body>
		</html>
	);
}
