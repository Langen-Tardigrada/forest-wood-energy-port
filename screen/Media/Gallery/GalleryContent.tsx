"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import FooterMobile from "../../../components/FooterMobile";
import Footer from "../../../components/Footer";
import AlbumCard from "../../../components/AlbumCard";
import AlbumCardMobile from "../../../components/AlbumCardMobile";
import { AlbumGuideList } from "../../../public/information/gallery/album";

const StyledContainer = styled.div`
	display: flex;
	align-items: flex-start;
	width: 100%;
	flex-direction: column;
	scrollbar-width: none;
	background-color: ${({ theme }) => theme.sys.light.surface};
	padding-top: 72px;
	gap: 48px;
	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ใน Chrome, Safari และ Edge */
	}

	@media (min-width: 0px) and (max-width: 599px) {
		padding-top: 90px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding-top: 90px;
	}
`;

const OverContentContainer = styled.div<{ width: number }>`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: ${({ width }) => width - 80}px;
	overflow: hidden;
	justify-content: space-between;
	padding: 0 40px;

	@media (min-width: 0px) and (max-width: 599px) {
		padding: 0 16px;
		width: ${({ width }) => width - 32}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 0 32px;
		width: ${({ width }) => width - 64}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 0 24px;
		width: ${({ width }) => width - 48}px;
	}
`;
const ContentContainer = styled.div<{ height: number }>`
	display: flex;
	width: 100%;
	flex-direction: row;
	overflow-x: auto;
	height: ${({ height }) => height - 72 - 24 - 6}px;
	box-sizing: border-box;
	gap: 24px;
	scrollbar-width: none; /* ซ่อน scrollbar ดั้งเดิมใน Firefox */

	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ดั้งเดิมใน Chrome, Safari */
	}

	@media (min-width: 0px) and (max-width: 599px) {
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
		height: auto;
		gap: 40px;
	}
	@media (min-width: 600px) and (max-width: 839px) {
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
		height: auto;
		gap: 48px;
	}
`;
const CustomScrollbar = styled.div`
	display: flex;
	width: 100%;
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
		border: 1px solid ${({ theme }) => theme.sys.light.surface};
	}

	&:active {
		background-color: rgba(111, 121, 121, 0.18);
		border: 1px solid ${({ theme }) => theme.sys.light.surface};
	}
`;

interface Props {
	width: number;
	height: number;
}

const GalleryContent: React.FC<Props> = ({ width, height }) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const [onScrollBar, setOnScrollBar] = useState(false);
	const thumbRef = useRef<HTMLDivElement>(null);
	const [inHilight, setInHilight] = useState(false);
	const [mobileAlBumInd, setmobileAlbumInd] = useState(0);

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

	const handleThumbDrag = (event: React.MouseEvent) => {
		event.preventDefault();

		setOnScrollBar(true);
		const startX = event.clientX; // ตำแหน่ง X เริ่มต้นที่คลิก
		const startScrollLeft = contentRef.current?.scrollLeft || 0; // ตำแหน่ง Scroll ปัจจุบัน
		const speedFactor = 3; // เพิ่มตัวคูณเพื่อเร่งความเร็ว

		const handleMouseMove = (moveEvent: MouseEvent) => {
			if (contentRef.current) {
				const deltaX = (moveEvent.clientX - startX) * speedFactor; // คำนวณการเลื่อนของ Mouse
				contentRef.current.scrollLeft = startScrollLeft + deltaX; // อัปเดตตำแหน่ง Scroll
			}
		};

		const handleMouseUp = () => {
			setOnScrollBar(false);
			setInHilight(false);
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);
	};

	useEffect(() => {
		updateThumbWidth();
		updateThumbPosition();

		window.addEventListener("resize", updateThumbWidth);
		if (contentRef.current) {
			contentRef.current.addEventListener("scroll", updateThumbPosition);
		}

		return () => {
			window.removeEventListener("resize", updateThumbWidth);
			if (contentRef.current) {
				contentRef.current.removeEventListener("scroll", updateThumbPosition);
			}
		};
	}, [contentRef.current?.offsetWidth]);

	return (
		<StyledContainer>
			<OverContentContainer
				width={width}
				onMouseEnter={handleInHilight}
				onMouseLeave={handleOutHilight}
			>
				<ContentContainer height={height} ref={contentRef}>
					{width < 840 ? (
						<>
							{AlbumGuideList.map((item, k) => (
								<AlbumCardMobile
									index={k + 1}
									mobileAlbumIndex={mobileAlBumInd}
									setAlbumOnClick={setmobileAlbumInd}
									height={height}
									images={item.media}
									link={`/media/gallery/${item.slug}`}
									albumName={item.name}
									key={k}
								/>
							))}
						</>
					) : (
						<>
							{AlbumGuideList.map((item, k) => (
								<AlbumCard
									key={k}
									images={item.media}
									link={`/media/gallery/${item.slug}`}
									albumName={item.name}
									width={width}
								/>
							))}
						</>
					)}
				</ContentContainer>
				{width >= 840 ? (
					<CustomScrollbar>
						<Thumb
							ref={thumbRef}
							onMouseDown={handleThumbDrag}
							style={{ visibility: inHilight ? "visible" : "hidden" }}
						/>
					</CustomScrollbar>
				) : (
					<></>
				)}
			</OverContentContainer>
			{width < 840 ? <FooterMobile mode="light" /> : <Footer mode="light" />}
		</StyledContainer>
	);
};

export default GalleryContent;
