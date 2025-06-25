"use client";
import React from "react";
import styled from "@emotion/styled";
import Footer from "../../../components/Footer";
import FooterMobile from "../../../components/FooterMobile";
import HiglightPart from "./HilightPart";
import NewsPart from "./NewsPart";
import { News } from "../../Admin/News/types/news";

const StyledContent = styled.div`
	align-items: flex-start;
	display: flex;
	position: relative;
	width: 100%;
	flex-direction: column;
	scrollbar-width: none; /* สำหรับ Firefox */
	background-color: ${({ theme }) => theme.sys.light.surface};

	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ใน Chrome, Safari และ Edge */
	}
`;

interface Props {
	width: number;
	height: number;
	hilightNews: News[];
	allNews: News[];
}

const NewsContent: React.FC<Props> = ({
	width,
	height,
	allNews,
	hilightNews,
}) => {
	return (
		<StyledContent>
			<HiglightPart width={width} height={height} news={hilightNews} />
			<NewsPart width={width} height={height} news={allNews} />
			{width < 840 ? <FooterMobile mode="grey" /> : <Footer mode="grey" />}
		</StyledContent>
	);
};

export default NewsContent;
