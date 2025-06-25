"use client";
import React, { useLayoutEffect, useState } from "react";
import styled from "@emotion/styled";
import { News } from "../../../screen/Admin/News/types/news";
import { typography } from "../../../src/app/css/typography";
import BlurImage from "../../../components/BluredImage";

const StyledContent = styled.div`
	align-items: center;
	display: flex;
	position: relative;
	flex-direction: column;
	align-self: stretch;
	gap: 24px;
	justify-content: flex-start;
	@media (min-width: 0px) and (max-width: 599px) {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		display: flex;
		flex-direction: column;
	}
`;
const PictureBox = styled.div<{ height: number }>`
	display: flex;
	width: 100%;
	border-radius: 8px;
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	height: ${({ height }) => height}px;
	overflow: hidden;
`;

const HeaderContainer = styled.div`
	display: flex;
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: 40px; /* 100% */
	letter-spacing: 0px;
	word-break: break-all;
	white-space: normal;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 22px;
		font-style: normal;
		font-weight: 500;
		line-height: 40px; /* 100% */
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: 40px; /* 100% */
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 28px;
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
	white-space: pre-wrap;
`;
const HilightText = styled.div<{ width: number }>`
	display: flex;
	flex-direction: column;
	width: ${({ width }) => width * 0.656}px;
	padding: 56px 0px;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	text-align: justify;
	word-break: break-all;
	white-space: normal;
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	font-size: 24px;
	font-style: italic;
	font-weight: 400;
	line-height: 32px;
	text-align: center;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 18px;
		font-style: italic;
		font-weight: 500;
		line-height: 32px; /* 100% */
		padding: 48px 0px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 18px;
		font-style: italic;
		font-weight: 500;
		line-height: 32px; /* 100% */
		padding: 80px 0px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 22px;
		font-style: italic;
		font-weight: 400;
		line-height: 32px; /* 100% */
		padding: 72px 0px;
	}
`;
interface Props {
	width: number;
	height: number;
	news: News;
}

const Part3Style: React.FC<Props> = ({ width, height, news }) => {
	const [imgSize, setImgSize] = useState({ width: width, height: height });

	useLayoutEffect(() => {
		const getImageSizeFromURL = (
			url: string
		): Promise<{ width: number; height: number }> => {
			return new Promise((resolve, reject) => {
				const img = new window.Image();
				img.onload = () => resolve({ width: img.width, height: img.height });
				img.onerror = reject;
				img.src = url;
			});
		};

		if (news.imageURL) {
			getImageSizeFromURL(news.imageURL).then((size) => {
				setImgSize(size);
				console.log("✔️ loaded image size", size);
			});
		}
	}, [news.imageURL]);

	console.log(news.information.third.info);

	return (
		<StyledContent>
			{news.information.third.heading !== "" ? (
				<HeaderContainer>{news.information.third.heading}</HeaderContainer>
			) : (
				<></>
			)}

			{news.information.third.info.map((item, k) => (
				<DetailContainer key={k}>&emsp;&emsp;{item}</DetailContainer>
			))}
			{news.information.third.hilight !== "" ? (
				<HilightText width={width}>
					{news.information.third.hilight}
				</HilightText>
			) : (
				<></>
			)}

			{news.information.third.info2.map((item, k) => (
				<DetailContainer key={k}>&emsp;&emsp;{item}</DetailContainer>
			))}
			{news.information.third.imageURL === "" ? (
				<></>
			) : (
				<PictureBox height={imgSize.height / (imgSize.width / width)}>
					<BlurImage
						src={news.information.third.imageURL}
						alt={"third-part-image"}
						fill
						style={{
							objectFit: "cover",
							objectPosition: "center",
							zIndex: 0,
						}}
					/>
				</PictureBox>
			)}

			{news.information.third.info3.map((item, k) => (
				<DetailContainer key={k}>&emsp;&emsp;{item}</DetailContainer>
			))}
		</StyledContent>
	);
};

export default Part3Style;
