"use client";
import React from "react";
import styled from "@emotion/styled";
import { News } from "../../../screen/Admin/News/types/news";
import { typography } from "../../../src/app/css/typography";
import BlurImage from "../../../components/BluredImage";

const StyledContent = styled.div`
	align-items: flex-start;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	position: relative;
	flex-direction: row;
	align-self: stretch;
	gap: 24px;
	@media (min-width: 0px) and (max-width: 599px) {
		display: flex;
		flex-direction: column-reverse;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		display: flex;
		flex-direction: column-reverse;
	}
`;
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: 8 / span 5;
	gap: 24px;
	text-align: justify;

	@media (min-width: 0px) and (max-width: 599px) {
		width: inherit;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: inherit;
	}
`;
const PictureBox = styled.div`
	display: flex;
	grid-column: 1 / span 7;
	border-radius: 8px;
	height: 100%;
	position: relative;
	box-sizing: border-box;
	overflow: hidden;

	@media (min-width: 0px) and (max-width: 599px) {
		width: inherit;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: inherit;
	}
`;

const HeaderContainer = styled.div`
	display: flex;
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 100% */
	letter-spacing: 0px;
	word-break: break-word;
	white-space: normal;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 22px;
		font-weight: 500;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 22px;
		font-weight: 500;
	}
`;
const DetailContainer = styled.div`
	display: flex;
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.body.large}
	text-align: justify;
	word-break: break-all;
	white-space: normal;
	white-space: pre-wrap;
`;

interface Props {
	news: News;
}

const Part2Style: React.FC<Props> = ({ news }) => {
	return (
		<StyledContent>
			{news.information.second.imageURL !== "" ? (
				<PictureBox>
					<BlurImage
						src={news.information.second.imageURL}
						alt={"second-part-image"}
						fill
						style={{
							objectFit: "cover",
							objectPosition: "center",
							zIndex: 0,
						}}
					/>
				</PictureBox>
			) : (
				<></>
			)}

			{news.information.second.info.length > 0 ||
			news.information.second.hilight ? (
				<InfoContainer
					style={{
						gridColumn:
							news.information.second.imageURL !== "" ? "8 / 13" : "1 / 13",
					}}
				>
					{news.information.second.info.map((item, k) => (
						<DetailContainer key={k}>&emsp;&emsp;{item}</DetailContainer>
					))}
					<HeaderContainer>
						&emsp;&emsp;{news.information.second.hilight}
					</HeaderContainer>
					{news.information.second.info2.map((item, k) => (
						<DetailContainer key={k}>&emsp;&emsp;{item}</DetailContainer>
					))}
				</InfoContainer>
			) : (
				<></>
			)}
		</StyledContent>
	);
};

export default Part2Style;
