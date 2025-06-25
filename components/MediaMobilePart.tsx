"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { typography } from "../src/app/css/typography";
import Image from "next/image";

const StyledPart = styled.div<{ width: number; $mode: string }>`
	align-items: flex-start;
	background-color: ${({ theme, $mode }) =>
		$mode === "light" ? theme.sys.light.surface : theme.sys.dark.surface};
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: ${({ width }) => width}px;
	height: auto;
	padding: 96px 16px 16px 16px;
	position: relative;
	box-sizing: border-box;

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 96px 32px 32px 32px;
		gap: 24px;
	}
`;

const Heading = styled.div<{ $mode: string }>`
	color: ${({ theme, $mode }) =>
		$mode === "light"
			? theme.sys.light["on-surface"]
			: theme.sys.dark["on-surface"]};
	${typography.headline.large}
	position: relative;
	white-space: nowrap;
	width: fit-content;

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.display.small}
	}
`;

const LinePicture = styled.div`
	align-self: stretch;
	display: flex;
	flex-direction: column;
	gap: 4px;
	position: relative;
	width: 100%;
`;

const MediaRow = styled.div<{ width: number }>`
	display: flex;
	flex-direction: row;
	gap: 4px;
	height: ${({ width }) => ((width - 32) / 8) * 8 - 2}px;

	@media (min-width: 600px) and (max-width: 839px) {
		height: ${({ width }) => ((width - 64) / 8) * 8 - 2}px;
	}
`;
const MediaColumn = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 4px;
`;
const ImageBlog = styled.div<{ $mode: string }>`
	display: flex;
	flex: 1;
	overflow: hidden;
	border-radius: 4px;
	height: 100%;
	position: relative;
	background-color: ${({ theme, $mode }) =>
		$mode === "light" ? theme.sys.light.surface : theme.sys.dark.surface};
	overflow: hidden;
`;

const VideoBlog = styled.div<{ $mode: string }>`
	display: flex;
	flex: 1;
	background-color: ${({ theme, $mode }) =>
		$mode === "light"
			? theme.sys.light["surface-container-high"]
			: theme.sys.dark["surface-container-low"]};
	border-radius: 4px;
	height: 100%;
	overflow: hidden;
	position: relative;
`;

const GridComingsoon = styled.div<{ $mode: string }>`
	background-color: ${({ theme, $mode }) =>
		$mode === "light"
			? theme.sys.light["surface-container-high"]
			: theme.sys.dark["surface-container-low"]};
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const TextWrapper = styled.div<{ $mode: string }>`
	align-self: stretch;
	color: ${({ theme, $mode }) =>
		$mode === "light"
			? theme.sys.light["on-surface"]
			: theme.sys.dark["on-surface"]};
	${typography.headline.small}
	position: relative;
	text-align: center;

	@media (min-width: 0px) and (max-width: 599px) {
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

type Media = {
	original: string;
	type: string;
	grid_column: string;
	grid_row: string;
	blurDataUrl: string;
};
interface Props {
	albumName: string;
	height: number;
	width: number;
	medias: Array<Media>;
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	mode: "light" | "dark";
	setIndexClicked: React.Dispatch<React.SetStateAction<number>>;
	setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

interface MediasProps {
	width: number;
	medias: Array<Media>;
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	mode: "light" | "dark";
	setIndexClicked: React.Dispatch<React.SetStateAction<number>>;
	setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

interface MediaClassify {
	media: Media;
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	mode: "light" | "dark";
	setIndexClicked: React.Dispatch<React.SetStateAction<number>>;
	index: number;
	setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}
const MediaBlog: React.FC<MediaClassify> = ({
	media,
	setIsOpenModal,
	mode,
	setIndexClicked,
	index,
	setScrollPosition,
}) => {
	const handleOnClick = (i: number) => {
		setIndexClicked(i);
		setIsOpenModal(true);
		setScrollPosition(window.scrollY);
	};

	return (
		<>
			{media.type === "img" ? (
				<ImageBlog
					$mode={mode}
					onClick={() => {
						handleOnClick(index);
					}}
				>
					<Image
						src={media.original}
						alt="product images"
						fill
						style={{
							objectFit: "cover",
							objectPosition: "center",
							zIndex: 0,
						}}
						placeholder="blur"
						blurDataURL={media.blurDataUrl}
						key={media.blurDataUrl}
					/>
				</ImageBlog>
			) : media.type === "mp4" ? (
				<VideoBlog
					$mode={mode}
					onClick={() => {
						handleOnClick(index);
					}}
				>
					<Video autoPlay muted loop playsInline poster={media.blurDataUrl}>
						<source src={media.original} type="video/mp4" />
					</Video>
				</VideoBlog>
			) : (
				<GridComingsoon $mode={mode}>
					<TextWrapper $mode={mode}>coming soon</TextWrapper>
				</GridComingsoon>
			)}
		</>
	);
};
const MediaPart: React.FC<MediasProps> = ({
	width,
	medias,
	setIsOpenModal,
	mode,
	setIndexClicked,
	setScrollPosition,
}) => {
	const [mediasSet, setMediasSet] = useState<Array<Array<Media>>>([]);

	const fillMediasSet = () => {
		let i = 0;
		let arr: Array<Array<Media>> = [];
		let mdSet: Media[] = [];
		while (i < medias.length) {
			if (i % 3 == 2) {
				mdSet.push(medias[i]);
				arr.push(mdSet);
				mdSet = [];
			} else {
				mdSet.push(medias[i]);
				if (i == medias.length - 1) {
					arr.push(mdSet);
				}
			}
			i++;
		}

		const comingSoon = {
			original: "coming soon",
			type: "text",
			grid_column: "",
			grid_row: "",
			blurDataUrl: "",
		};
		switch (arr[arr.length - 1].length) {
			case 3:
				arr.push([comingSoon]);
			default: {
				let swap = arr[arr.length - 1];
				arr[arr.length - 1] = [...swap, comingSoon];
			}
		}

		setMediasSet(arr);
	};

	useEffect(() => {
		fillMediasSet();
	}, []);

	return (
		<>
			{mediasSet.map((set, i) => (
				<MediaRow key={i} width={width}>
					{i % 2 == 0 ? (
						<>
							<MediaBlog
								index={i * 3 + 0}
								setIndexClicked={setIndexClicked}
								mode={mode}
								setIsOpenModal={setIsOpenModal}
								media={set[0]}
								setScrollPosition={setScrollPosition}
							/>
							{set.length > 1 ? (
								<MediaColumn>
									<MediaBlog
										index={i * 3 + 1}
										setIndexClicked={setIndexClicked}
										mode={mode}
										setIsOpenModal={setIsOpenModal}
										media={set[1]}
										setScrollPosition={setScrollPosition}
									/>
									{set.length > 2 ? (
										<MediaBlog
											index={i * 3 + 2}
											setIndexClicked={setIndexClicked}
											mode={mode}
											setIsOpenModal={setIsOpenModal}
											media={set[2]}
											setScrollPosition={setScrollPosition}
										/>
									) : (
										<></>
									)}
								</MediaColumn>
							) : (
								<></>
							)}
						</>
					) : (
						<>
							{set.length > 1 ? (
								<MediaColumn>
									<MediaBlog
										index={i * 3 + 1}
										setIndexClicked={setIndexClicked}
										mode={mode}
										setIsOpenModal={setIsOpenModal}
										media={set[1]}
										setScrollPosition={setScrollPosition}
									/>
									{set.length > 2 ? (
										<MediaBlog
											index={i * 3 + 2}
											setIndexClicked={setIndexClicked}
											mode={mode}
											setIsOpenModal={setIsOpenModal}
											media={set[2]}
											setScrollPosition={setScrollPosition}
										/>
									) : (
										<></>
									)}
								</MediaColumn>
							) : (
								<></>
							)}
							<MediaBlog
								index={i * 3 + 0}
								setIndexClicked={setIndexClicked}
								mode={mode}
								setIsOpenModal={setIsOpenModal}
								media={set[0]}
								setScrollPosition={setScrollPosition}
							/>
						</>
					)}
				</MediaRow>
			))}
		</>
	);
};
const MediaMobilePart: React.FC<Props> = ({
	setIsOpenModal,
	width,
	medias,
	albumName,
	mode,
	setIndexClicked,
	setScrollPosition,
}) => {
	return (
		<StyledPart width={width} $mode={mode}>
			<Heading $mode={mode}>{albumName}</Heading>
			<LinePicture>
				<MediaPart
					setIndexClicked={setIndexClicked}
					setIsOpenModal={setIsOpenModal}
					width={width}
					medias={medias}
					mode={mode}
					setScrollPosition={setScrollPosition}
				/>
			</LinePicture>
		</StyledPart>
	);
};

export default MediaMobilePart;
