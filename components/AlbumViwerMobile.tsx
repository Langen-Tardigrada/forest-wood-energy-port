"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { ButtonIcon } from "./ButtonIcon";
import {
	faChevronLeft,
	faChevronRight,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { typography } from "../src/app/css/typography";
import Image from "next/image";

const StyledPart = styled.div<{ width: number; $mode: string }>`
	align-items: flex-start;
	background-color: ${({ theme, $mode }) =>
		$mode === "light" ? theme.sys.light.surface : theme.sys.dark.surface};
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: 100vw;
	height: 100vh;
	padding: 96px 16px 56px 16px;
	position: relative;
	box-sizing: border-box;

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 96px 32px 56px 32px;
	}

	@media (min-width: 840px) and (max-width: 1365px) {
		padding: 96px 24px 40px 24px;
	}
`;
const HeadlineContainer = styled.div<{ $mode: string }>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;

	& .button-header {
		color: ${({ theme, $mode }) =>
			$mode === "light"
				? theme.sys.light.primary
				: theme.sys.dark.primary} !important;
	}
`;
const Headline = styled.div<{ $mode: string }>`
	color: ${({ theme, $mode }) =>
		$mode === "light"
			? theme.sys.light["on-surface"]
			: theme.sys.dark["on-surface"]};
	${typography.headline.medium}
	position: relative;
	white-space: nowrap;
	width: fit-content;

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.headline.large}
	}
	@media (min-width: 840px) and (max-width: 1365px) {
		${typography.display.small}
	}
`;
const MediaSlider = styled.div<{ width: number }>`
	display: flex;
	flex-direction: column;
	width: ${({ width }) => width - 32}px;
	height: 100%;
	overflow: hidden;
	position: relative;

	@media (min-width: 600px) and (max-width: 839px) {
		width: ${({ width }) => width - 64}px;
	}
	@media (min-width: 840px) and (max-width: 1365px) {
		width: ${({ width }) => width - 48}px;
	}
`;
const ImageBlog = styled.div<{
	width: number;
	$mode: string;
}>`
	display: flex;
	flex: 0 0 auto;
	background-color: ${({ theme, $mode }) =>
		$mode === "light"
			? theme.sys.light["surface-container-high"]
			: theme.sys.dark["surface-container-low"]};
	border-radius: 4px;
	height: 100%;
	position: relative;
	width: ${({ width }) => width - 80}px;
	overflow: hidden;

	@media (min-width: 0px) and (max-width: 599px) {
		width: ${({ width }) => width - 32}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: ${({ width }) => width - 64}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		width: ${({ width }) => width - 48}px;
	}
`;

const VideoBlog = styled.div<{
	width: number;
	$mode: string;
}>`
	display: flex;
	flex: 0 0 auto;
	background-color: ${({ theme, $mode }) =>
		$mode === "light"
			? theme.sys.light["surface-container-high"]
			: theme.sys.dark["surface-container-low"]};
	border-radius: 4px;
	width: ${({ width }) => width - 80}px;
	height: 100%;
	overflow: hidden;
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		width: ${({ width }) => width - 32}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: ${({ width }) => width - 64}px;
	}

	@media (min-width: 840px) and (max-width: 1366px) {
		width: ${({ width }) => width - 48}px;
	}
`;

const Video = styled.video`
	width: 100%;
	height: 100%;
	object-fit: contain;
	position: absolute;
	top: 0;
	left: 0;
`;
const StyledButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-self: stretch;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;
const ButtonControlContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: inherit;
	position: relative;

	.buttonControl {
		color: rgba(244, 250, 251, 0.88) !important;
		height: inherit !important;
		padding: 40px !important;
		border-radius: 0px !important;

		@media (min-width: 0px) and (max-width: 599px) {
			padding: 16px !important;
		}

		@media (min-width: 600px) and (max-width: 839px) {
			padding: 36px !important;
		}

		@media (min-width: 840px) and (max-width: 1199px) {
			padding: 24px !important;
		}

		&:hover {
			color: ${({ theme }) => theme.sys.light.surface} !important;
			background-color: ${({ theme }) =>
				theme.sys.light["state-layers"]["inverse-surface"]["08"]} !important;
			backdrop-filter: blur(4px) !important;
		}
		&:disabled {
			color: rgba(244, 250, 251, 0.16) !important;
			cursor: none !important;
		}
	}
`;

interface Props {
	albumName: string;
	height: number;
	width: number;
	medias: Array<{
		original: string;
		type: string;
		grid_column: string;
		grid_row: string;
		blurDataUrl: string;
	}>;
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	indexClicked: number;
	mode: "light" | "dark";
}

const AlbumViwerMobile: React.FC<Props> = ({
	height,
	width,
	medias,
	albumName,
	setIsOpenModal,
	indexClicked,
	mode,
}) => {
	const [activeIndex, setActiveIndex] = useState<number>(indexClicked);

	const handleClickRight = () => {
		if (activeIndex == medias.length - 1) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	};

	const handleClickLeft = () => {
		if (activeIndex == 0) {
			setActiveIndex(medias.length - 1);
		} else {
			setActiveIndex(activeIndex - 1);
		}
	};

	return (
		<StyledPart width={width} $mode={mode}>
			<HeadlineContainer $mode={mode}>
				<Headline $mode={mode}>{albumName}</Headline>
				<ButtonIcon
					style="text"
					IconName={faXmark}
					size={width < 600 ? "lg" : width < 840 ? "xl" : "2x"}
					onClick={() => {
						setIsOpenModal(false);
					}}
				/>
			</HeadlineContainer>
			<MediaSlider width={width}>
				{medias[activeIndex].type === "img" ? (
					<ImageBlog width={width} $mode={mode}>
						<Image
							src={medias[activeIndex].original}
							alt={medias[activeIndex].original}
							fill
							style={{
								objectFit: "contain",
								zIndex: 0,
							}}
							placeholder="blur"
							blurDataURL={medias[activeIndex].blurDataUrl}
							key={medias[activeIndex].blurDataUrl}
						/>
					</ImageBlog>
				) : (
					<VideoBlog width={width} $mode={mode}>
						<Video
							autoPlay
							muted
							loop
							playsInline
							poster={medias[activeIndex].blurDataUrl}
						>
							<source src={medias[activeIndex].original} type="video/mp4" />
						</Video>
					</VideoBlog>
				)}
				<StyledButtonContainer>
					<ButtonControlContainer>
						<ButtonIcon
							style={"text"}
							IconName={faChevronLeft}
							className={"buttonControl"}
							onClick={handleClickLeft}
							size={width < 600 ? "2xl" : width < 840 ? "2x" : "3x"}
							stateProp={medias.length == 1 ? "disabled" : "enabled"}
						/>
					</ButtonControlContainer>
					<ButtonControlContainer>
						<ButtonIcon
							style={"text"}
							IconName={faChevronRight}
							className={"buttonControl"}
							onClick={handleClickRight}
							size={width < 600 ? "2xl" : width < 840 ? "2x" : "3x"}
							stateProp={medias.length == 1 ? "disabled" : "enabled"}
						/>
					</ButtonControlContainer>
				</StyledButtonContainer>
			</MediaSlider>
		</StyledPart>
	);
};

export default AlbumViwerMobile;
