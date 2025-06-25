"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { typography } from "../../../src/app/css/typography";

const StyledPart = styled.div<{ width: number }>`
	align-items: flex-start;
	background-color: ${({ theme }) => theme.sys.dark.surface};
	display: flex;
	flex-direction: column;
	gap: 40px;
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

const Heading = styled.div`
	color: ${({ theme }) => theme.sys.dark["on-surface"]};
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
	overflow: hidden;
`;

const VideoBlog = styled.div`
	display: flex;
	flex: 1;
	background-color: ${({ theme }) => theme.sys.dark["surface-container-low"]};
	border-radius: 4px;
	height: 100%;
	overflow: hidden;
	position: relative;
`;

const GridComingsoon = styled.div`
	background-color: ${({ theme }) => theme.sys.dark["surface-container-low"]};
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const TextWrapper = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.dark["on-surface"]};
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
	height: number;
	width: number;
	medias: Array<Media>;
}

interface MediasProps {
	width: number;
	medias: Array<Media>;
}

interface MediaClassify {
	media: Media;
	priority: boolean;
}
const MediaBlog: React.FC<MediaClassify> = ({ media, priority }) => {
	return (
		<>
			{media.type === "img" ? (
				<Image
					src={media.original}
					alt="product images"
					fill
					style={{
						objectFit: "cover",
						objectPosition: "center",
						borderRadius: "4px",
						zIndex: 0,
					}}
					placeholder="blur"
					blurDataURL={media.blurDataUrl}
					key={media.original}
					priority={priority}
				/>
			) : media.type === "mp4" ? (
				<VideoBlog>
					<Video autoPlay muted loop playsInline poster={media.blurDataUrl}>
						<source src={media.original} type="video/mp4" />
					</Video>
				</VideoBlog>
			) : (
				<GridComingsoon>
					<TextWrapper>coming soon</TextWrapper>
				</GridComingsoon>
			)}
		</>
	);
};
const MediaPart: React.FC<MediasProps> = ({ width, medias }) => {
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
							<MediaBlog media={set[0]} priority={true} />
							{set.length > 1 ? (
								<MediaColumn>
									<MediaBlog media={set[1]} priority={false} />
									{set.length > 2 ? (
										<MediaBlog media={set[2]} priority={false} />
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
									<MediaBlog media={set[1]} priority={false} />
									{set.length > 2 ? (
										<MediaBlog media={set[2]} priority={false} />
									) : (
										<></>
									)}
								</MediaColumn>
							) : (
								<></>
							)}
							<MediaBlog media={set[0]} priority={false} />
						</>
					)}
				</MediaRow>
			))}
		</>
	);
};
const SeeSightsMobile: React.FC<Props> = ({ height, width, medias }) => {
	return (
		<StyledPart width={width}>
			<Heading>See Sights</Heading>
			<LinePicture>
				<MediaPart width={width} medias={medias} />
			</LinePicture>
		</StyledPart>
	);
};

export default SeeSightsMobile;
