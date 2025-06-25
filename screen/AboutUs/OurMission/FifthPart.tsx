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

const HeadingContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: center;
	gap: 40px;
	width: 100%;
`;
const Heading = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	${typography.display.small}
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.headline.medium}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.headline.large}
	}
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

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.headline.small}
	}
`;

interface Props {
	width: number;
	height: number;
	image: { url: string; blurDataUrl: string };
}

// TODO: Wait customer give permission to add image that had been commented.
const FifthPart: React.FC<Props> = ({ width, height, image }) => {
	return (
		<StyledPart width={width} height={height}>
			<Image
				src={image.url}
				alt={"all product"}
				fill
				style={{
					objectFit: "cover",
					objectPosition: "50% 50%",
					zIndex: 0,
				}}
				placeholder="blur"
				blurDataURL={image.blurDataUrl}
				key={image.url}
			/>
			<BackgroundBlur />
			<TextContainer width={width} height={height}>
				<Body>
					Our company has effectively addressed the prevalent issues in the
					market by providing a reliable supply of certified in-feed products.
					This ensures our customers have a consistent source of eco-friendly
					energy, thereby promoting sustainability.
				</Body>
				<HeadingContainer>
					<Heading>Our products are certified by FSC, PEFC, GGL</Heading>
				</HeadingContainer>
				{/* <ImageListContainer>
            <ImageContainer>
                <ImageCustom src="https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-mission/fsc.png" alt="FSC" $isLoaded={isLoaded} onLoad={() => setIsLoaded(true)}/>
            </ImageContainer>
            <ImageContainer>
                <ImageCustom src="https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-mission/pefc.png" alt="PEFC" $isLoaded={isLoaded} onLoad={() => setIsLoaded(true)}/>
            </ImageContainer>
            <ImageContainer>
                <ImageCustom src="https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-mission/logo.png" alt="GGL" $isLoaded={isLoaded} onLoad={() => setIsLoaded(true)}/>
            </ImageContainer>
        </ImageListContainer> */}
				<Body>
					guaranteeing their quality and adherence to environmental standards.
				</Body>
			</TextContainer>
		</StyledPart>
	);
};

export default FifthPart;
