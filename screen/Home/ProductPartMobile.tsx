"use client";
import React from "react";
import { ProductCard } from "../../components/ProductCard";
import styled from "@emotion/styled";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { PreviewProduct } from "../../public/information/home/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductCardMobile } from "../../components/ProductCardMobile";
import { typography } from "../../src/app/css/typography";

const StyledPart = styled.div<{ width: number; height: number }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 56px 16px;
	position: relative;
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	box-sizing: border-box;
	overflow: hidden;
	gap: 24px;

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 56px 32px;
	}
`;
const Container = styled.div`
	align-self: stretch;
	display: flex;
	flex: 1;
	flex-direction: column;
	flex-grow: 1;
	gap: 40px;
	justify-content: center;
	align-items: center;
	max-height: 784px;
	position: relative;
	width: 100%;
	overflow-x: scroll;
	-webkit-overflow-scrolling: touch; /* ให้เลื่อน smooth บนอุปกรณ์มือถือ */
`;
const ProductCarousel = styled.div`
	align-self: stretch;
	display: flex;
	flex: 1;
	flex-grow: 1;
	gap: 16px;
	align-items: center;
	position: relative;
	height: 100%;
	width: max-content; /* เพิ่มขนาดให้ครอบคลุม padding */

	& .product-card-instance {
		align-self: center !important;
	}
`;
const ScrollTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
	color: ${({ theme }) => theme.sys.light["outline-variant"]};
	width: 100%;
	justify-content: flex-end;
	align-items: center;
	${typography.label["large-prominent"]}
`;

interface Props {
	width: number;
	height: number;
	products: Array<PreviewProduct>;
}

export const ProductPartMobile: React.FC<Props> = ({
	width,
	height,
	products,
}) => {
	const chooseMedia = (i: PreviewProduct) => {
		if (width < 840) {
			return i.media.s840x840;
		} else {
			return i.media.s840x840;
		}
	};

	return (
		<StyledPart width={width} height={height}>
			<Container>
				<ProductCarousel>
					{width < 840
						? products.map((item) => (
								<ProductCardMobile
									className="product-card-instance"
									text={item.name}
									medias={chooseMedia(item)}
									key={item.name}
									link={item.link}
									width={width}
									height={height}
									ariaLabel={"View the " + item.name + " more"}
									blurDataUrl={item.blurDataUrl}
								/>
						  ))
						: products.map((item) => (
								<ProductCard
									className="product-card-instance"
									text={item.name}
									medias={chooseMedia(item)}
									key={item.name}
									link={item.link}
									width={width}
									height={height}
									ariaLabel={"View the " + item.name + " more"}
									blurDataUrl={item.blurDataUrl}
								/>
						  ))}
				</ProductCarousel>
			</Container>
			<ScrollTextContainer>
				<div>scroll right</div>
				<FontAwesomeIcon icon={faAnglesRight} size="lg" />
			</ScrollTextContainer>
		</StyledPart>
	);
};
