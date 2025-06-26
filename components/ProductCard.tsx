"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import ButtonLearnMore from "./ButtonLearnMore";
import { Button } from "./Button";
import MediaAutoSlider from "./MediaAutoSlider";
import LineSlideBar from "./LineSlideBar";
import { typography } from "../src/app/css/typography";

const StyledProductCard = styled.div<{ width: number }>`
	align-items: center;
	background-color: ${({ theme }) => theme.sys.light["surface-container"]};
	border-radius: 16px;
	display: flex;
	gap: 10px;
	height: inherit;
	justify-content: center;
	position: relative;
	width: ${({ width }) => (width - 80 - 24) / 2}px;

	& .button-learn-more-instance {
		flex: 0 0 auto !important;
	}
	& .button-instance {
		display: flex !important;
		width: 121px !important;
	}
`;
const Container = styled.div`
	align-items: center;
	align-self: stretch;
	border-radius: 8px;
	display: flex;
	flex: 1;
	flex-direction: column;
	flex-grow: 1;
	gap: 40px;
	justify-content: center;
	padding: 40px 0px;
	position: relative;
`;
const Upper = styled.div`
	align-items: flex-start;
	align-self: stretch;
	display: flex;
	flex: 0 0 auto;
	flex-direction: column;
	gap: 40px;
	padding: 0px 40px;
	position: relative;
	width: 100%;
	box-sizing: border-box;
	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 0px 24px;
	}
`;
const TitleLabel = styled.div`
	align-items: center;
	align-self: stretch;
	display: flex;
	flex: 0 0 auto;
	justify-content: space-between;
	position: relative;
	width: 100%;
`;
const BrandLabel = styled.div`
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	flex: 1;
	${typography.body.medium}
	position: relative;
`;
const ProductName = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.headline.medium}
	position: relative;
`;
const Lower = styled.div`
	align-items: center;
	display: flex;
	flex: 0 0 auto;
	flex-direction: column;
	gap: 40px;
	justify-content: center;
	position: relative;
	width: 250px;

	@media (min-width: 840px) and (max-width: 1199px) {
		width: max-content;
		padding: 0px 24px;
	}
`;
interface Props {
	className: any;
	text: string;
	medias: Array<{ url: string; mediaType: "img" | "mp4" }>;
	link: string;
	width: number;
	height: number;
	ariaLabel: string;
	blurDataUrl: Array<{ url: string; mediaType: "img" | "mp4" }>;
}

export const ProductCard: React.FC<Props> = ({
	className,
	text,
	medias,
	link,
	width,
	height,
	ariaLabel,
	blurDataUrl,
}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	// const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
	const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	useEffect(() => {
		// เริ่มต้นหรือหยุดการหน่วงเวลาตามสถานะของการเล่นวิดีโอและ hover
		if (!isVideoPlaying && isHovered) {
			// console.log(activeIndex);
			const interval = setInterval(() => {
				setActiveIndex((prevIndex) => {
					const nextIndex = (prevIndex + 1) % medias.length;

					if (
						nextIndex === medias.length - 1 &&
						medias[nextIndex].mediaType === "mp4"
					) {
						clearInterval(interval);
						setIsVideoPlaying(true);
						if (videoRef.current) videoRef.current.play();
					}
					return nextIndex;
				}); // เปลี่ยนรูปทุก 2 วินาที
			}, 2000);
			// setIntervalId(interval);
			intervalIdRef.current = interval;

			return () => {
				// Remove event listener when component unmounts
				if (intervalIdRef.current) clearInterval(intervalIdRef.current);
			};
		}
	}, [isHovered, isVideoPlaying, medias.length]); // Run effect on hover state change

	const handleVideoLoad = () => {
		// วิดีโอเริ่มโหลดและเตรียมเล่น
		setIsVideoPlaying(true);
		// หยุดการหน่วงเวลาเมื่อวิดีโอเริ่มเล่น
		if (intervalIdRef.current) {
			clearInterval(intervalIdRef.current);
		}
	};

	const handleVideoEnd = () => {
		// วิดีโอเล่นจบ
		setIsVideoPlaying(false);
	};

	// ใช้เหตุการณ์ onMouseEnter และ onMouseLeave
	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
		if (intervalIdRef.current) {
			clearInterval(intervalIdRef.current);
		}

		if (videoRef.current) {
			videoRef.current.pause(); // หยุดวิดีโอเมื่อออกจาก hover
			videoRef.current.currentTime = 0; // รีเซ็ตวิดีโอไปที่เริ่มต้น
		}

		setIsVideoPlaying(false);
		setActiveIndex(0);
	};

	return (
		<StyledProductCard
			className={`product-card ${className}`}
			width={width}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Container>
				<Upper>
					<TitleLabel>
						<BrandLabel>FOREST WOOD ENERGY Products</BrandLabel>
						<ButtonLearnMore
							className="button-learn-more-instance"
							stateProp="disabled"
							link="/product"
							ariaLabel="go to all product page"
						/>
					</TitleLabel>
					<ProductName>{text}</ProductName>
				</Upper>
				<MediaAutoSlider
					medias={medias}
					activeIndex={activeIndex}
					showInnerSlide={false}
					onEnded={handleVideoEnd}
					onLoad={handleVideoLoad}
					videoRef={videoRef}
					blurDataUrl={blurDataUrl}
				/>
				<Lower>
					<LineSlideBar amount={medias.length} activeIndex={activeIndex} />
					<Button
						className="button-instance"
						labelText="Learn More"
						labelTextClassName=""
						showIcon={"none"}
						stateProp="disabled"
						style="filled"
						IconName={undefined}
						onClick={undefined}
						feature={"link"}
						link={link}
						ariaLabel={ariaLabel}
					/>
				</Lower>
			</Container>
		</StyledProductCard>
	);
};
