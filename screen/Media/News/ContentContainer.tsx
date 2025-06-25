"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Footer from "../../../components/Footer";
import FooterMobile from "../../../components/FooterMobile";
import PicturePart from "./PicturePart";
import Part1Style from "./Part1Style";
import Part2Style from "./Part2Style";
import Part3Style from "./Part3Style";
import ControlPart from "../../../components/ControlPart";
import { News } from "../../Admin/News/types/news";
import { lora } from "../../../src/app/css/fonts";

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
const ContentPartContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	padding: 40px;
	width: -webkit-fill-available;
	@media (min-width: 0px) and (max-width: 599px) {
		gap: 96px;
		padding: 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 96px;
		padding: 36px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		gap: 40px;
		padding: 24px;
	}
`;

interface Props {
	width: number;
	height: number;
	allNews: { id: string; date: Date; heading: string }[];
	news: News;
}

const ContentContainer: React.FC<Props> = ({
	width,
	height,
	news,
	allNews,
}) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		for (let i = 0; i < allNews.length; i++) {
			if (allNews[i].id === news.id) {
				setIndex(i);
			}
		}
	}, [news]);

	return (
		<StyledContent className={`${lora.variable}`}>
			<PicturePart width={width} height={height} imageUrl={news.imageURL} />
			<ContentPartContainer>
				<Part1Style news={news} />
				<Part2Style news={news} />
				<Part3Style news={news} width={width} height={height} />
			</ContentPartContainer>
			<ControlPart
				prev={{
					slug:
						index == 0
							? `/media/news/${news.id}`
							: `/media/news/${allNews[index - 1].id}`,
					headline: index == 0 ? news.heading : allNews[index - 1].heading,
					state: index == 0 ? "disabled" : "enabled",
				}}
				next={{
					slug:
						index == allNews.length - 1
							? `/media/news/${news.id}`
							: `/media/news/${allNews[index + 1].id}`,
					headline:
						index == allNews.length - 1
							? news.heading
							: allNews[index + 1].heading,
					state: index == allNews.length - 1 ? "disabled" : "enabled",
				}}
				curr={news.heading}
				width={width}
				pageLink="/media/news"
				pageName="News"
			/>
			{width < 840 ? <FooterMobile mode="light" /> : <Footer mode="light" />}
		</StyledContent>
	);
};

export default ContentContainer;
