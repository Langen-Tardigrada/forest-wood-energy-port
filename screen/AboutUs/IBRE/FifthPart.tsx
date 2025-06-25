"use client";
import React from "react";
import styled from "@emotion/styled";
import {
	StyledPart,
	TextContainer,
	BackgroundBlur,
} from "../../../components/FifthPartsComponents";
import { typography } from "../../../src/app/css/typography";
import Image from "next/image";
import { IMAGE } from "../../../types/image";

const Heading = styled.div<{ $mode: string }>`
	align-self: stretch;
	color: ${({ theme, $mode }) =>
		$mode === "light"
			? theme.sys.light["inverse-on-surface"]
			: theme.sys.dark["inverse-on-surface"]};
	${typography.display.small}
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.headline.small}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.display.small}
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
`;

const SubHeading = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	${typography.headline.small}
	position: relative;
	text-align: justify;

	@media (min-width: 0px) and (max-width: 1199px) {
		${typography.title.large}
	}
`;
interface Props {
	width: number;
	height: number;
	image: IMAGE;
}

const FifthPart: React.FC<Props> = ({ width, height, image }) => {
	return (
		<StyledPart width={width} height={height}>
			<Image
				src={image.url}
				alt={"power plant"}
				fill
				style={{
					objectFit: "cover",
					zIndex: 0,
					objectPosition: "50% 50%",
				}}
				placeholder="blur"
				blurDataURL={image.blurDataUrl}
				key={image.url}
			/>
			<BackgroundBlur />
			<TextContainer width={width} height={height}>
				<Heading $mode={"light"}>
					As the world continues to seek sustainable energy solutions,{" "}
				</Heading>
				<SubHeading>Biomass stands out as a critical resource.</SubHeading>
				<Body>
					Its ability to provide reliable, low-carbon energy while supporting
					local economies and managing natural resources makes it a cornerstone
					of the green energy landscape. At Forest Wood Energy, we are proud to
					be at the forefront of this transformation, supplying high-quality
					biomass that helps our customers lower their carbon emissions and
					contribute to a more sustainable future.
				</Body>
			</TextContainer>
		</StyledPart>
	);
};

export default FifthPart;
