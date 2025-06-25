"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@emotion/react";
import { typography } from "../src/app/css/typography";
import Image from "next/image";

const AlbumName = styled.div<{ opacity: number }>`
	opacity: ${({ opacity }) => opacity};
	display: flex;
	color: ${({ theme }) => theme.sys.light.primary};
	${typography.headline.medium}

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.title.large}
	}
`;
const LabelContainer = styled.div<{ opacity: number }>`
	opacity: ${({ opacity }) => opacity};
	display: flex;
	flex-direction: row;
	align-self: stretch;
	gap: 8px;
	color: ${({ theme }) => theme.sys.light.outline};
	align-items: center;
	justify-content: space-between;
`;
const AlbumContainer = styled.div<{ height: number; $filter: boolean }>`
	display: flex;
	height: ${({ height }) => height - 72 - 24 - 24}px;
	gap: 8px;
	flex-direction: column;
	width: 100%;
	filter: ${({ $filter }) => ($filter ? "none" : "grayscale(1)")};
	transition: all 300ms ease-in-out;
`;
const AlbumCoverSize = styled.div<{ height: number }>`
	display: flex;
	height: ${({ height }) => height}%;
	width: inherit;
	transition: all 500ms ease-in-out;
	border-radius: 4px;
	position: relative;
	overflow: hidden;
`;
const AlbumLabel = styled.div`
	display: flex;
	${typography.label.small}
`;
const AlbumClickMoreContainer = styled.div<{ height: number }>`
	display: flex;
	flex-direction: row;
	align-self: stretch;
	flex: 1;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	height: -webkit-fill-available;
	border-radius: 4px;
	padding: 16px;
	gap: 8px;
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.sys.light.primary};
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	${typography.display.medium}

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.headline.large}
	}
`;
interface AlbumProps {
	height: number;
	images: Array<{ url: string; type: "img" | "mp4"; blurDataUrl: string }>;
	link: string;
	index: number;
	mobileAlbumIndex: number;
	setAlbumOnClick: React.Dispatch<React.SetStateAction<number>>;
	albumName: string;
}

const AlbumCardMobile: React.FC<AlbumProps> = ({
	height,
	albumName,
	images,
	link,
	mobileAlbumIndex,
	setAlbumOnClick,
	index,
}) => {
	const [positionOver, setPositionOver] = useState(1);
	const svgRef = useRef<SVGSVGElement>(null);
	const [lineProps, setLineProps] = useState({ x1: 0, x2: 0 });
	const [isPressed, setIsPressed] = useState(0);
	const theme = useTheme();

	const handleImageClick = (index: number) => {
		if (index != positionOver) {
			setPositionOver(index);
			setIsPressed(1);
		} else {
			if (isPressed == 0) {
				setIsPressed(1);
			} else {
				setIsPressed(2);
			}
		}
	};

	const filterAlbum = () => {
		if (mobileAlbumIndex == 0) {
			if (isPressed == 0) {
				return false;
			} else {
				return true;
			}
		} else if (mobileAlbumIndex !== index) {
			return false;
		} else {
			return true;
		}
	};

	useEffect(() => {
		if (mobileAlbumIndex != index && mobileAlbumIndex != 0) {
			setIsPressed(0);
			setPositionOver(1);
		}

		const updateLinePosition = () => {
			if (svgRef.current) {
				const containerWidth = svgRef.current.parentElement?.clientWidth || 0;
				setLineProps({ x1: 0, x2: containerWidth });
			}
		};

		// ใช้ ResizeObserver ตรวจจับการเปลี่ยนแปลงขนาด
		const resizeObserver = new ResizeObserver(() => {
			updateLinePosition();
		});

		if (svgRef.current?.parentElement) {
			resizeObserver.observe(svgRef.current.parentElement); // ติดตาม container ของ SVG
		}

		updateLinePosition(); // อัปเดตครั้งแรก

		return () => {
			resizeObserver.disconnect(); // ลบ observer เมื่อ component ถูก unmount
		};
	}, [mobileAlbumIndex]);

	return (
		<AlbumContainer
			height={height}
			$filter={filterAlbum()}
			onClick={() => {
				setAlbumOnClick(index);
			}}
		>
			{isPressed > 0 ? (
				<AlbumName opacity={isPressed > 0 ? 1 : 0}>{albumName}</AlbumName>
			) : (
				<></>
			)}

			{isPressed == 2 ? (
				<Link
					href={link}
					style={{ textDecoration: "none", display: "flex", height: "100%" }}
				>
					<AlbumClickMoreContainer height={height}>
						see more
						<FontAwesomeIcon icon={faArrowRight} size="sm" />
					</AlbumClickMoreContainer>
				</Link>
			) : (
				<>
					<AlbumCoverSize
						onClick={() => handleImageClick(1)}
						height={positionOver == 1 ? 100 : (1 / 16) * 100}
					>
						<Image
							src={images[0].url}
							alt={"image-cover-0" + albumName}
							fill
							style={{
								objectPosition: "50% 50%",
								objectFit: "cover",
							}}
							sizes="(max-width: 840) 100vw, 50vw"
							placeholder="blur"
							blurDataURL={images[0].blurDataUrl}
							key={images[0].url}
						/>
					</AlbumCoverSize>
					<AlbumCoverSize
						onClick={() => handleImageClick(2)}
						height={positionOver == 2 ? 100 : (2 / 16) * 100}
					>
						<Image
							src={images[1].url}
							alt={"image-cover-1" + albumName}
							fill
							style={{
								objectPosition: "50% 50%",
								objectFit: "cover",
							}}
							sizes="(max-width: 840) 100vw, 50vw"
							placeholder="blur"
							blurDataURL={images[1].blurDataUrl}
							key={images[1].url}
						/>
					</AlbumCoverSize>
					<AlbumCoverSize
						onClick={() => handleImageClick(3)}
						height={
							positionOver == 1
								? (1 / 16) * 100
								: positionOver == 2
								? (2 / 16) * 100
								: 100
						}
					>
						<Image
							src={images[2].url}
							alt={"image-cover-2" + albumName}
							fill
							style={{
								objectPosition: "50% 50%",
								objectFit: "cover",
							}}
							placeholder="blur"
							blurDataURL={images[2].blurDataUrl}
							key={images[2].url}
							sizes="(max-width: 840) 100vw, 50vw"
						/>
					</AlbumCoverSize>
				</>
			)}

			{isPressed > 0 ? (
				<LabelContainer opacity={isPressed > 0 ? 1 : 0}>
					<AlbumLabel>Click image to see more</AlbumLabel>
					<div style={{ display: "flex", alignItems: "center", flex: 1 }}>
						<svg
							ref={svgRef}
							xmlns="http://www.w3.org/2000/svg"
							style={{
								height: "auto",
								flex: "1",
								width: "100%",
								transition: "all 300ms ease-in-out",
							}}
							viewBox={`0 0 ${lineProps.x2 + 3} 10`}
							preserveAspectRatio="xMidYMid meet"
						>
							<line
								x1={lineProps.x1}
								x2={lineProps.x2}
								y1="5"
								y2="5"
								stroke={theme.sys.light.outline}
								strokeWidth="1"
								strokeLinecap="round"
							/>
							<line
								x1={lineProps.x2 - 5}
								y1="10"
								x2={lineProps.x2}
								y2="5"
								stroke={theme.sys.light.outline}
								strokeWidth="1"
								strokeLinecap="round"
							/>
							<line
								x1={lineProps.x2 - 5}
								y1="0"
								x2={lineProps.x2}
								y2="5"
								stroke={theme.sys.light.outline}
								strokeWidth="1"
								strokeLinecap="round"
							/>
						</svg>
					</div>
				</LabelContainer>
			) : (
				<></>
			)}
		</AlbumContainer>
	);
};

export default AlbumCardMobile;
