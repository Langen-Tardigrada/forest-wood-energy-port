"use client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "../../../src/app/css/typography";
import Image from "next/image";
import { IMAGE } from "../../../types/image";

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

	&::after {
		content: "";
		backdrop-filter: blur(8px);
		background: linear-gradient(
			90deg,
			rgba(0, 0, 0, 0.6) 0%,
			rgba(0, 0, 0, 0) 100%
		);
		mask-image: linear-gradient(to left, transparent 0%, black 3%);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none; /* ทำให้สามารถคลิกผ่าน overlay ได้ */
	}

	@media (min-width: 0px) and (max-width: 599px) {
		grid-template-columns: repeat(4, 1fr);
		padding: 56px 16px;
		background-position: 70% 0%;
		background-size: 525%;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		grid-template-columns: repeat(8, 1fr);
		padding: 56px 32px;
		background-position: 80% 0%;
		background-size: 350%;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 40px 24px;
		background-position: 30% 0%;
		background-size: 300%;
	}

	@media (min-width: 1200px) and (max-width: 1599px) {
		background-size: cover;
	}
`;
const HeadingContainer = styled.div`
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
	z-index: 1;

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
	${typography.display.small}
	position: relative;

	@media (min-width: 0px) and (max-width: 839px) {
		${typography.headline.small}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.headline.large}
	}
`;
const Body = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	${typography.body.large}
	font-size: 18px;
	position: relative;
	text-align: justify;

	@media (min-width: 0px) and (max-width: 839px) {
		font-size: ${({ theme }) => theme.typography.body.large.fontSize};
	}
`;

const SubHeading = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	${typography.headline.small}
	position: relative;
	text-align: justify;

	@media (min-width: 0px) and (max-width: 839px) {
		${typography.title.large}
		color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	}
`;

interface Props {
	width: number;
	height: number;
	header: string;
	body: string;
	subheading: string;
	image: IMAGE;
	mode: string;
}

const ThirdPart: React.FC<Props> = ({
	width,
	height,
	header,
	image,
	body,
	mode,
	subheading,
}) => {
	return (
		<StyledPart height={height}>
			<Image
				src={image.url}
				alt={"blue flame"}
				fill
				style={{
					objectFit: "cover",
					objectPosition:
						width <= 1199 && width >= 840
							? "30 0%"
							: width <= 839 && width >= 600
							? "80% 0%"
							: width >= 0 && width <= 599
							? "70% 0%"
							: "0% 10%",
					zIndex: 0,
					transform: `scale(${
						width <= 1199 && width >= 840
							? "3"
							: width <= 839 && width >= 600
							? "3.5"
							: width >= 0 && width <= 599
							? "5.25"
							: "1.25"
					})`,
					aspectRatio: "auto",
					transformOrigin: "top left",
				}}
				placeholder="blur"
				blurDataURL={image.blurDataUrl}
				key={image.url}
			/>
			<HeadingContainer>
				<Heading $mode={mode}>{header}</Heading>
				<SubHeading>{subheading}</SubHeading>
				<Body> {body} </Body>
			</HeadingContainer>
		</StyledPart>
	);
};

export default ThirdPart;
