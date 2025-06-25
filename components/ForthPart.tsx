"use client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "../src/app/css/typography";
import Image from "next/image";

const StyledPart = styled.div<{
	width: number;
	height: number;
	$flexflow: string;
}>`
	align-items: center;
	display: flex;
	height: ${({ height }) => (height * 2) / 3}px;
	width: ${({ width }) => width}px;
	justify-content: space-between;
	position: relative;
	flex-flow: ${({ $flexflow }) => "row" + $flexflow};
	@media (min-width: 0px) and (max-width: 599px) {
		flex-direction: column;
		flex-flow: ${({ $flexflow }) => "column" + $flexflow};
		height: ${({ height }) => (height * 2) / 3 + height / 2}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		flex-direction: column;
		flex-flow: ${({ $flexflow }) => "column" + $flexflow};
		height: ${({ height }) => (height * 2) / 3 + height / 2}px;
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
	flex-flow: ${({ $flexflow }) => $flexflow};
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
		${typography.headline.medium}
	}
`;
const Body = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.headline.small}
	position: relative;
	text-align: justify;
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

const ImageContainer = styled.div<{
	width: number;
	height: number;
	$deg: number;
}>`
	align-self: stretch;
	display: flex;
	position: relative;
	width: ${({ width }) => width / 2}px;
	box-sizing: border-box;
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			${({ $deg }) => $deg * -90}deg,
			rgba(244, 250, 251, 0) 50%,
			rgb(244, 250, 251) 100%
		);

		@media (min-width: 0px) and (max-width: 599px) {
			background: linear-gradient(
				${({ $deg }) => ($deg == -1 ? 180 : 0)}deg,
				rgba(244, 250, 251, 0) 50%,
				rgb(244, 250, 251) 100%
			);
		}

		@media (min-width: 600px) and (max-width: 839px) {
			background: linear-gradient(
				${({ $deg }) => ($deg == -1 ? 180 : 0)}deg,
				rgba(244, 250, 251, 0) 50%,
				rgb(244, 250, 251) 100%
			);
		}
	}
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
`;

interface Props {
	width: number;
	height: number;
	image: { url: string; blurDataUrl: string };
	body: string;
	heading: string;
	flexflow: string;
	cropflexflow: string;
	deg: number;
}
const ForthPart: React.FC<Props> = ({
	width,
	height,
	body,
	heading,
	image,
	flexflow,
	cropflexflow,
	deg,
}) => {
	return (
		<StyledPart width={width} height={height} $flexflow={cropflexflow}>
			{width > 840 ? (
				<>
					<TextContainer width={width} height={height} $flexflow={flexflow}>
						<Heading>{heading}</Heading>
						<Body>{body}</Body>
					</TextContainer>
					<ImageContainer width={width} height={height} $deg={deg}>
						<Image
							src={image.url}
							alt={"the forth part background image"}
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
				</>
			) : (
				<>
					<TextContainer width={width} height={height} $flexflow={flexflow}>
						<Heading>{heading}</Heading>
						<Body>{body}</Body>
					</TextContainer>
					<ImageContainer width={width} height={height} $deg={deg}>
						<Image
							src={image.url}
							alt={"the forth part background image"}
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
				</>
			)}
		</StyledPart>
	);
};

export default ForthPart;
