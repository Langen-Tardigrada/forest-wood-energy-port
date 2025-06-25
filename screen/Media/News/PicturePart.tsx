"use client";
import React, { useState } from "react";
import styled from "@emotion/styled";
import BlurImage from "../../../components/BluredImage";

const PictureContainer = styled.div<{
	height: number;
}>`
	background-color: ${({ theme }) => theme.sys.light.surface};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
	height: ${({ height }) => height * 0.7 + 50}px;
	background-color: black;
	position: relative;
	overflow: hidden;

	@media (min-width: 0px) and (max-width: 599px) {
		height: ${({ height }) => height * 0.715 + 72}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		height: ${({ height }) => height * 0.51 + 72}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		height: ${({ height }) => height * 0.797 + 50}px;
	}
`;
const ButtonControlContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: inherit;

	& .buttonControl {
		color: rgba(244, 250, 251, 0.38) !important;
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
const LineGuideContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: auto;
	align-self: stretch;
`;
const Line = styled.div<{ $runon: boolean }>`
	display: flex;
	height: 4px;
	width: 100%;
	align-self: stretch;
	background-color: ${({ $runon }) =>
		$runon ? "rgba(190, 200, 201, 0.66)" : "rgb(111, 121, 121, 0.38)"};
`;

interface LineProps {
	index: number;
	total: number;
}

const LineGuide: React.FC<LineProps> = ({ index, total }) => {
	const arr = new Array();
	for (let i = 0; i < total; i++) {
		arr.push(i);
	}

	return (
		<LineGuideContainer>
			{arr.map((i, key) => (
				<Line key={key} $runon={i == index} />
			))}
		</LineGuideContainer>
	);
};

interface Props {
	width: number;
	height: number;
	imageUrl: string;
}

const PicturePart: React.FC<Props> = ({ width, height, imageUrl }) => {
	const [index, setIndex] = useState(0);

	//TODO: next phase change picturepart collect many images or video
	// const handleClickRight = () => {
	// 	if (index == medias.length - 1) {
	// 		setIndex(0);
	// 	} else {
	// 		setIndex(index + 1);
	// 	}
	// };

	// const handleClickLeft = () => {
	// 	if (index == 0) {
	// 		setIndex(medias.length - 1);
	// 	} else {
	// 		setIndex(index - 1);
	// 	}
	// };

	return (
		<PictureContainer height={height}>
			<BlurImage
				src={
					imageUrl !== ""
						? imageUrl
						: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/login/fog.png"
				}
				alt={"news images"}
				fill
				style={{
					objectFit: "cover",
					objectPosition: "center",
					zIndex: 0,
				}}
				priority={true}
				// placeholder="blur"
				// blurDataURL={""}
			/>
			{/* <StyledContainer>
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
			</StyledContainer>
			{medias.length > 1 ? (
				<LineGuide index={index} total={medias.length} />
			) : (
				<></>
			)} */}
		</PictureContainer>
	);
};

export default PicturePart;
