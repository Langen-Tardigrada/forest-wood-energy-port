"use client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "../src/app/css/typography";
import Image from "next/image";

const StyledPart = styled.div<{
	width: number;
	height: number;
	$deg: number;
	$flexflow: string;
	$blur: number;
}>`
	height: ${({ height }) => height}px;
	position: relative;
	display: flex;
	justify-content: flex-start;
	width: ${({ width }) => width}px;
	overflow: hidden;
	box-sizing: border-box;
	flex-flow: ${({ $flexflow }) => $flexflow};

	&::after {
		content: "";
		background: linear-gradient(
			${({ $deg }) => $deg}deg,
			rgb(244, 250, 251, 0) 0%,
			rgb(244, 250, 251) 100%
		);
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		backdrop-filter: blur(${({ $blur }) => $blur}px);
		@media (min-width: 0px) and (max-width: 599px) {
			background: linear-gradient(
				0deg,
				rgba(244, 250, 251, 0) 0%,
				rgb(244, 250, 251) 100%
			);
		}

		@media (min-width: 600px) and (max-width: 839px) {
			background: linear-gradient(
				0deg,
				rgba(244, 250, 251, 0) 0%,
				rgb(244, 250, 251) 100%
			);
		}
	}
`;
const TextContainer = styled.div<{
	width: number;
	height: number;
	$flexflow: string;
}>`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 48px;
	height: ${({ height }) => height}px;
	justify-content: center;
	padding: 40px;
	position: relative;
	width: ${({ width }) => width / 2}px;
	box-sizing: border-box;
	flex-flow: ${({ $flexflow }) => $flexflow};
	z-index: 1;
	@media (min-width: 0px) and (max-width: 599px) {
		gap: 32px;
		padding: 32px 16px;
		width: ${({ width }) => width}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 32px;
		padding: 56px 32px;
		width: ${({ width }) => width}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 56px 24px;
	}
`;
const Heading = styled.div<{ $mode: string }>`
	align-self: stretch;
	color: ${({ theme, $mode }) =>
		$mode === "light"
			? theme.sys.light["on-surface"]
			: theme.sys.dark["on-surface"]};
	${typography.display.small}
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.headline.small}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.headline.medium}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.headline.large}
	}
`;

const Body = styled.div<{ $mode: string }>`
	align-self: stretch;
	color: ${({ theme, $mode }) =>
		$mode === "light"
			? theme.sys.light["on-surface"]
			: theme.sys.dark["on-surface"]};
	${typography.headline.small}
	position: relative;
	text-align: justify;
	white-space: pre-line;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.body.large}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.title.large}
	}
	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.title.large}
	}
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
	deg: number;
	heading: string;
	body: string;
	mode: string;
	flexflow: string;
	cropflexflow: string;
	image: { url: string; blurDataUrl: string };
	position: string;
	size: string;
	blur: number;
	objectFit: ObjectFit;
}

const ThirdPart: React.FC<Props> = ({
	width,
	height,
	deg,
	mode,
	heading,
	body,
	flexflow,
	cropflexflow,
	position,
	size,
	blur,
	objectFit,
	image,
}) => {
	return (
		<StyledPart
			width={width}
			height={height}
			$deg={deg}
			$flexflow={cropflexflow}
			$blur={blur}
		>
			<Image
				src={image.url}
				alt={"the third part background image"}
				fill
				style={{
					objectFit: objectFit,
					objectPosition: `${position}`,
					zIndex: 0,
					transform: `scale(${size})`,
					aspectRatio: "auto",
					transformOrigin: "top left",
				}}
				placeholder="blur"
				blurDataURL={image.blurDataUrl}
				key={image.url}
			/>
			<TextContainer width={width} height={height} $flexflow={flexflow}>
				<Heading $mode={mode}>{heading}</Heading>
				<Body $mode={mode}>{body}</Body>
			</TextContainer>
		</StyledPart>
	);
};

export default ThirdPart;
