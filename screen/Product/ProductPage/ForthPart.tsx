"use client";
import React from "react";
import styled from "@emotion/styled";
import { StyledPart } from "../../../components/ForthPartsComponents";
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
`;

const ImageContainer = styled.div<{ width: number; height: number }>`
	align-self: stretch;
	display: flex;
	position: relative;
	width: ${({ width }) => width / 2}px;
	box-sizing: border-box;
	overflow: hidden;
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			-90deg,
			rgba(244, 250, 251, 0) 50%,
			rgb(244, 250, 251) 100%
		);
		pointer-events: none; /* ทำให้สามารถคลิกผ่าน overlay ได้ */

		@media (min-width: 0px) and (max-width: 599px) {
			background: linear-gradient(
				0deg,
				rgba(244, 250, 251, 0) 50%,
				rgb(244, 250, 251) 100%
			);
		}

		@media (min-width: 600px) and (max-width: 839px) {
			background: linear-gradient(
				0deg,
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
	heading: string;
	body: string;
	url: string;
	blurDataUrl: string;
}
const ForthPart: React.FC<Props> = ({
	width,
	height,
	heading,
	body,
	url,
	blurDataUrl,
}) => {
	return (
		<StyledPart width={width} height={height}>
			<TextContainer width={width} height={height}>
				<Heading>{heading}</Heading>
				<Body>{body}</Body>
			</TextContainer>
			<ImageContainer width={width} height={height}>
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
			</ImageContainer>
		</StyledPart>
	);
};

export default ForthPart;
