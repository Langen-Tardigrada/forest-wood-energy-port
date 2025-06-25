"use client";
import React, { useState } from "react";
import { Button } from "../../components/Button";
import { ProductCard } from "../../components/ProductCard";
import styled from "@emotion/styled";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { PreviewProduct } from "../../public/information/home/home";
import { ProductCardMobile } from "../../components/ProductCardMobile";

const StyledPart = styled.div<{ width: number; height: number }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 40px;
	position: relative;
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	box-sizing: border-box;
	overflow: hidden;
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
`;
const ProductCarousel = styled.div<{ $translateX: number }>`
	align-self: stretch;
	display: flex;
	flex: 1;
	flex-grow: 1;
	gap: 24px;
	align-items: center;
	position: relative;
	height: 100%;
	transition: transform 0.3s ease-in-out;
	transform: ${({ $translateX }) => `translateX(-${$translateX}px)`};
	width: max-content; /* เพิ่มขนาดให้ครอบคลุม padding */

	& .product-card-instance {
		align-self: center !important;
	}
`;
const ButtonListContainer = styled.div`
	align-items: center;
	display: inline-flex;
	flex: 0 0 auto;
	gap: 24px;
	position: relative;

	& .button-2 {
		display: flex !important;
		width: 115px !important;
	}
`;

interface Props {
	width: number;
	height: number;
	products: Array<PreviewProduct>;
}

export const ProductPart: React.FC<Props> = ({ width, height, products }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const cardWidth = (width - 80 - 24) / 2; // ความกว้างของการ์ด
	const gap = 24; // ระยะห่างระหว่างการ์ด
	const totalCards = 5; // จำนวนการ์ดทั้งหมด
	const cardsPerView = 2; // จำนวนการ์ดที่แสดงพร้อมกัน

	// คำนวณระยะการเลื่อนสูงสุด เพื่อให้การ์ดสุดท้ายชิดขอบขวา
	const maxTranslateX = (totalCards - cardsPerView) * (cardWidth + gap);

	// คำนวณการเลื่อน โดยคำนึงถึงขอบซ้ายและขวาสุด
	const translateX = Math.min(currentIndex * (cardWidth + gap), maxTranslateX);

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex + 1 >= totalCards - cardsPerView + 1 ? 0 : prevIndex + 1
		);
	};

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex - 1 < 0 ? totalCards - cardsPerView : prevIndex - 1
		);
	};

	const chooseMedia = (i: PreviewProduct) => {
		if (width < 1200) {
			return i.media.s840x840;
		} else {
			return i.media.s900x370;
		}
	};

	return (
		<StyledPart width={width} height={height}>
			<Container>
				<ProductCarousel $translateX={translateX}>
					{width < 1200
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
				<ButtonListContainer>
					<Button
						className="button-2"
						labelText="Previous"
						labelTextClassName=""
						showIcon={"pre"}
						stateProp="enabled"
						style="text"
						IconName={faChevronLeft}
						onClick={handlePrev}
						feature={"other"}
						link={""}
						ariaLabel={""}
					/>
					<Button
						className="button-2"
						labelText="Next"
						labelTextClassName=""
						showIcon={"trailing"}
						stateProp="enabled"
						style="text"
						IconName={faChevronRight}
						onClick={handleNext}
						feature={"other"}
						link={""}
						ariaLabel={""}
					/>
				</ButtonListContainer>
			</Container>
		</StyledPart>
	);
};
