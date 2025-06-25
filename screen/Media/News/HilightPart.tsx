"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { ButtonIcon } from "../../../components/ButtonIcon";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import HilightNewsCard from "../../../components/HilightNewsCard";
import { News } from "../../Admin/News/types/news";
import { typography } from "../../../src/app/css/typography";

const StyledContent = styled.div`
	display: flex;
	position: relative;
	align-self: stretch;
	flex-direction: column;
	gap: 16px;
	align-items: flex-start;
	padding: 90px 40px 40px 40px;
	@media (min-width: 0px) and (max-width: 599px) {
		padding: 106px 16px 56px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 106px 32px 56px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 106px 24px 56px 24px;
	}
`;
const HilightContainer = styled.div<{ width: number }>`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: ${({ width }) => width - 80}px;
	height: auto;
	overflow: hidden;
	justify-content: space-between;
	@media (min-width: 0px) and (max-width: 599px) {
		width: ${({ width }) => width - 32}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: ${({ width }) => width - 64}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		width: ${({ width }) => width - 48}px;
	}
`;
const HilightHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 80px;
	justify-content: space-between;
	align-items: flex-end;
	align-self: stretch;
	@media (min-width: 0px) and (max-width: 599px) {
		height: auto;
		align-items: center;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		height: 56px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		height: 72px;
	}
`;
const HilightHeaderBox = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	align-self: stretch;
	justify-content: center;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.display.medium}
	@media (min-width: 0px) and (max-width: 599px) {
		${typography.headline.medium}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.headline.large}
	}
`;
const ButtonControlContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	align-items: center;

	.buttonIcon {
		width: 32px;
		height: 32px;
		@media (min-width: 0px) and (max-width: 599px) {
			width: 24px;
			height: 24px;
		}
	}
`;
const HilightNewsContainerList = styled.div<{ height: number }>`
	display: flex;
	flex-direction: row;
	gap: 24px;
	max-width: inherit;
	width: auto;
	height: auto;
	min-height: ${({ height }) => height * 0.23}px;
	overflow-x: auto;
	white-space: nowrap;
	scrollbar-width: none; /* ซ่อน scrollbar ดั้งเดิมใน Firefox */

	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ดั้งเดิมใน Chrome, Safari */
	}

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 16px;
		min-height: ${({ height }) => height * 0.625}px;
		padding: 6px;
		margin: -6px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		min-height: ${({ height }) => height * 0.465}px;
		padding: 6px;
		margin: -6px;
	}
`;
const CustomScrollbar = styled.div`
	display: flex;
	width: inherit;
	height: 4px; /* ความสูงของ custom scrollbar */
	background-color: transparent; /* สีพื้นหลังของ track */
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-radius: 16px;
	align-items: center;
`;

const Thumb = styled.div`
	width: 0; /* กำหนดเริ่มต้นให้ thumb ไม่มีความกว้าง */
	height: 4px;
	background-color: rgba(111, 121, 121, 0.12);
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-radius: 16px;
	position: relative;
	cursor: pointer;

	&:hover {
		background-color: rgba(111, 121, 121, 0.18);
		border: 1px solid white;
	}

	&:active {
		background-color: rgba(111, 121, 121, 0.18);
		border: 1px solid white;
	}
`;

interface Props {
	width: number;
	height: number;
	news: News[];
}

const HiglightPart: React.FC<Props> = ({ width, height, news }) => {
	const [inHilight, setInHilight] = useState(false);
	const [onScrollBar, setOnScrollBar] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const thumbRef = useRef<HTMLDivElement>(null);
	const [onCardNumber, setOnCardNumber] = useState(0);

	const totalCards = news.length;
	// const cardWidth = width-80+24;
	const cardWidth = () => {
		if (width > 1199) {
			return width - 80 + 24;
		} else if (width > 839) {
			return width - 48 + 24;
		} else if (width > 599) {
			return width - 64 + 24;
		} else {
			return width - 32 + 16;
		}
	};

	const updateCardNumber = () => {
		if (contentRef.current) {
			const currentScrollLeft = contentRef.current.scrollLeft;
			const cardIndex = Math.round(currentScrollLeft / cardWidth());
			setOnCardNumber(cardIndex);
		}
	};

	const updateThumbWidth = () => {
		if (contentRef.current && thumbRef.current) {
			const { offsetWidth: containerWidth, scrollWidth } = contentRef.current;
			const thumbWidth = (containerWidth / scrollWidth) * containerWidth;
			thumbRef.current.style.width = `${thumbWidth}px`;
		}
	};

	const updateThumbPosition = () => {
		if (contentRef.current && thumbRef.current) {
			const { scrollLeft, scrollWidth, offsetWidth } = contentRef.current;
			const scrollRatio = scrollLeft / (scrollWidth - offsetWidth);
			thumbRef.current.style.left = `${
				scrollRatio * (offsetWidth - thumbRef.current.offsetWidth)
			}px`;
		}
	};

	const handleScrollLeft = () => {
		if (contentRef.current) {
			const currentScrollLeft = contentRef.current.scrollLeft;
			const remainder = currentScrollLeft % cardWidth();

			if (remainder === 0) {
				// ถ้าอยู่ตรงขอบการ์ดพอดี ให้เลื่อนตามขนาดการ์ด
				contentRef.current.scrollTo({
					left: currentScrollLeft - cardWidth(),
					behavior: "smooth",
				});
			} else {
				// ถ้าอยู่ระหว่างการ์ด ให้เลื่อนไปที่การ์ดก่อนหน้าให้พอดี
				contentRef.current.scrollTo({
					left: currentScrollLeft - remainder,
					behavior: "smooth",
				});
			}
			updateThumbPosition();
			updateCardNumber();
		}
	};

	const handleScrollRight = () => {
		if (contentRef.current) {
			const currentScrollLeft = contentRef.current.scrollLeft;
			const remainder = currentScrollLeft % cardWidth();

			if (remainder === 0) {
				// ถ้าอยู่ตรงขอบการ์ดพอดี ให้เลื่อนตามขนาดการ์ด
				contentRef.current.scrollTo({
					left: currentScrollLeft + cardWidth(),
					behavior: "smooth",
				});
			} else {
				// ถ้าอยู่ระหว่างการ์ด ให้เลื่อนไปที่การ์ดถัดไปให้พอดี
				contentRef.current.scrollTo({
					left: currentScrollLeft + cardWidth() - remainder,
					behavior: "smooth",
				});
			}
			updateThumbPosition();
			updateCardNumber();
		}
	};

	const handleInHilight = (e: React.MouseEvent) => {
		e.preventDefault();
		setInHilight(true);
	};

	const handleOutHilight = (e: React.MouseEvent) => {
		e.preventDefault();
		if (!onScrollBar) {
			setInHilight(false);
		}
	};

	const handleThumbDrag = (e: React.MouseEvent) => {
		e.preventDefault();
		setOnScrollBar(true);
		const startX = e.clientX;
		const initialScrollLeft = contentRef.current?.scrollLeft || 0;

		const speedFactor = 3; // เพิ่มตัวคูณเพื่อเร่งความเร็ว

		const onMouseMove = (moveEvent: MouseEvent) => {
			if (contentRef.current) {
				const dx = (moveEvent.clientX - startX) * speedFactor;
				contentRef.current.scrollLeft = initialScrollLeft + dx;
			}
		};

		const onMouseUp = () => {
			setOnScrollBar(false);
			setInHilight(false);
			window.removeEventListener("mousemove", onMouseMove);
			window.removeEventListener("mouseup", onMouseUp);
		};

		window.addEventListener("mousemove", onMouseMove);
		window.addEventListener("mouseup", onMouseUp);
	};

	useEffect(() => {
		updateThumbWidth();
		updateThumbPosition();
		updateCardNumber();

		window.addEventListener("resize", updateThumbWidth);
		if (contentRef.current) {
			contentRef.current.addEventListener("scroll", updateThumbPosition);
			contentRef.current.addEventListener("scroll", updateCardNumber);
		}

		return () => {
			window.removeEventListener("resize", updateThumbWidth);
			if (contentRef.current) {
				contentRef.current.removeEventListener("scroll", updateThumbPosition);
				contentRef.current.removeEventListener("scroll", updateCardNumber);
			}
		};
	}, []);

	return (
		<StyledContent>
			<HilightHeaderContainer>
				<HilightHeaderBox>Highlight News</HilightHeaderBox>
				<ButtonControlContainer>
					<ButtonIcon
						style={"outlined"}
						IconName={faChevronLeft}
						className="buttonIcon"
						size={"2xs"}
						width={12}
						height={12}
						onClick={handleScrollLeft}
						stateProp={onCardNumber === 0 ? "disabled" : "enabled"}
					/>
					<ButtonIcon
						style={"outlined"}
						IconName={faChevronRight}
						className="buttonIcon"
						size={"2xs"}
						width={12}
						height={12}
						onClick={handleScrollRight}
						stateProp={onCardNumber === totalCards - 1 ? "disabled" : "enabled"}
					/>
				</ButtonControlContainer>
			</HilightHeaderContainer>
			<HilightContainer
				width={width}
				onMouseEnter={handleInHilight}
				onMouseLeave={handleOutHilight}
			>
				<HilightNewsContainerList ref={contentRef} height={height}>
					{news.map((item, k) => (
						<HilightNewsCard
							width={width}
							height={height}
							news={item}
							key={k}
						/>
					))}
				</HilightNewsContainerList>
				{width >= 840 ? (
					<CustomScrollbar>
						<Thumb
							ref={thumbRef}
							onMouseDown={handleThumbDrag}
							style={{
								visibility: inHilight && totalCards > 1 ? "visible" : "hidden",
							}}
						/>
					</CustomScrollbar>
				) : (
					<></>
				)}
			</HilightContainer>
		</StyledContent>
	);
};

export default HiglightPart;
