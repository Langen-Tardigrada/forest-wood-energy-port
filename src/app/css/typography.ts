// styles/typography.ts
import { css } from "@emotion/react";
import theme from "./theme";

export const typography = {
	display: {
		large: css`
			font-size: ${theme.typography.display.large.fontSize};
			font-family: ${theme.typography.display.large.fontFamily};
			font-weight: ${theme.typography.display.large.fontWeight};
			line-height: ${theme.typography.display.large.lineHeight};
			letter-spacing: ${theme.typography.display.large.letterSpacing};
			font-style: normal;
		`,
		medium: css`
			font-size: ${theme.typography.display.medium.fontSize};
			font-family: ${theme.typography.display.medium.fontFamily};
			font-weight: ${theme.typography.display.medium.fontWeight};
			line-height: ${theme.typography.display.medium.lineHeight};
			letter-spacing: ${theme.typography.display.medium.letterSpacing};
			font-style: normal;
		`,
		small: css`
			font-size: ${theme.typography.display.small.fontSize};
			font-family: ${theme.typography.display.small.fontFamily};
			font-weight: ${theme.typography.display.small.fontWeight};
			line-height: ${theme.typography.display.small.lineHeight};
			letter-spacing: ${theme.typography.display.small.letterSpacing};
			font-style: normal;
		`,
	},
	headline: {
		large: css`
			font-size: ${theme.typography.headline.large.fontSize};
			font-family: ${theme.typography.headline.large.fontFamily};
			font-weight: ${theme.typography.headline.large.fontWeight};
			line-height: ${theme.typography.headline.large.lineHeight};
			letter-spacing: ${theme.typography.headline.large.letterSpacing};
			font-style: normal;
		`,
		medium: css`
			font-size: ${theme.typography.headline.medium.fontSize};
			font-family: ${theme.typography.headline.medium.fontFamily};
			font-weight: ${theme.typography.headline.medium.fontWeight};
			line-height: ${theme.typography.headline.medium.lineHeight};
			letter-spacing: ${theme.typography.headline.medium.letterSpacing};
			font-style: normal;
		`,
		small: css`
			font-size: ${theme.typography.headline.small.fontSize};
			font-family: ${theme.typography.headline.small.fontFamily};
			font-weight: ${theme.typography.headline.small.fontWeight};
			line-height: ${theme.typography.headline.small.lineHeight};
			letter-spacing: ${theme.typography.headline.small.letterSpacing};
			font-style: normal;
		`,
	},
	title: {
		large: css`
			font-size: ${theme.typography.title.large.fontSize};
			font-family: ${theme.typography.title.large.fontFamily};
			font-weight: ${theme.typography.title.large.fontWeight};
			line-height: ${theme.typography.title.large.lineHeight};
			letter-spacing: ${theme.typography.title.large.letterSpacing};
			font-style: normal;
		`,
		medium: css`
			font-size: ${theme.typography.title.medium.fontSize};
			font-family: ${theme.typography.title.medium.fontFamily};
			font-weight: ${theme.typography.title.medium.fontWeight};
			line-height: ${theme.typography.title.medium.lineHeight};
			letter-spacing: ${theme.typography.title.medium.letterSpacing};
			font-style: normal;
		`,
		small: css`
			font-size: ${theme.typography.title.small.fontSize};
			font-family: ${theme.typography.title.small.fontFamily};
			font-weight: ${theme.typography.title.small.fontWeight};
			line-height: ${theme.typography.title.small.lineHeight};
			letter-spacing: ${theme.typography.title.small.letterSpacing};
			font-style: normal;
		`,
	},
	body: {
		large: css`
			font-size: ${theme.typography.body.large.fontSize};
			font-family: ${theme.typography.body.large.fontFamily};
			font-weight: ${theme.typography.body.large.fontWeight};
			line-height: ${theme.typography.body.large.lineHeight};
			letter-spacing: ${theme.typography.body.large.letterSpacing};
			font-style: normal;
		`,
		medium: css`
			font-size: ${theme.typography.body.medium.fontSize};
			font-family: ${theme.typography.body.medium.fontFamily};
			font-weight: ${theme.typography.body.medium.fontWeight};
			line-height: ${theme.typography.body.medium.lineHeight};
			letter-spacing: ${theme.typography.body.medium.letterSpacing};
			font-style: normal;
		`,
		small: css`
			font-size: ${theme.typography.body.small.fontSize};
			font-family: ${theme.typography.body.small.fontFamily};
			font-weight: ${theme.typography.body.small.fontWeight};
			line-height: ${theme.typography.body.small.lineHeight};
			letter-spacing: ${theme.typography.body.small.letterSpacing};
			font-style: normal;
		`,
	},
	label: {
		"large-prominent": css`
			font-size: ${theme.typography.label["large-prominent"].fontSize};
			font-family: ${theme.typography.label["large-prominent"].fontFamily};
			font-weight: ${theme.typography.label["large-prominent"].fontWeight};
			line-height: ${theme.typography.label["large-prominent"].lineHeight};
			letter-spacing: ${theme.typography.label["large-prominent"]
				.letterSpacing};
			font-style: normal;
		`,
		large: css`
			font-size: ${theme.typography.label.large.fontSize};
			font-family: ${theme.typography.label.large.fontFamily};
			font-weight: ${theme.typography.label.large.fontWeight};
			line-height: ${theme.typography.label.large.lineHeight};
			letter-spacing: ${theme.typography.label.large.letterSpacing};
			font-style: normal;
		`,
		"medium-prominent": css`
			font-size: ${theme.typography.label["medium-prominent"].fontSize};
			font-family: ${theme.typography.label["medium-prominent"].fontFamily};
			font-weight: ${theme.typography.label["medium-prominent"].fontWeight};
			line-height: ${theme.typography.label["medium-prominent"].lineHeight};
			letter-spacing: ${theme.typography.label["medium-prominent"]
				.letterSpacing};
			font-style: normal;
		`,
		medium: css`
			font-size: ${theme.typography.label.medium.fontSize};
			font-family: ${theme.typography.label.medium.fontFamily};
			font-weight: ${theme.typography.label.medium.fontWeight};
			line-height: ${theme.typography.label.medium.lineHeight};
			letter-spacing: ${theme.typography.label.medium.letterSpacing};
			font-style: normal;
		`,
		small: css`
			font-size: ${theme.typography.label.small.fontSize};
			font-family: ${theme.typography.label.small.fontFamily};
			font-weight: ${theme.typography.label.small.fontWeight};
			line-height: ${theme.typography.label.small.lineHeight};
			letter-spacing: ${theme.typography.label.small.letterSpacing};
			font-style: normal;
		`,
	},
};
