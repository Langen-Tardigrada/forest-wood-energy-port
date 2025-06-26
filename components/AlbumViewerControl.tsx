"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from ".";
import Image from "next/image";

const StyledContent = styled.div<{ $mode: string }>`
	display: flex;
	position: relative;
	flex-direction: row;
	align-self: stretch;
	gap: 24px;
	justify-content: center;
	align-items: center;

	@media (min-width: 0px) and (max-width: 599px) {
		padding: 24px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 24px 36px;
	}

	& .button-album {
		color: ${({ theme, $mode }) =>
			$mode === "light"
				? theme.sys.light.primary
				: theme.sys.dark.primary} !important;
	}
`;

const GuideAlbumContainer = styled.div<{ width: number }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	position: relative;
	width: ${({ width }) => width}px;
	height: 4px;
`;
const GuideBlogCover = styled.div`
	display: flex;
	flex-direction: row;
	position: absolute;
	width: 100%;
	bottom: 0px;
`;
const Video = styled.video<{ $isLoaded: boolean; $onHover: boolean }>`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	transition: opacity 1s ease;
	outline: 3px solid white; /* สีและความหนาของเส้นขอบ */
	outline-offset: -3px;
	border-radius: 4px;
	opacity: ${({ $onHover }) => ($onHover ? 1 : 0)};
	filter: ${({ $isLoaded }) => ($isLoaded ? "none" : "blur(20px)")};
`;
const GuideMedia = styled.div`
	position: relative;
	display: flex;
	width: 100%;
	height: 72px;
	border-radius: 4px;
	overflow: hidden;
`;
const LineSlide = styled.div<{ $active: boolean; $mode: string }>`
	width: 100%;
	height: 2px;
	background-color: ${({ $active, $mode, theme }) =>
		$mode === "light"
			? $active
				? theme.sys.light.primary
				: theme.sys.light["outline-variant"]
			: $active
			? theme.sys.dark.primary
			: theme.sys.dark["outline-variant"]};
	cursor: pointer;

	&:hover {
		background-color: ${({ theme, $mode }) =>
			$mode === "light" ? theme.sys.light.outline : theme.sys.dark.outline};
	}
`;
const GuideCardBlog = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	gap: 16px;
`;
interface MediaGuideProps {
	media: {
		original: string;
		type: string;
		grid_column: string;
		grid_row: string;
		blurDataUrl: string;
	};
	active: boolean;
	mediaIndex: number;
	handleClickGuide: (i: number) => void;
	mode: "light" | "dark";
}

const MediaGuideCard: React.FC<MediaGuideProps> = ({
	media,
	active,
	mediaIndex,
	handleClickGuide,
	mode,
}) => {
	const [loadedVideo, setLoadedVideo] = useState<boolean>(false);
	const [onMediaHover, setOnMediaHover] = useState<boolean>(false);

	const handleVideoLoad = () => {
		setLoadedVideo(true);
	};

	const handleOnMouseEnter = () => {
		setOnMediaHover(true);
	};

	const handleOnMouseLeave = () => {
		setOnMediaHover(false);
	};
	return (
		<GuideCardBlog>
			<GuideMedia>
				{media.type === "img" ? (
					<Image
						src={media.original}
						alt="alubum viwer"
						fill
						style={{
							objectFit: "cover",
							outline: "3px solid white",
							outlineOffset: "-3px",
							borderRadius: "4px",
							transition: "opacity 1s ease",
							opacity: `${onMediaHover ? 1 : 0}`,
							zIndex: 0,
						}}
						placeholder="blur"
						blurDataURL={media.blurDataUrl}
					/>
				) : (
					<Video
						$onHover={onMediaHover}
						muted
						loop
						playsInline
						$isLoaded={loadedVideo}
						onLoadedData={handleVideoLoad}
						preload="metadata"
					>
						<source src={media.original} type="video/mp4" />
					</Video>
				)}
			</GuideMedia>
			<LineSlide
				$mode={mode}
				onMouseEnter={handleOnMouseEnter}
				onMouseLeave={handleOnMouseLeave}
				$active={active}
				onClick={() => {
					handleClickGuide(mediaIndex);
				}}
			/>
		</GuideCardBlog>
	);
};
interface Props {
	width: number;
	medias: Array<{
		original: string;
		type: string;
		grid_column: string;
		grid_row: string;
		blurDataUrl: string;
	}>;
	activeIndex: number;
	setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
	handleClickLeft: () => void;
	handleClickRight: () => void;
	handleClickGuide: (i: number) => void;
	mode: "light" | "dark";
}

const AlbumViwerControl: React.FC<Props> = ({
	width,
	medias,
	activeIndex,
	setActiveIndex,
	handleClickLeft,
	handleClickRight,
	handleClickGuide,
	mode,
}) => {
	return (
		<StyledContent $mode={mode}>
			<Button
				style="text"
				showIcon="pre"
				labelText="PREV"
				onClick={handleClickLeft}
				IconName={faChevronLeft}
				className="button-album"
				ariaLabel="View the previous photo"
			/>
			{width < 1366 ? (
				<></>
			) : (
				<GuideAlbumContainer
					width={
						136 * medias.length > width - 380
							? width - 380
							: 136 * medias.length
					}
				>
					<GuideBlogCover>
						{medias.map((item, k) => (
							<MediaGuideCard
								key={k}
								media={item}
								active={activeIndex == k ? true : false}
								mediaIndex={k}
								handleClickGuide={handleClickGuide}
								mode={mode}
							/>
						))}
					</GuideBlogCover>
				</GuideAlbumContainer>
			)}

			<Button
				style="text"
				showIcon="trailing"
				labelText="NEXT"
				onClick={handleClickRight}
				IconName={faChevronRight}
				className="button-album"
				ariaLabel="View the next photo"
			/>
		</StyledContent>
	);
};

export default AlbumViwerControl;
