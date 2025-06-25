"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { Button } from "./Button";
import { Product } from "../public/information/product/mainpage";
import MediaSlider from "./MediaSlider";
import { typography } from "../src/app/css/typography";
import Image from "next/image";

const ProductBlogContainer = styled.div<{ height: number; width: number }>`
	align-items: center;
	background-color: ${({ theme }) => theme.sys.light["surface-container-low"]};
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: ${({ width }) => width - 32}px;
	height: ${({ height }) => height - 112}px;
	position: relative;

	@media (min-width: 600px) and (max-width: 839px) {
		width: ${({ width }) => width - 64}px;
		height: ${({ height }) => height - 112}px;
	}
`;

const PictureLayer = styled.div<{ $activeIndex: number }>`
	align-items: center;
	align-self: stretch;
	border-radius: 12px 0px 0px 12px;
	display: flex;
	flex: 1;
	flex-direction: column;
	flex-grow: 1;
	justify-content: flex-end;
	position: relative;
	overflow: hidden;
	height: max-content;

	.button-icon-instance {
		color: ${({ theme, $activeIndex }) =>
			$activeIndex == 0
				? theme.sys.light["on-surface-variant"]
				: theme.sys.light["inverse-on-surface"]} !important;
		touch-action: manipulation !important;
		pointer-events: auto;
		-webkit-tap-highlight-color: transparent;
		backdrop-filter: blur(3px); /* ค่า 10px สามารถปรับได้ */
		background-color: rgba(244, 250, 251, 0.1); /* สีพื้นหลังพร้อมความโปร่งใส */
	}
`;

const Detail = styled.div`
	align-items: center;
	align-self: stretch;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 24px;
	position: relative;
	gap: 48px;

	.button-instance {
		width: 100% !important;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 48px;
		gap: 56px;
	}
`;

const TextContainer = styled.div`
	align-items: flex-start;
	align-self: stretch;
	display: flex;
	flex: 1;
	flex-direction: column;
	flex-grow: 1;
	gap: 16px;
	position: relative;
	width: 100%;

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 32px;
	}
`;

const Heading = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.headline.large}
	position: relative;
`;

const SubText = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.title.medium}
	text-align: justify;
	position: relative;
`;

const PropertiesList = styled.div`
	align-items: flex-start;
	align-self: stretch;
	display: flex;
	flex: 0 0 auto;
	flex-direction: column;
	position: relative;
	width: 100%;
`;

const Properties = styled.div`
	align-items: flex-start;
	align-self: stretch;
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
`;

const ElementContainer = styled.div<{ $border: boolean }>`
	align-items: center;
	align-self: stretch;
	display: flex;
	flex: 0 0 auto;
	justify-content: space-between;
	position: relative;
	width: 100%;
	padding: 8px 0;
	border-top: 1px solid ${({ theme }) => theme.sys.light["outline-variant"]};
	border-bottom: ${({ theme, $border }) =>
		$border ? `1px solid ${theme.sys.light["outline-variant"]}` : "none"};
	word-wrap: break-word;
	overflow-wrap: break-word;
`;

const ElementProperty = styled.div<{ color: string }>`
	color: ${({ color }) => color};
	${typography.body.large}
	position: relative;
	white-space: normal;
	width: fit-content;
`;

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	@media (min-width: 0px) and (max-width: 599px) {
		border-radius: 16px;
	}
	@media (min-width: 600px) and (max-width: 839px) {
		border-radius: 16px;
	}
`;

interface Props {
	height: number;
	width: number;
	product: Product;
	ariaLabel: string;
}

interface PropEleProps {
	properties: Array<{ element: string; value: string }>;
}

const PropertiesElement: React.FC<PropEleProps> = ({ properties }) => {
	const theme = useTheme();
	return (
		<>
			{properties.map((item, i) => (
				<ElementContainer key={item.element} $border={i == 3 ? true : false}>
					<ElementProperty color={theme.sys.light["on-surface-variant"]}>
						{item.element}
					</ElementProperty>
					<ElementProperty
						color={theme.sys.light["on-surface"]}
						style={{ textAlign: "end" }}
					>
						{item.value}
					</ElementProperty>
				</ElementContainer>
			))}
		</>
	);
};

const ProductCardExtendMobile: React.FC<Props> = ({
	width,
	height,
	product,
	ariaLabel,
}) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isVideoPlaying, setIsVideoPlaying] = useState(false);
	const [isExtend, setIsExtend] = useState(false);
	const videoRef = useRef<HTMLVideoElement | null>(null);

	const handleClickExtend = () => {
		if (!isExtend) setIsExtend(true);
	};

	const handleClickCloseExtend = () => {
		if (isExtend) setIsExtend(false);
	};

	const handleClickPrevious = () => {
		if (activeIndex == 0) {
			setActiveIndex(product.medias.s1200x1200.length - 1);
		} else {
			setActiveIndex(activeIndex - 1);
		}
	};

	const handleClickNext = () => {
		if (activeIndex == product.medias.s1200x1200.length - 1) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	};

	useEffect(() => {
		if (activeIndex === product.medias.s1200x1200.length - 1) {
			// เล่นวิดีโอเมื่อเป็นภาพสุดท้าย
			if (videoRef.current) {
				videoRef.current.play();
				setIsVideoPlaying(true);
			}
		} else {
			// หยุดและรีเซ็ตวิดีโอเมื่อเปลี่ยนไปภาพอื่น
			if (videoRef.current) {
				videoRef.current.pause();
				videoRef.current.currentTime = 0;
				setIsVideoPlaying(false);
			}
		}
	}, [activeIndex, product.medias.s1200x1200.length]);

	// ฟังก์ชันเมื่อวิดีโอเล่นจบ
	const handleEndVideoPlay = () => {
		setIsVideoPlaying(false);
	};

	return (
		<ProductBlogContainer
			height={height}
			width={width}
			onClick={handleClickExtend}
		>
			<PictureLayer $activeIndex={activeIndex}>
				{isExtend ? (
					<MediaSlider
						activeIndex={activeIndex}
						showInnerSlide={true}
						medias={product.medias.s400x400}
						videoRef={videoRef}
						onEnded={handleEndVideoPlay}
						buttonClassname="button-icon-controller"
						onClickButtonLeft={handleClickPrevious}
						onClickButtonRight={handleClickNext}
						blurDataUrl={product.blurDataUrl}
					/>
				) : (
					<ImageContainer>
						<Image
							src={product.medias.s640x1240[0].url}
							alt={"slide images"}
							fill
							style={{
								objectFit: "cover",
								objectPosition: "center",
								zIndex: 0,
							}}
							placeholder="blur"
							blurDataURL={product.blurDataUrl[0].url}
							key={product.blurDataUrl[0].url}
						/>
					</ImageContainer>
				)}
			</PictureLayer>
			<Detail onClick={handleClickCloseExtend}>
				{isExtend ? (
					<>
						<TextContainer>
							<Heading>{product.name}</Heading>
							<SubText>{product.subtext}</SubText>
						</TextContainer>
						<PropertiesList>
							<Properties>
								<PropertiesElement properties={product.properties} />
							</Properties>
						</PropertiesList>
						<Button
							className="button-instance"
							labelText="Learn More"
							labelTextClassName="design-component-instance-node"
							showIcon={"none"}
							stateProp="enabled"
							style="filled"
							IconName={undefined}
							onClick={() => {
								setIsExtend(true);
							}}
							link={product.link}
							feature="link"
							ariaLabel={ariaLabel}
						/>
					</>
				) : (
					<TextContainer>
						<Heading>{product.name}</Heading>
						<SubText>{product.subtext}</SubText>
					</TextContainer>
				)}
			</Detail>
		</ProductBlogContainer>
	);
};

export default ProductCardExtendMobile;
