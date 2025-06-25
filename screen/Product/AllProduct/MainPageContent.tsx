"use client";
import React from "react";
import styled from "@emotion/styled";
import FirstPart from "./FirstPart";
import ProductPart from "./ProductPart";
import Footer from "../../../components/Footer";
import { Product } from "../../../public/information/product/mainpage";
import FooterMobile from "../../../components/FooterMobile";

const StyledContent = styled.div<{ width: number }>`
	align-items: flex-start;
	display: flex;
	position: relative;
	width: 100%;
	flex-direction: column;
	scrollbar-width: none; /* สำหรับ Firefox */
	width: ${({ width }) => width}px;
	box-sizing: border-box;

	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ใน Chrome, Safari และ Edge */
	}
`;

interface Props {
	width: number;
	height: number;
	products: Array<Product>;
}

const MainPageContent: React.FC<Props> = ({ width, height, products }) => {
	return (
		<StyledContent width={width}>
			<FirstPart width={width} height={height} />
			<ProductPart width={width} height={height} products={products} />
			{width < 840 ? <FooterMobile mode="light" /> : <Footer mode="light" />}
		</StyledContent>
	);
};

export default MainPageContent;
