"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Footer from "../../../components/Footer";
import FooterMobile from "../../../components/FooterMobile";
import AlbumMediaPart from "./AlbumMediaPart";
import ControlPart from "../../../components/ControlPart";
import { AlbumGuideList } from "../../../public/information/gallery/album";
import AlbumViewer from "../../../components/AlbumViewer";
import AlbumViwerMobile from "../../../components/AlbumViwerMobile";
import MediaMobilePart from "../../../components/MediaMobilePart";

const StyledContent = styled.div`
	align-items: flex-start;
	display: flex;
	position: relative;
	width: 100%;
	flex-direction: column;
	background-color: ${({ theme }) => theme.sys.light.surface};
	gap: 24px;

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 40px;
	}
`;

interface Props {
	width: number;
	height: number;
	medias: Array<{
		original: string;
		type: string;
		grid_column: string;
		grid_row: string;
		blurDataUrl: string;
	}>;
	albumName: string;
	slug: string;
}

const AlbumContainer: React.FC<Props> = ({
	width,
	height,
	medias,
	albumName,
	slug,
}) => {
	const [index, setIndex] = useState(0);
	const [indexClicked, setIndexClicked] = useState(0);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		if (!isOpenModal) {
			const offset = window.innerHeight - document.documentElement.clientHeight;
			window.scrollTo({
				top: scrollPosition - offset,
				behavior: "smooth", //FIX! must use it because window.scrollTo works with html elements if I don't use it , it will scroll to wrong position.
			});
		}
	}, [isOpenModal, scrollPosition]);

	useEffect(() => {
		for (let i = 0; i < AlbumGuideList.length; i++) {
			if (AlbumGuideList[i].slug === slug) {
				setIndex(i);
			}
		}
	}, [slug]);

	return (
		<>
			{isOpenModal ? (
				width < 1366 ? (
					<AlbumViwerMobile
						albumName={albumName}
						height={height}
						width={width}
						medias={medias}
						setIsOpenModal={setIsOpenModal}
						indexClicked={indexClicked}
						mode="light"
					/>
				) : (
					<AlbumViewer
						albumName={albumName}
						mode="light"
						width={width}
						medias={medias}
						setIsOpenModal={setIsOpenModal}
						indexClicked={indexClicked}
					/>
				)
			) : (
				<StyledContent>
					{width < 840 ? (
						<MediaMobilePart
							height={height}
							width={width}
							medias={medias}
							albumName={albumName}
							setIsOpenModal={setIsOpenModal}
							mode={"light"}
							setIndexClicked={setIndexClicked}
							setScrollPosition={setScrollPosition}
						/>
					) : (
						<AlbumMediaPart
							width={width}
							medias={medias}
							albumName={albumName}
							setIsOpenModal={setIsOpenModal}
							setIndexClicked={setIndexClicked}
							setScrollPosition={setScrollPosition}
						/>
					)}
					<ControlPart
						prev={{
							slug:
								index == 0
									? `/media/gallery/${slug}`
									: `/media/gallery/${AlbumGuideList[index - 1].slug}`,
							headline: index == 0 ? albumName : AlbumGuideList[index - 1].name,
							state: index == 0 ? "disabled" : "enabled",
						}}
						next={{
							slug:
								index == AlbumGuideList.length - 1
									? `/media/gallery/${slug}`
									: `/media/gallery/${AlbumGuideList[index + 1].slug}`,
							headline:
								index == AlbumGuideList.length - 1
									? albumName
									: AlbumGuideList[index + 1].name,
							state:
								index == AlbumGuideList.length - 1 ? "disabled" : "enabled",
						}}
						curr={albumName}
						width={width}
						pageName="Gallery"
						pageLink="/media/gallery"
					/>
					{width < 840 ? (
						<FooterMobile mode="light" />
					) : (
						<Footer mode="light" />
					)}
				</StyledContent>
			)}
		</>
	);
};

export default AlbumContainer;
