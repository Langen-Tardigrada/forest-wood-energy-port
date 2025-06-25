"use client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "../../../src/app/css/typography";
import Image from "next/image";

const StyledPart = styled.div<{
	height: number;
}>`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: 1fr auto;
	column-gap: 24px;
	row-gap: 16px;
	height: ${({ height }) =>
		height}px; //height - bottom padding - inner-top+bottom padding
	padding: 64px 40px;
	position: relative;
	overflow: hidden;
	@media (min-width: 0px) and (max-width: 599px) {
		grid-template-columns: repeat(4, 1fr);
		padding: 56px 16px;
		background-position: 20% 50%;
		background-size: cover;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		grid-template-columns: repeat(8, 1fr);
		padding: 56px 32px;
		background-position: 15% 50%;
		background-size: cover;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 40px 24px;
		background-position: 30% 0%;
		background-size: cover;
	}
`;
const ProductHeading = styled.div`
	align-items: flex-start;
	display: flex;
	grid-column: 1 / span 6;
	grid-row: 1;
	flex-direction: column;
	flex-grow: 1;
	gap: 48px;
	justify-content: center;
	position: relative;
	height: 100%;

	@media (min-width: 0px) and (max-width: 599px) {
		grid-column: 1 / span 4;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		grid-column: 1 / span 7;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		grid-column: 1 / span 6;
	}
`;
const Heading = styled.div<{ $mode: string }>`
	align-self: stretch;
	color: ${({ theme, $mode }) =>
		$mode === "light"
			? theme.sys.light["on-surface"]
			: theme.sys.dark["on-surface"]};
	${typography.display.large}
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.headline.large}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.display.small}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.display.small}
	}
`;
const Body = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.headline.small}
	position: relative;
	text-align: justify;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.title.large}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.title.large}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.title.large}
	}
`;

interface Props {
	width: number;
	height: number;
	header: string;
	body: string;
	image: { url: string; blurDataUrl: string };
	mode: string;
}

const ThirdPart: React.FC<Props> = ({
	width,
	height,
	header,
	image,
	body,
	mode,
}) => {
	return (
		<StyledPart height={height}>
			<Image
				src={image.url}
				alt={"pellets and a little tree"}
				fill
				style={{
					objectFit: "cover",
					objectPosition:
						width <= 1199 && width >= 840
							? "30 0%"
							: width <= 839 && width >= 600
							? "15% 50%"
							: width >= 0 && width <= 599
							? "20% 50%"
							: "0% 20%",
					zIndex: 0,
					transform: "scale(1.2)",
					aspectRatio: "auto",
					transformOrigin: "top left",
				}}
				placeholder="blur"
				blurDataURL={image.blurDataUrl}
				key={image.url}
			/>
			<ProductHeading>
				<Body> {body} </Body>
				<Heading $mode={mode}>{header}</Heading>
			</ProductHeading>
		</StyledPart>
	);
};

export default ThirdPart;
