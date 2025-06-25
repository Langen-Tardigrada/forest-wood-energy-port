"use client";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const StyledPart = styled.div<{ width: number; height: number }>`
	display: flex;
	height: ${({ height }) => height}px;
	width: 100vw;
	box-sizing: border-box;
	align-items: center;
	background-color: ${({ theme }) => theme.sys.light.surface};
	flex-direction: column;
	justify-content: center;
	padding: 40px;
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		padding: 56px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 56 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 48px 24px;
	}
`;
const TextContainer = styled.div`
	display: flex;
	width: auto;
	flex-direction: column;
	align-items: center;
	align-self: center;
	justify-content: center;
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	text-align: center;
	z-index: 1;
`;
const Headline = styled.div`
	font-size: 128px;
	font-weight: 500;
	letter-spacing: 0;
	line-height: normal;
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 64px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 96px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 128px;
	}
`;
const VideoContainer = styled("video")<{
	height: number;
	$brightness: number;
}>`
	position: absolute;
	width: 100%;
	height: ${({ height }) => height}px;
	top: 0;
	left: 0;
	right: 0;
	object-fit: cover;
	background-color: ${({ theme }) => theme.sys.light.surface};
`;

interface Props {
	width: number;
	height: number;
	mediaUrl: string;
	productName: string;
	mediaType: "img" | "mp4";
	brightness: number;
	blurDataUrl: string;
}

const FirstPart: React.FC<Props> = ({
	width,
	height,
	mediaUrl,
	productName,
	mediaType,
	brightness,
	blurDataUrl,
}) => {
	console.log(blurDataUrl);
	return (
		<StyledPart width={width} height={height}>
			{mediaType === "mp4" ? (
				<VideoContainer
					autoPlay
					muted
					loop
					height={height}
					$brightness={brightness}
					poster={blurDataUrl}
					playsInline
					preload="metadata"
				>
					<source src={mediaUrl} type="video/mp4" />
				</VideoContainer>
			) : (
				<Image
					src={mediaUrl}
					alt={productName}
					fill
					style={{
						objectFit: "cover",
						objectPosition: "center",
						zIndex: 0,
						filter: `brightness(${brightness})`,
					}}
					placeholder="blur"
					blurDataURL={blurDataUrl}
					key={blurDataUrl}
				/>
			)}
			<TextContainer>
				<Headline>{productName}</Headline>
			</TextContainer>
		</StyledPart>
	);
};

export default FirstPart;
