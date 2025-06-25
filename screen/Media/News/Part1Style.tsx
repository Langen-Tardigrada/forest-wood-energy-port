"use client";
import React from "react";
import styled from "@emotion/styled";
import { News } from "../../Admin/News/types/news";
import { typography } from "../../../src/app/css/typography";

const StyledContent = styled.div`
	align-items: flex-start;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	position: relative;
	align-self: stretch;
	gap: 24px;
	@media (min-width: 0px) and (max-width: 599px) {
		display: flex;
		flex-direction: column;
		gap: 96px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		display: flex;
		flex-direction: column;
		gap: 96px;
	}
`;
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: 1 / span 7;
	gap: 24px;
`;
const HilightText = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	grid-column: 8 / span 5;
	padding: 40px;
	justify-content: center;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	font-size: 64px;
	font-style: normal;
	font-weight: 400;
	line-height: 72px;
	word-break: break-word;
	white-space: normal;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		line-height: 48px;
		padding: 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 48px;
		font-style: normal;
		font-weight: 400;
		line-height: 56px;
		padding: 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 56px;
		font-style: normal;
		font-weight: 400;
		line-height: 64px;
		padding: 24px;
	}
`;
const HeaderContainer = styled.div`
	display: flex;
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	font-size: 40px;
	font-style: normal;
	font-weight: 400;
	line-height: 40px; /* 100% */
	word-break: break-word;
	white-space: normal;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: 40px; /* 100% */
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 28px;
		font-style: normal;
		font-weight: 500;
		line-height: 40px; /* 100% */
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 36px;
		font-style: normal;
		font-weight: 400;
		line-height: 40px; /* 100% */
	}
`;
const DetailContainer = styled.div`
	display: flex;
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.body.large}
	text-align: justify;
	word-break: break-word;
	white-space: normal;
	white-space: pre-wrap;
`;

interface Props {
	news: News;
}

const Part1Style: React.FC<Props> = ({ news }) => {
	return (
		<StyledContent>
			<InfoContainer
				style={{
					gridColumn: news.information.first.quote === "" ? "1 / 13" : "1 / 7",
				}}
			>
				<HeaderContainer>{news.information.first.info.heading}</HeaderContainer>
				{news.information.first.info.description.map((item, key) => (
					<DetailContainer key={key}>&emsp;&emsp;{item}</DetailContainer>
				))}
			</InfoContainer>
			{news.information.first.quote === "" ? (
				<></>
			) : (
				<HilightText>&emsp;{news.information.first.quote}</HilightText>
			)}
		</StyledContent>
	);
};

export default Part1Style;
