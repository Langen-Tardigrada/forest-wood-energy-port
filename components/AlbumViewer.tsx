"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { ButtonIcon } from "./ButtonIcon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import AlbumViwerControl from "./AlbumViewerControl";
import { typography } from "../src/app/css/typography";
import Image from "next/image";

const StyledPart = styled.div<{ width: number; $mode: string }>`
	align-items: flex-start;
	background-color: ${({ theme, $mode }) =>
		$mode === "light" ? theme.sys.light.surface : theme.sys.dark.surface};
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 100vw;
	height: 100vh;
	padding: 96px 40px 40px 40px;
	position: relative;
	box-sizing: border-box;
	@media (min-width: 0px) and (max-width: 599px) {
		padding: 96px 16px 56px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 96px 32px 56px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
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
	${typography.display.large}
	position: relative;
	white-space: nowrap;
	width: fit-content;
	@media (min-width: 0px) and (max-width: 599px) {
		${typography.headline.large}
	}
	@media (min-width: 600px) and (max-width: 839px) {
		${typography.display.small}
	}
	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.display.medium}
	}
`;
const MediaSlider = styled.div<{ width: number }>`
	display: flex;
	flex-direction: column;
	width: ${({ width }) => width - 80}px;
	height: 100%;
	overflow: hidden;
`;
const MediaSliderInner = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	width: auto;
	height: 100%;
	overflow-x: auto;
	scrollbar-width: none;
	transition: transform 0.5s ease-in-out;
	will-change: transform;
	scroll-behavior: smooth;
	-webkit-overflow-scrolling: touch;

	&::-webkit-scrollbar {
		display: none;
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

	@media (min-width: 840px) and (max-width: 1199px) {
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

interface Props {
	albumName: string;
	mode: "dark" | "light";
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
}

const AlbumViwer: React.FC<Props> = ({
	width,
	medias,
	albumName,
	setIsOpenModal,
	indexClicked,
	mode,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [activeIndex, setActiveIndex] = useState<number>(indexClicked);
	const [isAnimating, setIsAnimating] = useState(false);

	const handleClickGuide = (i: number) => {
		if (isAnimating || !containerRef.current) return;

		setIsAnimating(true); // เริ่มสถานะกำลังเลื่อน
		containerRef.current.scrollTo({
			left: i * (width - 80 + 16),
			behavior: "smooth",
		});

		setActiveIndex(i);
	};

	const handleScrollLeft = () => {
		if (isAnimating || !containerRef.current) return;

		setIsAnimating(true); // เริ่มสถานะกำลังเลื่อน
		if (activeIndex === 0) {
			containerRef.current.scrollTo({
				left: (medias.length - 1) * (width - 80 + 16),
				behavior: "smooth",
			});
			setActiveIndex(medias.length - 1);
		} else {
			containerRef.current.scrollBy({
				left: -(width - 80 + 16),
				behavior: "smooth",
			});
			setActiveIndex((prevIndex) => prevIndex - 1);
		}
	};

	const handleScrollRight = () => {
		if (isAnimating || !containerRef.current) return;

		setIsAnimating(true); // เริ่มสถานะกำลังเลื่อน
		if (activeIndex === medias.length - 1) {
			containerRef.current.scrollTo({
				left: 0,
				behavior: "smooth",
			});
			setActiveIndex(0);
		} else {
			containerRef.current.scrollBy({
				left: width - 80 + 16,
				behavior: "smooth",
			});
			setActiveIndex((prevIndex) => prevIndex + 1);
		}
	};

	useEffect(() => {
		if (containerRef.current) {
			// for first time for specific media's index
			containerRef.current.scrollTo({
				left: activeIndex * (width - 80 + 16),
				behavior: "smooth",
			});
		}
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			if (containerRef.current) {
				const { scrollLeft } = containerRef.current;
				const targetScroll = activeIndex * (width - 80 + 16); // คำนวณตำแหน่งเป้าหมาย
				if (Math.abs(scrollLeft - targetScroll) < 1) {
					setIsAnimating(false); // หยุดสถานะเมื่อเลื่อนเสร็จ
				}
			}
		};

		const currentRef = containerRef.current;
		if (currentRef) {
			currentRef.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (currentRef) {
				currentRef.removeEventListener("scroll", handleScroll);
			}
		};
	}, [activeIndex, containerRef]);

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
					className="button-header"
				/>
			</HeadlineContainer>
			<MediaSlider width={width}>
				<MediaSliderInner ref={containerRef}>
					{medias.map((item, i) =>
						item.type === "img" ? (
							<ImageBlog $mode={mode} width={width} key={i}>
								<Image
									src={item.original}
									alt={item.original}
									fill
									style={{
										objectFit: "contain",
										zIndex: 0,
									}}
									blurDataURL={item.blurDataUrl}
									placeholder="blur"
									key={item.blurDataUrl}
								/>
							</ImageBlog>
						) : (
							<VideoBlog width={width} key={i} $mode={mode}>
								<Video
									autoPlay
									muted
									loop
									playsInline
									poster={item.blurDataUrl}
								>
									<source src={item.original} type="video/mp4" />
								</Video>
							</VideoBlog>
						)
					)}
				</MediaSliderInner>
			</MediaSlider>
			<AlbumViwerControl
				width={width}
				medias={medias}
				activeIndex={activeIndex}
				setActiveIndex={setActiveIndex}
				handleClickLeft={handleScrollLeft}
				handleClickRight={handleScrollRight}
				handleClickGuide={handleClickGuide}
				mode={mode}
			/>
		</StyledPart>
	);
};

export default AlbumViwer;
