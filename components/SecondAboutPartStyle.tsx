"use client";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

const StyledFirst = styled.div<{
	width: number;
	height: number;
	$linear: string;
}>`
	position: relative;
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 40px;
	box-sizing: border-box;

	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: ${({ $linear }) =>
			$linear === "light"
				? "linear-gradient(0deg, rgba(244, 250, 251, 0) 50%, rgb(244, 250, 251) 100%)"
				: "linear-gradient(0deg, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 100%)"};
		pointer-events: none; /* ทำให้สามารถคลิกผ่าน overlay ได้ */
	}
	@media (min-width: 0px) and (max-width: 599px) {
		padding: 56px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 56px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 40px 24px;
	}
`;
const Title = styled.div`
	color: ${({ theme }) => theme.sys.light.surface};
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	font-size: 72px;
	font-weight: 400;
	letter-spacing: 0;
	line-height: normal;
	position: relative;
	white-space: normal;
	width: fit-content;
	word-wrap: break-word;
	overflow-wrap: break-word;
	text-align: center;

	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 40px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 56px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 72px;
	}
`;

interface Props {
	width: number;
	height: number;
	header: string;
	mode: string;
	image: { url: string; blurDataUrl: string };
}
const SecondAboutPartStyle: React.FC<Props> = ({
	width,
	height,
	header,
	mode,
	image,
}) => {
	return (
		<StyledFirst width={width} height={height} $linear={mode}>
			<Image
				src={image.url}
				alt={"earth asmostphere"}
				fill
				style={{
					objectFit: "cover",
					objectPosition: "50% 50%",
					zIndex: 0,
				}}
				placeholder="blur"
				blurDataURL={image.blurDataUrl}
				key={image.blurDataUrl}
			/>
			<Title>{header}</Title>
		</StyledFirst>
	);
};

export default SecondAboutPartStyle;
