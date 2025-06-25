"use client";
import dynamic from "next/dynamic";

const ThemeProvider = dynamic(() => import("../src/app/css/ThemeProvider"), {
	ssr: false,
});

export default function DynamicThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
