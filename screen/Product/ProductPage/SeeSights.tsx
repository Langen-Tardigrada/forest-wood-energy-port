"use client";
import React from "react";
import styled from "@emotion/styled";
import LineSectionComponent from "../../../components/LineSection";
import LinePicturePart from "../../../components/LinePicturePart";
import { typography } from "../../../src/app/css/typography";

const StyledPart = styled.div<{ width: number }>`
	align-items: flex-start;
	background-color: ${({ theme }) => theme.sys.dark.surface};
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: ${({ width }) => width}px;
	height: auto;
	padding: 128px 40px;
	position: relative;
	box-sizing: border-box;
	@media (min-width: 0px) and (max-width: 599px) {
		padding: 56px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 56px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 56px 24px;
	}
`;

const Heading = styled.div`
	color: ${({ theme }) => theme.sys.dark["on-surface"]};
	${typography.display.large}
	margin-top: -1px;
	position: relative;
	white-space: nowrap;
	width: fit-content;
	@media (min-width: 0px) and (max-width: 599px) {
		${typography.display.small}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.display.medium}
	}
`;
interface Props {
	width: number;
	medias: Array<{
		original: string;
		type: string;
		grid_column: string;
		grid_row: string;
		blurDataUrl: string;
	}>;
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	setIndexClicked: React.Dispatch<React.SetStateAction<number>>;
	setScrollPosition: React.Dispatch<React.SetStateAction<number>>;
}

const SeeSights: React.FC<Props> = ({
	width,
	medias,
	setIsOpenModal,
	setIndexClicked,
	setScrollPosition,
}) => {
	return (
		<StyledPart width={width}>
			<Heading>See sights</Heading>
			<LineSectionComponent mode="dark" />
			<LinePicturePart
				setIsOpenModal={setIsOpenModal}
				width={width}
				medias={medias}
				setIndexClicked={setIndexClicked}
				setScrollPosition={setScrollPosition}
				mode="dark"
			/>
		</StyledPart>
	);
};

export default SeeSights;
