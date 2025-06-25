"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Footer from "../../../components/Footer";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import ForthPart from "./ForthPart";
import SeeSights from "./SeeSights";
import { ProductDetail } from "../../../public/information/product/product";
import FooterMobile from "../../../components/FooterMobile";
import AlbumViwerMobile from "../../../components/AlbumViwerMobile";
import AlbumViewer from "../../../components/AlbumViewer";
import MediaMobilePart from "../../../components/MediaMobilePart";
import { lora } from "../../../src/app/css/fonts";

const StyledContent = styled.div`
	align-items: flex-start;
	display: flex;
	position: relative;
	width: 100%;
	flex-direction: column;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ใน Chrome, Safari และ Edge */
	}
`;

interface Props {
	width: number;
	height: number;
	product: ProductDetail;
}

const ProductContent: React.FC<Props> = ({ width, height, product }) => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [indexClicked, setIndexClicked] = useState(0);
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

	return (
		<>
			{isOpenModal ? (
				width < 1366 ? (
					<AlbumViwerMobile
						albumName={"See Sights"}
						height={height}
						width={width}
						medias={product.seeSights}
						setIsOpenModal={setIsOpenModal}
						indexClicked={indexClicked}
						mode="dark"
					/>
				) : (
					<AlbumViewer
						albumName={"See Sights"}
						mode="dark"
						width={width}
						medias={product.seeSights}
						setIsOpenModal={setIsOpenModal}
						indexClicked={indexClicked}
					/>
				)
			) : (
				<StyledContent className={`${lora.variable}`}>
					<FirstPart
						width={width}
						height={height}
						mediaUrl={product.firstPart.mediaSource}
						productName={product.firstPart.name}
						mediaType={product.firstPart.mediaType}
						brightness={product.firstPart.brightness}
						blurDataUrl={product.firstPart.blurDataUrl}
					/>
					<SecondPart
						width={width}
						height={height}
						heading={product.secondPart.heading}
						body={product.secondPart.body}
						url={product.secondPart.url}
						mediaType={product.secondPart.mediaType}
						blurDataUrl={product.secondPart.blurDataUrl}
					/>
					<ThirdPart
						width={width}
						height={height}
						heading={product.thirdPart.heading}
						body={product.thirdPart.body}
						url={product.thirdPart.url}
						blurDataUrl={product.thirdPart.blurDataUrl}
					/>
					{product.forthPart.heading === "" ? (
						<></>
					) : (
						<ForthPart
							width={width}
							height={height}
							heading={product.forthPart.heading}
							body={product.forthPart.body}
							url={product.forthPart.url}
							blurDataUrl={product.forthPart.blurDataUrl}
						/>
					)}
					{width < 840 ? (
						<MediaMobilePart
							height={height}
							width={width}
							medias={product.seeSights}
							albumName={"See Sights"}
							setIsOpenModal={setIsOpenModal}
							mode={"dark"}
							setIndexClicked={setIndexClicked}
							setScrollPosition={setScrollPosition}
						/>
					) : (
						<SeeSights
							width={width}
							medias={product.seeSights}
							setIndexClicked={setIndexClicked}
							setIsOpenModal={setIsOpenModal}
							setScrollPosition={setScrollPosition}
						/>
					)}

					{width < 840 ? <FooterMobile mode="dark" /> : <Footer mode="dark" />}
				</StyledContent>
			)}
		</>
	);
};

export default ProductContent;
