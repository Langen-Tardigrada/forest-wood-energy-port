"use client";
import React, { useRef } from "react";
import { Part } from "./FirstPart";
import styled from "@emotion/styled";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import { ProductPart } from "./ProductPart";
import Footer from "../../components/Footer";
import { PreviewProduct } from "../../public/information/home/home";
import FooterMobile from "../../components/FooterMobile";
import { ProductPartMobile } from "./ProductPartMobile";

const StyledContent = styled.div`
	align-items: flex-start;
	display: flex;
	position: relative;
	width: 100%;
	flex-direction: column;
	scrollbar-width: none; /* สำหรับ Firefox */

	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ใน Chrome, Safari และ Edge */
	}
`;

interface Props {
	width: number;
	height: number;
	video: { url: string; preload: string };
	image: { url: string; blurDataUrl: string };
	products: Array<PreviewProduct>;
}

const HomeContent: React.FC<Props> = ({
	width,
	height,
	video,
	image,
	products,
}) => {
	const contentRef = useRef<HTMLDivElement | null>(null);

	const handleContinueClick = () => {
		if (contentRef.current) {
			contentRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<StyledContent>
			<Part
				width={width}
				height={height}
				onClick={handleContinueClick}
				video={video}
			/>
			<SecondPart
				width={width}
				height={height}
				ref={contentRef}
				image={image}
			/>
			<ThirdPart height={height} />
			{width < 840 ? (
				<ProductPartMobile width={width} height={height} products={products} />
			) : (
				<ProductPart width={width} height={height} products={products} />
			)}
			{width < 840 ? <FooterMobile mode="light" /> : <Footer mode="light" />}
		</StyledContent>
	);
};

export default HomeContent;
