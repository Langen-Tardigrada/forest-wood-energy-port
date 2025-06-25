"use client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "../../../src/app/css/typography";
import Image from "next/image";

const StyledPart = styled.div<{ width: number; height: number }>`
	align-items: center;
	display: flex;
	height: ${({ height }) => (height * 2) / 3}px;
	width: ${({ width }) => width}px;
	justify-content: space-between;
	position: relative;
	@media (min-width: 0px) and (max-width: 599px) {
		flex-direction: column;
		height: ${({ height }) => height}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		flex-direction: column;
		height: ${({ height }) => height}px;
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
		font-size: 18px
	}
`;

const MediaContainer = styled.div<{ width: number; height: number }>`
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
				180deg,
				rgba(244, 250, 251, 0) 50%,
				rgb(244, 250, 251) 100%
			);
		}

		@media (min-width: 600px) and (max-width: 839px) {
			background: linear-gradient(
				180deg,
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

const Video = styled.video`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
`;
interface Props {
	width: number;
	height: number;
	heading: string;
	body: string;
	url: string;
	mediaType: string;
	blurDataUrl: string;
}
const SecondPart: React.FC<Props> = ({
	width,
	height,
	heading,
	body,
	url,
	mediaType,
	blurDataUrl,
}) => {
	return (
		<StyledPart width={width} height={height}>
			{width > 840 ? (
				<>
					<TextContainer width={width} height={height}>
						<Heading>{heading}</Heading>
						<Body>{body}</Body>
					</TextContainer>
					<MediaContainer width={width} height={height}>
						{mediaType === "mp4" ? (
							<Video autoPlay muted loop playsInline poster={blurDataUrl}>
								<source src={url} type="video/mp4" />
							</Video>
						) : (
							<Image
								src={url}
								alt={heading}
								fill
								style={{
									objectFit: "cover",
									zIndex: 0,
								}}
								placeholder="blur"
								blurDataURL={blurDataUrl}
								key={blurDataUrl}
							/>
						)}
					</MediaContainer>
				</>
			) : (
				<>
					<MediaContainer width={width} height={height}>
						{mediaType === "mp4" ? (
							<Video autoPlay muted loop playsInline poster={blurDataUrl}>
								<source src={url} type="video/mp4" />
							</Video>
						) : (
							<Image
								src={url}
								alt={heading}
								fill
								style={{
									objectFit: "cover",
									zIndex: 0,
								}}
								placeholder="blur"
								blurDataURL={blurDataUrl}
							/>
						)}
					</MediaContainer>
					<TextContainer width={width} height={height}>
						<Heading>{heading}</Heading>
						<Body>{body}</Body>
					</TextContainer>
				</>
			)}
		</StyledPart>
	);
};

export default SecondPart;
