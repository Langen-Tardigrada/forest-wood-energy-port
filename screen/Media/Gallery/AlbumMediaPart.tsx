"use client";
import React from "react";
import styled from "@emotion/styled";
import LinePicturePart from "../../../components/LinePicturePart";
import { typography } from "../../../src/app/css/typography";

const StyledPart = styled.div<{ width: number }>`
	align-items: flex-start;
	background-color: ${({ theme }) => theme.sys.light.surface};
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: ${({ width }) => width}px;
	height: auto;
	padding: 128px 40px;
	position: relative;
	box-sizing: border-box;

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 96px 24px 56px 24px;
	}
`;

const Heading = styled.div`
	color: ${({ theme }) => theme.sys.light["on-surface"]};
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

interface Props {
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	albumName: string;
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
}
const AlbumMediaPart: React.FC<Props> = ({
	setIsOpenModal,
	width,
	medias,
	albumName,
	setIndexClicked,
	setScrollPosition,
}) => {
	return (
		<StyledPart width={width}>
			<Heading>{albumName}</Heading>
			<LinePicturePart
				setIsOpenModal={setIsOpenModal}
				width={width}
				medias={medias}
				setIndexClicked={setIndexClicked}
				setScrollPosition={setScrollPosition}
				mode="light"
			/>
		</StyledPart>
	);
};

export default AlbumMediaPart;
