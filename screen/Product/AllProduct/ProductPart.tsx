"use client";
import React from "react";
import styled from "@emotion/styled";
import { Product } from "../../../public/information/product/mainpage";
import ProductCardExtendMobile from "../../../components/ProductCardExtendMobile";
import ProductCardExtend from "../../../components/ProductCardExtend";

const StyledPart = styled.div<{ width: number }>`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: center;
	padding: 0px 40px 40px 40px;
	position: relative;
	max-width: ${({ width }) => width}px;
	gap: 48px;

	@media (min-width: 0px) and (max-width: 599px) {
		padding: 0px 16px 56px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 0px 32px 56px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 0px 24px 40px 24px;
	}
`;

interface Props {
	width: number;
	height: number;
	products: Array<Product>;
}

const ProductPart: React.FC<Props> = ({ width, height, products }) => {
	return (
		<StyledPart width={width}>
			{width < 840
				? products.map((item) => (
						<ProductCardExtendMobile
							height={height}
							width={width}
							product={item}
							key={item.name}
							ariaLabel={"View the " + item.name + " more"}
						/>
				  ))
				: products.map((item) => (
						<ProductCardExtend
							height={height}
							width={width}
							product={item}
							key={item.name}
							ariaLabel={"View the " + item.name + " more"}
						/>
				  ))}
		</StyledPart>
	);
};

export default ProductPart;
