import { Lora, Jost } from "next/font/google";
import localFont from "next/font/local";

export const lora = Lora({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-lora",
	display: "swap",
	preload: true,
});

export const jost = Jost({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	variable: "--font-jost",
	display: "swap",
	preload: true,
});

export const praktika = localFont({
	src: [
		{
			path: "../../../public/fonts/Fenotype - Praktika Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../../public/fonts/Fenotype - Praktika Medium.otf",
			weight: "500",
			style: "normal",
		},
	],
	variable: "--font-praktika",
	display: "swap",
	preload: true,
});
