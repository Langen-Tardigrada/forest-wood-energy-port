"use client";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { typography } from "../src/app/css/typography";
import Image from "next/image";

const LinePicture = styled.div`
	align-self: stretch;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: 8px;
	position: relative;
	width: 100%;
`;

const GridImage = styled.div<{
	width: number;
	$grid_column: string;
	$grid_row: string;
}>`
	position: relative;
	border-radius: 4px;
	height: ${({ width }) => ((width - 80) / 12) * 3}px;
	grid-column: ${({ $grid_column }) => $grid_column};
	grid-row: ${({ $grid_row }) => $grid_row};
	overflow: hidden;
`;
const StateLayer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0;
	color: ${({ theme }) => theme.sys.dark["on-surface"]};
	cursor: pointer;

	&:hover {
		opacity: 1;
		backdrop-filter: blur(4px);
		background-color: rgba(0, 0, 0, 0.38);
	}
	&:active {
		opacity: 1;
		backdrop-filter: blur(8px);
		background-color: rgba(0, 0, 0, 0.66);
	}
`;
const GridVideo = styled.div<{
	width: number;
	$grid_column: string;
	$grid_row: string;
	$mode: boolean;
}>`
	background-color: ${({ theme, $mode }) =>
		$mode
			? theme.sys.light["surface-container-high"]
			: theme.sys.dark["surface-container-low"]};
	border-radius: 4px;
	height: ${({ width }) => ((width - 80) / 12) * 3}px;
	grid-column: ${({ $grid_column }) => $grid_column};
	grid-row: ${({ $grid_row }) => $grid_row};
	overflow: hidden;
	position: relative;
`;

const GridComingsoon = styled.div<{
	width: number;
	$grid_column: string;
	$grid_row: string;
	$mode: boolean;
}>`
	background-color: ${({ theme, $mode }) =>
		$mode
			? theme.sys.light["surface-container-high"]
			: theme.sys.dark["surface-container-low"]};
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	height: ${({ width }) => ((width - 80) / 12) * 3}px;
	grid-column: ${({ $grid_column }) => $grid_column};
	grid-row: ${({ $grid_row }) => $grid_row};
	justify-content: center;
	align-items: center;
`;

const TextWrapper = styled.div<{ $mode: boolean }>`
	align-self: stretch;
	color: ${({ $mode, theme }) =>
		$mode ? theme.sys.light["on-surface"] : theme.sys.dark["on-surface"]};
	${typography.headline.small}
	position: relative;
	text-align: center;

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.body.large}
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
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	width: number;
	medias: Array<{
		original: string;
		type: string;
		grid_column: string;
		grid_row: string;
		blurDataUrl: string;
	}>;
	setIndexClicked: React.Dispatch<React.SetStateAction<number>>;
	setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
	mode: "light" | "dark";
}

interface MediasProps {
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	width: number;
	medias: Array<{
		original: string;
		type: string;
		grid_column: string;
		grid_row: string;
		blurDataUrl: string;
	}>;
	setIndexClicked: React.Dispatch<React.SetStateAction<number>>;
	setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
	mode: "light" | "dark";
}
const MediaPart: React.FC<MediasProps> = ({
	width,
	medias,
	setIsOpenModal,
	setIndexClicked,
	setScrollPosition,
	mode,
}) => {
	const handleOnClick = (i: number) => {
		setIndexClicked(i);
		setIsOpenModal(true);
		setScrollPosition(window.scrollY);
	};

	const calGridBlog = (ind: number) => {
		switch ((ind + 1) % 9) {
			case 1:
				return "1 / span 6";
			case 2:
				return "7 / span 3";
			case 3:
				return "10 / span 3";
			case 4:
				return "1 / span 3";
			case 5:
				return "4 / span 6";
			case 6:
				return "10 / span 3";
			case 7:
				return "1 / span 3";
			case 8:
				return "4 / span 3";
			default:
				return "7 / span 6";
		}
	};

	const calRow = (ind: number) => {
		return (Math.trunc(ind / 3) + 1).toString();
	};
	return (
		<>
			{medias.map((item, i) =>
				item.type === "img" ? (
					<GridImage
						width={width}
						$grid_column={calGridBlog(i)}
						$grid_row={calRow(i)}
						key={i}
						onClick={() => {
							handleOnClick(i);
						}}
					>
						<Image
							src={item.original}
							alt="product images guide line"
							fill
							style={{
								objectFit: "cover",
								objectPosition: "center",
								zIndex: 0,
							}}
							placeholder="blur"
							blurDataURL={item.blurDataUrl}
							key={item.blurDataUrl}
							priority={i == 0 ? true : false}
						/>
						<StateLayer>
							<FontAwesomeIcon size="3x" icon={faEye} />
						</StateLayer>
					</GridImage>
				) : (
					<GridVideo
						width={width}
						$grid_column={calGridBlog(i)}
						$grid_row={calRow(i)}
						key={i}
						onClick={() => handleOnClick(i)}
						$mode={mode === "light"}
					>
						<Video autoPlay muted loop playsInline poster={item.blurDataUrl}>
							<source src={item.original} type="video/mp4" />
						</Video>
						<StateLayer>
							<FontAwesomeIcon icon={faEye} size="3x" />
						</StateLayer>
					</GridVideo>
				)
			)}
		</>
	);
};
const LinePicturePart: React.FC<Props> = ({
	setIsOpenModal,
	width,
	medias,
	setIndexClicked,
	setScrollPosition,
	mode,
}) => {
	const calCol = () => {
		const indC = (medias.length + 1) % 9;
		if (indC == 1 || indC == 4 || indC == 7) {
			return "1 / span 12";
		} else if (indC == 5 || indC == 8) {
			return "4 / span 9";
		} else if (indC == 2 || indC == 0) {
			return "7 / span 6";
		} else {
			return "10 / span 3";
		}
	};

	const calRow = () => {
		return (Math.trunc(medias.length / 3) + 1).toString();
	};

	return (
		<LinePicture>
			<MediaPart
				width={width}
				medias={medias}
				setIsOpenModal={setIsOpenModal}
				setIndexClicked={setIndexClicked}
				setScrollPosition={setScrollPosition}
				mode={mode}
			/>
			<GridComingsoon
				width={width}
				$grid_column={calCol()}
				$grid_row={calRow()}
				$mode={mode === "light"}
			>
				<TextWrapper $mode={mode === "light"}>coming soon</TextWrapper>
			</GridComingsoon>
		</LinePicture>
	);
};

export default LinePicturePart;
