"use client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "../../../src/app/css/typography";
import Image from "next/image";

const StyledPart = styled.div<{
	width: number;
	height: number;
}>`
	height: ${({ height }) => height}px;
	position: relative;
	display: flex;
	justify-content: flex-end;
	width: ${({ width }) => width}px;
	overflow: hidden;
`;
const TextContainer = styled.div<{ width: number; height: number }>`
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
const Heading = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	${typography.display.small}
	position: relative;
`;
const Body = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	${typography.headline.small}
	position: relative;
	text-align: justify;
	@media (min-width: 0px) and (max-width: 599px) {
		${typography.title.large}
	}
`;
const BackgroundBlur = styled.div`
	position: absolute;
	width: 50%;
	height: 100%;
	right: 0;
	top: 0;
	backdrop-filter: blur(8px);
	background: linear-gradient(
		-90deg,
		rgba(0, 0, 0, 0.6) 0%,
		rgba(0, 0, 0, 0) 100%
	);
	mask-image: linear-gradient(to right, transparent 0%, black 3%);
	@media (min-width: 0px) and (max-width: 599px) {
		gap: 32px;
		padding: 32px 16px;
		width: 100%;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.6) 0%,
			rgba(0, 0, 0, 0) 100%
		);
		mask-image: none;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 32px;
		padding: 56px 32px;
		width: 100%;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.6) 0%,
			rgba(0, 0, 0, 0) 100%
		);
		mask-image: none;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 56px 24px;
	}
`;
interface Props {
	width: number;
	height: number;
	heading: string;
	body: string;
	url: string;
	blurDataUrl: string;
}

const ThirdPart: React.FC<Props> = ({
	width,
	height,
	heading,
	body,
	url,
	blurDataUrl,
}) => {
	return (
		<StyledPart width={width} height={height}>
			<Image
				src={url}
				alt={"brick and wood pellet"}
				fill
				style={{
					objectFit: "cover",
					objectPosition: "center",
					zIndex: 0,
				}}
				placeholder="blur"
				blurDataURL={blurDataUrl}
				key={blurDataUrl}
			/>
			<BackgroundBlur />
			<TextContainer width={width} height={height}>
				<Heading>{heading}</Heading>
				<Body>{body}</Body>
			</TextContainer>
		</StyledPart>
	);
};

export default ThirdPart;
