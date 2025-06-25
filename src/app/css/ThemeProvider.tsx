"use client";

import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import theme from "./theme";

interface Props {
	children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
	return <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>;
};

export default ThemeProvider;
