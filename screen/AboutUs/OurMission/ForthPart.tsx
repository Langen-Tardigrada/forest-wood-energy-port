"use client";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import {
	StyledPart,
	ImageContainer,
} from "../../../components/ForthPartsComponents";
import { typography } from "../../../src/app/css/typography";
import Image from "next/image";

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
		height: ${({ height }) => height / 2}px;
		width: ${({ width }) => width}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 32px;
		padding: 56px 32px;
		height: ${({ height }) => height / 2}px;
		width: ${({ width }) => width}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 56px 24px;
	}
`;

const Heading = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.display.medium}
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.headline.small}
		text-align: justify;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.headline.large}
	}
`;

const BodyContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	padding: 0 24px;
	justify-content: center;
	align-items: flex-start;
`;
const BodyList = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	justify-content: flex-start;
	align-items: center;
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
		${typography.headline.small}
	}
`;

interface Props {
	width: number;
	height: number;
	image: { url: string; blurDataUrl: string };
}
const ForthPart: React.FC<Props> = ({ width, height, image }) => {
	const theme = useTheme();
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
						<Heading>By promoting sustainable bioenergy: </Heading>
						<BodyContainer>
							<BodyList>
								<FontAwesomeIcon
									icon={faCheckDouble}
									width={24}
									height={24}
									color={theme.sys.light.primary}
								/>
								<Body>
									We have enabled the transition away from fossil fuels
								</Body>
							</BodyList>
							<BodyList>
								<FontAwesomeIcon
									icon={faCheckDouble}
									width={24}
									height={24}
									color={theme.sys.light.primary}
								/>
								<Body>Support the growth of forest carbon stocks</Body>
							</BodyList>
							<BodyList>
								<FontAwesomeIcon
									icon={faCheckDouble}
									width={24}
									height={24}
									color={theme.sys.light.primary}
								/>
								<Body>
									Deliver reliable, affordable energy to their communities
								</Body>
							</BodyList>
						</BodyContainer>
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
						<Heading>By promoting sustainable bioenergy:</Heading>
						<BodyContainer>
							<BodyList>
								<FontAwesomeIcon
									icon={faCheckDouble}
									width={24}
									height={24}
									color={theme.sys.light.primary}
								/>
								<Body>
									We have enabled the transition away fromfossil fuels
								</Body>
							</BodyList>
							<BodyList>
								<FontAwesomeIcon
									icon={faCheckDouble}
									width={24}
									height={24}
									color={theme.sys.light.primary}
								/>
								<Body>Support the growth of forest carbon stocks</Body>
							</BodyList>
							<BodyList>
								<FontAwesomeIcon
									icon={faCheckDouble}
									width={24}
									height={24}
									color={theme.sys.light.primary}
								/>
								<Body>
									Deliver reliable, affordable energy to their communities
								</Body>
							</BodyList>
						</BodyContainer>
					</TextContainer>
				</>
			)}
		</StyledPart>
	);
};

export default ForthPart;
