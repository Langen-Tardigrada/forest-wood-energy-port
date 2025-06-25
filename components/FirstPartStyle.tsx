"use client";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { IMAGE } from "../types/image";

const StyledFirst = styled.div<{
	width: number;
	height: number;
	$linear: string;
}>`
	position: relative;
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: flex-start;
	padding: 40px;
	box-sizing: border-box;
	overflow: hidden;
	background-color: ${({ theme, $linear }) =>
		$linear === "light" ? theme.sys.dark.surface : theme.sys.light.surface};

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${({ $linear }) =>
			$linear === "light"
				? "linear-gradient(180deg, rgba(244, 250, 251, 0) 50%, rgb(244, 250, 251) 100%)"
				: "linear-gradient(180deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%)"};
		pointer-events: none; /* ทำให้สามารถคลิกผ่าน overlay ได้ */
	}
	@media (min-width: 0px) and (max-width: 599px) {
		padding: 56px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 56px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 40px 24px;
	}
`;
const Title = styled.div<{ $mode: string; $fontSize: number }>`
	color: ${({ theme, $mode }) =>
		$mode == "light"
			? theme.sys.light["on-surface"]
			: theme.sys.dark["on-surface"]};
	font-family: var(--font-lora), system-ui, -apple-system, BlinkMacSystemFont,
		"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: ${({ $fontSize }) => $fontSize}px;
	font-weight: 400;
	letter-spacing: 0;
	line-height: normal;
	position: relative;
	white-space: normal;
	word-break: normal;
	width: fit-content;
	z-index: 1;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 56px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 72px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 96px;
	}
`;
const SymbolContainer = styled.div<{ $mode: string }>`
	display: flex;
	flex-direction: row;
	position: absolute;
	align-items: center;
	justify-content: start;
	bottom: 40px;
	left: 40px;
	color: ${({ theme, $mode }) =>
		$mode == "light"
			? theme.sys.light["outline-variant"]
			: theme.sys.dark["outline-variant"]};
	gap: 12px;
	z-index: 1;
	@media (min-width: 0px) and (max-width: 599px) {
		bottom: 56px;
		left: 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		bottom: 56px;
		left: 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		bottom: 40px;
		left: 24px;
	}
`;
const ScrolldownText = styled.div`
	font-family: ${({ theme }) => theme.typography.label.small.fontFamily};
	font-size: ${({ theme }) =>
		theme.typography.label["large-prominent"].fontSize};
	font-style: normal;
	font-weight: ${({ theme }) =>
		theme.typography.label["large-prominent"].fontWeight};
	letter-spacing: ${({ theme }) =>
		theme.typography.label["large-prominent"].letterSpacing};
	line-height: ${({ theme }) =>
		theme.typography.label["large-prominent"].lineHeight};
	position: relative;
	text-align: right;
	white-space: nowrap;
	width: fit-content;
`;
type Globals =
	| "-moz-initial"
	| "inherit"
	| "initial"
	| "revert"
	| "revert-layer"
	| "unset";
type ObjectFit = Globals | "contain" | "cover" | "fill" | "none" | "scale-down";
interface Props {
	width: number;
	height: number;
	header: string;
	screenMode: string;
	textMode: string;
	position: string;
	objectFit: ObjectFit;
	size: string;
	fontSize: number;
	image: IMAGE;
}
const FirstPartStyle: React.FC<Props> = ({
	width,
	height,
	header,
	screenMode,
	image,
	textMode,
	position,
	objectFit,
	size,
	fontSize,
}) => {
	return (
		<StyledFirst width={width} height={height} $linear={screenMode}>
			<Image
				src={image.url}
				alt={"green oil abstract"}
				fill
				style={{
					objectFit: objectFit,
					objectPosition: position,
					zIndex: 0,
					transform: `scale(${size})`,
					aspectRatio: "auto",
					transformOrigin: "top left",
				}}
				placeholder="blur"
				blurDataURL={image.blurDataUrl}
				key={image.blurDataUrl}
				crossOrigin="anonymous"
			/>
			<Title $mode={textMode} $fontSize={fontSize}>
				{header}
			</Title>
			<SymbolContainer $mode={screenMode}>
				<FontAwesomeIcon icon={faAnglesDown} />
				<ScrolldownText>scroll down</ScrolldownText>
			</SymbolContainer>
		</StyledFirst>
	);
};

export default FirstPartStyle;
