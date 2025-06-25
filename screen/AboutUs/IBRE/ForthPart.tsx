"use client";
import React from "react";
import styled from "@emotion/styled";
import { ImageContainer } from "../../../components/ForthPartsComponents";
import { typography } from "../../../src/app/css/typography";
import Image from "next/image";
import { IMAGE } from "../../../types/image";

const StyledPart = styled.div<{ width: number; height: number }>`
	align-items: center;
	display: flex;
	height: ${({ height }) => (height * 2) / 3}px;
	width: ${({ width }) => width}px;
	justify-content: space-between;
	position: relative;
	@media (min-width: 0px) and (max-width: 599px) {
		flex-direction: column;
		height: ${({ height }) => (height * 2) / 3 + height / 2}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		flex-direction: column;
		height: ${({ height }) => (height * 2) / 3 + height / 2}px;
	}
`;

const TextContainer = styled.div<{ width: number; height: number }>`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 48px;
	padding: 40px;
	position: relative;
	width: ${({ width }) => width / 2}px;
	box-sizing: border-box;
	justify-content: center;

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 32px;
		padding: 32px 16px;
		height: ${({ height }) => (height * 2) / 3}px;
		width: ${({ width }) => width}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 32px;
		padding: 56px 32px;
		height: ${({ height }) => (height * 2) / 3}px;
		width: ${({ width }) => width}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 56px 24px;
	}
`;

const Heading = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.headline.large}
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.headline.small}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.headline.large}
	}
`;
const Body = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.body.large}
	font-size: 18px;
	position: relative;
	text-align: justify;
`;

interface Props {
	width: number;
	height: number;
	image: IMAGE;
}
const ForthPart: React.FC<Props> = ({ width, height, image }) => {
	return (
		<StyledPart width={width} height={height}>
			{width > 840 ? (
				<>
					<ImageContainer width={width} height={height}>
						<Image
							src={image.url}
							alt={"co2"}
							fill
							style={{
								objectFit: "cover",
								zIndex: 0,
							}}
							placeholder="blur"
							blurDataURL={image.blurDataUrl}
							key={image.url}
						/>
					</ImageContainer>
					<TextContainer width={width} height={height}>
						<Heading>
							The impact of biomass in the energy sector has been significant.
						</Heading>
						<Body>
							As a versatile and widely available resource, biomass has
							contributed to reducing greenhouse gas emissions and supporting
							energy security by diversifying the energy mix. Countries and
							communities that have embraced biomass energy have seen a
							reduction in their carbon footprints, making substantial progress
							towards meeting international climate goals. This shift has also
							spurred economic growth in rural areas, creating jobs and opening
							new revenue streams for farmers and forest owners.
						</Body>
					</TextContainer>
				</>
			) : (
				<>
					<ImageContainer width={width} height={height}>
						<Image
							src={image.url}
							alt={"co2"}
							fill
							style={{
								objectFit: "cover",
								zIndex: 0,
							}}
							placeholder="blur"
							blurDataURL={image.blurDataUrl}
							key={image.url}
						/>
					</ImageContainer>
					<TextContainer width={width} height={height}>
						<Heading>
							The impact of biomass in the energy sector has been significant.
						</Heading>
						<Body>
							As a versatile and widely available resource, biomass has
							contributed to reducing greenhouse gas emissions and supporting
							energy security by diversifying the energy mix. Countries and
							communities that have embraced biomass energy have seen a
							reduction in their carbon footprints, making substantial progress
							towards meeting international climate goals. This shift has also
							spurred economic growth in rural areas, creating jobs and opening
							new revenue streams for farmers and forest owners.
						</Body>
					</TextContainer>
				</>
			)}
		</StyledPart>
	);
};

export default ForthPart;
