"use client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "../../../src/app/css/typography";
import Image from "next/image";

const StyledPart = styled.div<{
	width: number;
	height: number;
}>`
	height: ${({ height }) => (height * 2) / 3}px;
	position: relative;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	justify-content: center;
	align-content: center;
	width: ${({ width }) => width}px;
	overflow: hidden;
	gap: 24px;

	@media (min-width: 0px) and (max-width: 599px) {
		grid-template-columns: repeat(4, 1fr);
		gap: 16px;
		height: ${({ height }) => (height * 3) / 4}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		grid-template-columns: repeat(8, 1fr);
		gap: 16px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		grid-template-columns: repeat(12, 1fr);
		gap: 24px;
	}
`;
const HeadingContainer = styled.div`
	align-items: center;
	display: flex;
	grid-column: 1 / span 6;
	grid-row: 1;
	flex-direction: column;
	flex-grow: 1;
	gap: 40px;
	justify-content: center;
	position: relative;
	height: fit-content;
	padding: 56px 40px;
	background-color: rgba(244, 250, 251, 0.8);
	border-radius: 0 8px 8px 0;

	&::after {
		content: "";
		position: absolute;
		top: 16px;
		left: 0;
		width: calc(100% + 16px);
		height: 100%;
		border: 1px solid rgba(244, 250, 251);
		border-left: none;
		border-radius: 0 8px 8px 0;
	}

	@media (min-width: 0px) and (max-width: 599px) {
		grid-column: 1 / span 4;
		padding: 56px 16px;
		margin-right: 32px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		grid-column: 1 / span 7;
		padding: 56px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		grid-column: 1 / span 6;
		padding: 40px 24px;
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
		${typography.headline.large}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.headline.large}
	}
`;
const Body = styled.div`
	align-self: stretch;
	color: var(--m3syslighton-surface);
	${typography.title.large}
	position: relative;
	text-align: justify;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.body.large}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.title.medium}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.title.large}
	}
`;

interface Props {
	width: number;
	height: number;
	image: { url: string; blurDataUrl: string };
}
const SixthPart: React.FC<Props> = ({ width, height, image }) => {
	return (
		<StyledPart width={width} height={height}>
			<Image
				src={image.url}
				alt={"yellow flower garden"}
				fill
				style={{
					objectFit: "cover",
					objectPosition: "50% 50%",
				}}
				placeholder="blur"
				blurDataURL={image.blurDataUrl}
				key={image.url}
			/>

			<HeadingContainer>
				<Heading $mode="light">
					In the last few decades, advancements in biomass technology have
					enhanced the efficiency and scalability of biomass energy production.
				</Heading>
				<Body>
					This has enabled large-scale deployment, particularly in regions where
					other forms of renewable energy may be less viable. The use of
					certified, sustainably sourced biomass ensures that energy production
					is not only green but also socially and environmentally responsible.
				</Body>
			</HeadingContainer>
		</StyledPart>
	);
};

export default SixthPart;
