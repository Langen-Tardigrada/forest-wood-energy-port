"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { ButtonIcon } from "../../../components/ButtonIcon";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import NewsCard from "../../../components/NewsCard";
import { News } from "../../Admin/News/types/news";
import { typography } from "../../../src/app/css/typography";

const StyledContent = styled.div<{ height: number }>`
	display: flex;
	position: relative;
	align-self: stretch;
	flex-direction: column;
	gap: 16px;
	align-items: flex-start;
	padding: 90px 0px 40px 0px;
	border-radius: 60px 60px 0 0;
	height: auto;
	background-color: ${({ theme }) => theme.sys.light["surface-container-high"]};
	@media (min-width: 0px) and (max-width: 599px) {
		padding: 106px 0px 56px 0px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 106px 0px 56px 0px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 106px 0px 56px 0px;
	}
`;
const Container = styled.div<{ width: number; height: number }>`
	display: flex;
	flex-direction: row;
	gap: 16px;
	width: ${({ width }) => width}px;
	min-height: ${({ height }) => height * 0.25}px;
	height: auto;
	max-height: ${({ height }) => height * 0.25 * 3 + 18 * 2}px;
	overflow: hidden;
	padding-left: 40px;
	padding-right: 16px;
	@media (min-width: 0px) and (max-width: 599px) {
		width: ${({ width }) => width - 32}px;
		min-height: ${({ height }) => height * 0.3}px;
		max-height: ${({ height }) => height * 0.3 * 3 + 18 * 2}px;
		padding: 0px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: ${({ width }) => width - 64}px;
		min-height: ${({ height }) => height * 0.293}px;
		max-height: ${({ height }) => height * 0.293 * 3 + 18 * 2}px;
		padding: 0px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		width: ${({ width }) => width - 48}px;
		min-height: ${({ height }) => height * 0.264}px;
		max-height: ${({ height }) => height * 0.264 * 3 + 18 * 2}px;
		padding-left: 24px;
		padding-right: 9px;
	}
`;
const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	height: 80px;
	justify-content: space-between;
	align-items: flex-end;
	align-self: stretch;
	padding: 0px 40px;
	@media (min-width: 0px) and (max-width: 599px) {
		height: auto;
		align-items: center;
		padding: 0 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		height: 56px;
		padding: 0 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		height: 72px;
		padding: 0 24px;
	}
`;
const HeaderBox = styled.div`
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
const NewsContainerList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
	max-height: inherit;
	width: auto;
	height: auto;
	overflow-y: auto;
	white-space: nowrap;

	scrollbar-width: none; /* ซ่อน scrollbar ดั้งเดิมใน Firefox */

	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ดั้งเดิมใน Chrome, Safari */
	}

	@media (min-width: 0px) and (max-width: 599px) {
		padding: 6px;
		margin: -6px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 6px;
		margin: -6px;
	}
`;
const CustomScrollbar = styled.div`
	display: flex;
	height: inherit;
	width: 6px; /* ความสูงของ custom scrollbar */
	background-color: transparent; /* สีพื้นหลังของ track */
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-radius: 16px;
`;

const Thumb = styled.div`
	height: 0; /* กำหนดเริ่มต้นให้ thumb ไม่มีความกว้าง */
	width: 6px;
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

const NewsPart: React.FC<Props> = ({ width, height, news }) => {
	const [inHilight, setInHilight] = useState(false);
	const [onScrollBar, setOnScrollBar] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);
	const thumbRef = useRef<HTMLDivElement>(null);
	const totalCards = news.length;
	const [scrollUpDisabled, setScrollUpDisabled] = useState(true);
	const [scrollDownDisabled, setScrollDownDisabled] = useState(
		totalCards < 3 ? true : false
	);

	const cardHeight = () => {
		if (width < 600) {
			return height * 0.3 + 18;
		} else if (width < 840) {
			return height * 0.293 + 18;
		} else if (width < 840) {
			return height * 0.264 + 18;
		} else {
			return height * 0.25 + 18;
		}
	};

	const updateCardNumber = () => {
		if (contentRef.current) {
			const currentScrollTop = contentRef.current.scrollTop;
			const cardIndex = Math.round(currentScrollTop / cardHeight());

			// Check for top and bottom conditions
			const isAtTopCard = cardIndex === 0;
			const maxScrollTop =
				contentRef.current.scrollHeight - contentRef.current.clientHeight;
			const isAtBottomCard = currentScrollTop >= maxScrollTop;

			if (totalCards > 3) {
				setScrollUpDisabled(isAtTopCard);
				setScrollDownDisabled(isAtBottomCard);
			}
		}
	};

	const updateThumbHeight = () => {
		if (contentRef.current && thumbRef.current) {
			const { offsetHeight: containerHeight, scrollHeight } =
				contentRef.current;
			const thumbHeight = (containerHeight / scrollHeight) * containerHeight;
			thumbRef.current.style.height = `${thumbHeight}px`;
		}
	};

	const updateThumbPosition = () => {
		if (contentRef.current && thumbRef.current) {
			const { scrollTop, scrollHeight, offsetHeight } = contentRef.current;
			const scrollRatio = scrollTop / (scrollHeight - offsetHeight);
			thumbRef.current.style.top = `${
				scrollRatio * (offsetHeight - thumbRef.current.offsetHeight)
			}px`;
		}
	};

	const handleScrollUp = () => {
		if (contentRef.current) {
			const currentScrollTop = contentRef.current.scrollTop;

			// คำนวณตำแหน่งใหม่ที่ต้อง snap ก่อน + เลื่อนไปอีก 3 การ์ด
			const snapScrollTop =
				Math.round(currentScrollTop / cardHeight()) * cardHeight();
			let targetScrollTop = snapScrollTop - cardHeight() * 3;

			// ตรวจสอบไม่ให้เลื่อนเกินขอบบน
			targetScrollTop = Math.max(0, targetScrollTop);

			contentRef.current.scrollTo({
				top: targetScrollTop,
				behavior: "smooth",
			});

			console.log(
				"up:",
				currentScrollTop,
				snapScrollTop,
				targetScrollTop,
				cardHeight() * 3
			);
			updateThumbPosition();
			updateCardNumber();
		}
	};

	const handleScrollDown = () => {
		if (contentRef.current) {
			const currentScrollTop = contentRef.current.scrollTop;
			const totalHeight =
				contentRef.current.scrollHeight - contentRef.current.clientHeight;

			// คำนวณตำแหน่งใหม่ที่ต้อง snap ก่อน + เลื่อนไปอีก 3 การ์ด
			const snapScrollTop =
				Math.ceil(currentScrollTop / cardHeight()) * cardHeight();
			let targetScrollTop = snapScrollTop + cardHeight() * 3;

			// ตรวจสอบไม่ให้เลื่อนเกินขอบล่าง
			targetScrollTop = Math.min(totalHeight, targetScrollTop);

			contentRef.current.scrollTo({
				top: targetScrollTop,
				behavior: "smooth",
			});

			console.log(
				"down:",
				currentScrollTop,
				snapScrollTop,
				targetScrollTop,
				cardHeight() * 3
			);
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
		const startY = e.clientY;
		const initialScrollTop = contentRef.current?.scrollTop || 0;

		const speedFactor = 3; // เพิ่มตัวคูณเพื่อเร่งความเร็ว

		const onMouseMove = (moveEvent: MouseEvent) => {
			if (contentRef.current) {
				const dx = (moveEvent.clientY - startY) * speedFactor;
				contentRef.current.scrollTop = initialScrollTop + dx;
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
		updateThumbHeight();
		updateThumbPosition();
		updateCardNumber();

		window.addEventListener("resize", updateThumbHeight);
		if (contentRef.current) {
			contentRef.current.addEventListener("scroll", updateThumbPosition);
			contentRef.current.addEventListener("scroll", updateCardNumber);
		}

		return () => {
			window.removeEventListener("resize", updateThumbHeight);
			if (contentRef.current) {
				contentRef.current.removeEventListener("scroll", updateThumbPosition);
				contentRef.current.removeEventListener("scroll", updateCardNumber);
			}
		};
	}, []);

	return (
		<StyledContent height={height}>
			<HeaderContainer>
				<HeaderBox>Latest News</HeaderBox>
				<ButtonControlContainer>
					<ButtonIcon
						style={"outlined"}
						IconName={faChevronUp}
						className="buttonIcon"
						size={"2xs"}
						width={12}
						height={12}
						onClick={handleScrollUp}
						id={"scrollUpButton"}
						stateProp={scrollUpDisabled ? "disabled" : "enabled"}
					/>
					<ButtonIcon
						style={"outlined"}
						IconName={faChevronDown}
						className="buttonIcon"
						size={"2xs"}
						width={12}
						height={12}
						onClick={handleScrollDown}
						id={"scrollDownButton"}
						stateProp={scrollDownDisabled ? "disabled" : "enabled"}
					/>
				</ButtonControlContainer>
			</HeaderContainer>
			<Container
				width={width}
				height={height}
				onMouseEnter={handleInHilight}
				onMouseLeave={handleOutHilight}
			>
				<NewsContainerList ref={contentRef}>
					{news.map((item, k) => (
						<NewsCard
							width={width}
							height={height}
							news={item}
							key={k}
							ariaLabel={"Read this news more"}
						/>
					))}
				</NewsContainerList>
				{width > 839 ? (
					<CustomScrollbar>
						<Thumb
							ref={thumbRef}
							onMouseDown={handleThumbDrag}
							style={{
								visibility: inHilight && totalCards > 3 ? "visible" : "hidden",
							}}
						/>
					</CustomScrollbar>
				) : (
					<></>
				)}
			</Container>
		</StyledContent>
	);
};

export default NewsPart;
