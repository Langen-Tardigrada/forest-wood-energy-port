"use client";
import React from "react";
import { Button } from "../../components/Button";
import styled from "@emotion/styled";

const StyledPart = styled.div<{ width: number; height: number }>`
	display: flex;
	height: ${({ height }) => height}px;
	width: 100%;
	box-sizing: border-box;
	align-items: center;
	background-color: transparent;
	flex-direction: column;
	gap: 80px;
	justify-content: center;
	padding: 40px;
	position: relative;
	& .button-instance {
		border-color: ${({ theme }) => theme.sys.light["on-primary"]} !important;
		display: flex !important;
		width: ${({ width }) => (width - 40 * 2 - 11 * 24) / 6 + 24}px !important;

		@media (min-width: 0px) and (max-width: 599px) {
			width: ${({ width }) => (width - 16 * 2 - 5 * 16) / 2 + 16}px !important;
		}

		@media (min-width: 600px) and (max-width: 839px) {
			width: ${({ width }) => (width - 32 * 2 - 7 * 24) / 2 + 32}px !important;
		}

		@media (min-width: 840px) and (max-width: 1199px) {
			width: ${({ width }) => (width - 24 * 2 - 11 * 24) / 3 + 24}px !important;
		}
	}

	& .button-instance:hover {
		background-color: ${({ theme }) =>
			theme.sys.light["state-layers"].surface[12]};
	}

	& .design-component-instance-node {
		color: ${({ theme }) => theme.sys.light["on-primary"]} !important;
	}

	@media (min-width: 0px) and (max-width: 599px) {
		padding: 56px 16px;
		gap: 40px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 56px 32px;
		gap: 40px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 48px 24px;
		gap: 48px;
	}
`;
const TextContainer = styled.div`
	display: flex;
	width: auto;
	flex-direction: column;
	align-items: center;
	align-self: center;
	gap: 18px;
	justify-content: center;
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	text-align: center;
	font-family: var(--font-praktika), system-ui, -apple-system,
		BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
`;
const Headline = styled.div`
	font-family: var(--font-praktika), system-ui, -apple-system,
		BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 120px;
	font-weight: 500;
	letter-spacing: 0;
	line-height: normal;

	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 40px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 56px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 88px;
	}
`;
const SubHeadline = styled.div`
	font-family: var(--font-praktika), system-ui, -apple-system,
		BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	font-size: 32px;
	font-weight: 400;
	letter-spacing: 0;
	line-height: normal;

	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 18px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 24px;
	}
`;
const VideoContainer = styled.video<{ height: number }>`
	position: absolute;
	width: 100%;
	height: ${({ height }) => height}px;
	top: 0;
	left: 0;
	right: 0;
	object-fit: cover;
`;

interface Props {
	width: number;
	height: number;
	video: { url: string; preload: string };
	onClick: () => void;
}
export const Part: React.FC<Props> = ({ width, height, onClick, video }) => {
	return (
		<>
			<VideoContainer
				height={height}
				autoPlay
				muted
				loop
				playsInline
				poster={video.preload}
				preload="metadata"
			>
				<source src={video.url} type="video/mp4" />
			</VideoContainer>
			<StyledPart width={width} height={height}>
				<TextContainer>
					<Headline>Forest Wood Energy</Headline>
					<SubHeadline>POWERING A SUSTAINBLE FUTURE</SubHeadline>
				</TextContainer>
				<Button
					className="button-instance"
					labelText="CONTINUE"
					labelTextClassName="design-component-instance-node"
					showIcon={"none"}
					stateProp="enabled"
					style="outlined"
					IconName={undefined}
					onClick={onClick}
					feature="other"
					ariaLabel="continue to the below content"
				/>
			</StyledPart>
		</>
	);
};
