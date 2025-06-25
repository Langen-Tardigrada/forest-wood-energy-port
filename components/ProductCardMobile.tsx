"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import ButtonLearnMore from "./ButtonLearnMore";
import { Button } from "./Button";
import LineSlideBar from "./LineSlideBar";
import MediaSlider from "./MediaSlider";
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

	@media (min-width: 0px) and (max-width: 599px) {
		width: ${({ width }) => width - 32}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: ${({ width }) => width - 48}px;
	}

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
	@media (min-width: 0px) and (max-width: 599px) {
		gap: 32px;
		padding: 0px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 48px;
		padding: 0px 32px;
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

	@media (min-width: 0px) and (max-width: 599px) {
		width: max-content;
		padding: 0px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: max-content;
		padding: 0px 32px;
	}
`;
interface Props {
	className: any;
	text: string;
	medias: Array<{ url: string; mediaType: "img" | "mp4" }>;
	blurDataUrl: Array<{ url: string; mediaType: "img" | "mp4" }>;
	link: string;
	width: number;
	height: number;
	ariaLabel: string;
}

export const ProductCardMobile: React.FC<Props> = ({
	className,
	text,
	medias = [],
	link,
	width,
	height,
	ariaLabel,
	blurDataUrl = [],
}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const handleClickMedia = () => {
		if (activeIndex === medias.length - 1) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	};

	useEffect(() => {
		if (activeIndex === medias.length - 1) {
			// เล่นวิดีโอเมื่อเป็นภาพสุดท้าย
			if (videoRef.current) {
				videoRef.current.play();
			}
		} else {
			// หยุดและรีเซ็ตวิดีโอเมื่อเปลี่ยนไปภาพอื่น
			if (videoRef.current) {
				videoRef.current.pause();
				videoRef.current.currentTime = 0;
			}
		}
	}, [activeIndex, medias.length]);

	// ฟังก์ชันเมื่อวิดีโอเล่นจบ
	const handleEndVideoPlay = () => {
		//nothing here yet
	};

	return (
		<StyledProductCard className={`product-card ${className}`} width={width}>
			<Container>
				<Upper>
					<TitleLabel>
						<BrandLabel>FOREST WOOD ENERGY Products</BrandLabel>
						<ButtonLearnMore
							className="button-learn-more-instance"
							stateProp="enabled"
							link="/product"
							ariaLabel="go to all product page"
						/>
					</TitleLabel>
					<ProductName>{text}</ProductName>
				</Upper>
				<MediaSlider
					medias={medias}
					activeIndex={activeIndex}
					showInnerSlide={false}
					onEnded={handleEndVideoPlay}
					videoRef={videoRef}
					onClickMedia={handleClickMedia}
					blurDataUrl={blurDataUrl}
				/>
				<Lower>
					<LineSlideBar amount={medias.length} activeIndex={activeIndex} />
					<Button
						className="button-instance"
						labelText="Learn More"
						labelTextClassName=""
						showIcon={"none"}
						stateProp="enabled"
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
