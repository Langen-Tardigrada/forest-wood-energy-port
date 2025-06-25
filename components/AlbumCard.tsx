"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "@emotion/react";
import { typography } from "../src/app/css/typography";
import Image from "next/image";

const AlbumName = styled.div`
	visibility: hidden;
	display: flex;
	color: ${({ theme }) => theme.sys.light.primary};
	${typography.title.large}
`;
const LabelContainer = styled.div`
	visibility: hidden;
	display: flex;
	flex-direction: row;
	align-self: stretch;
	gap: 8px;
	color: ${({ theme }) => theme.sys.light.outline};
	align-items: center;
	justify-content: space-between;
`;
const AlbumContainer = styled.div<{ width: number }>`
	display: flex;
	width: ${({ width }) => (width - 24 * 4 - 80) / 5}px;
	gap: 8px;
	flex-direction: column;
	height: 100%;
	filter: grayscale(1);
	transition: all 300ms ease-in-out;

	&:hover {
		filter: none;
		cursor: pointer;
	}

	&:hover ${AlbumName} {
		visibility: visible;
	}

	&:hover ${LabelContainer} {
		visibility: visible;
	}

	@media (min-width: 1200px) and (max-width: 1599px) {
		width: ${({ width }) => (width - 24 * 3 - 80) / 4}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		width: ${({ width }) => (width - 24 * 2 - 48) / 3}px;
	}
`;
const AlbumCoverSize = styled.div<{ height: number }>`
	display: flex;
	position: relative;
	height: ${({ height }) => height}%;
	width: inherit;
	transition: all 500ms ease-in-out;
	border-radius: 4px;
	overflow: hidden;
`;
const AlbumLabel = styled.div`
	display: flex;
	${typography.label.small}
`;
const AlbumClickMoreContainer = styled.div<{ width: number }>`
	display: flex;
	flex-direction: row;
	align-self: stretch;
	flex: 1;
	justify-content: flex-start;
	align-items: center;
	width: auto;
	border-radius: 4px;
	padding: 16px;
	gap: 8px;
	box-sizing: border-box;
	background-color: ${({ theme }) => theme.sys.light.primary};
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	${typography.display.small}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.headline.large}
		width: ${({ width }) => (width - 24 * 3 - 48) / 4}px;
	}

	@media (min-width: 1200px) and (max-width: 1599px) {
		${typography.headline.large}
		width: ${({ width }) => (width - 24 * 3 - 80) / 4}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		width: ${({ width }) => (width - 24 * 2 - 48) / 3}px;
	}
`;
interface AlbumProps {
	width: number;
	albumName: string;
	images: Array<{ url: string; type: "img" | "mp4"; blurDataUrl: string }>;
	link: string;
}

const AlbumCard: React.FC<AlbumProps> = ({
	albumName,
	width,
	images,
	link,
}) => {
	const [positionOver, setPositionOver] = useState(1);
	const svgRef = useRef<SVGSVGElement>(null);
	const [lineProps, setLineProps] = useState({ x1: 0, x2: 0 });
	const [isPressed, setIsPressed] = useState(false);
	const theme = useTheme();

	useEffect(() => {
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
	}, []);

	return (
		<AlbumContainer
			width={width}
			onMouseOut={() => {
				setPositionOver(1);
				setIsPressed(false);
			}}
			onClick={() => {
				setIsPressed(true);
			}}
		>
			<AlbumName className="text">{albumName}</AlbumName>
			{isPressed ? (
				<Link
					href={link}
					style={{ textDecoration: "none", display: "flex", flex: 1 }}
				>
					<AlbumClickMoreContainer width={width}>
						see more
						<FontAwesomeIcon icon={faArrowRight} size="sm" />
					</AlbumClickMoreContainer>
				</Link>
			) : (
				<>
					<AlbumCoverSize
						onMouseOver={() => {
							setPositionOver(1);
						}}
						height={positionOver == 1 ? 100 : (1 / 16) * 100}
					>
						<Image
							src={images[0].url}
							alt={"image-cover-0" + albumName}
							fill
							sizes="(max-width: 840) 100vw, 50vw"
							style={{
								objectPosition: "center",
								objectFit: "cover",
							}}
							placeholder="blur"
							blurDataURL={images[0].blurDataUrl}
							key={images[0].url}
						/>
					</AlbumCoverSize>
					<AlbumCoverSize
						onMouseOver={() => {
							setPositionOver(2);
						}}
						height={positionOver == 2 ? 100 : (2 / 16) * 100}
					>
						<Image
							src={images[1].url}
							alt={"image-cover-1" + albumName}
							fill
							sizes="(max-width: 840) 100vw, 50vw"
							style={{
								objectPosition: "center",
								objectFit: "cover",
							}}
							placeholder="blur"
							blurDataURL={images[1].blurDataUrl}
							key={images[1].url}
						/>
					</AlbumCoverSize>
					<AlbumCoverSize
						onMouseOver={() => {
							setPositionOver(3);
						}}
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
							sizes="(max-width: 840) 100vw, 50vw"
							style={{
								objectPosition: "center",
								objectFit: "cover",
							}}
							placeholder="blur"
							blurDataURL={images[2].blurDataUrl}
							key={images[2].url}
						/>
					</AlbumCoverSize>
				</>
			)}
			<LabelContainer className="text">
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
		</AlbumContainer>
	);
};

export default AlbumCard;
