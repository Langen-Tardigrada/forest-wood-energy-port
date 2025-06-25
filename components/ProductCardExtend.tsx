"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import MediaAutoSlider from "./MediaAutoSlider";
import { Button } from "./Button";
import { Product } from "../public/information/product/mainpage";
import { useTheme } from "@emotion/react";
import { typography } from "../src/app/css/typography";

const ProductBlogContainer = styled.div<{ height: number; width: number }>`
	align-items: center;
	background-color: ${({ theme }) => theme.sys.light["surface-container-low"]};
	border-radius: 12px;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: 24px;
	width: ${({ width }) => width - 80}px;
	height: ${({ height }) => height - 80}px;
	position: relative;

	@media (min-width: 840px) and (max-width: 1199px) {
		width: ${({ width }) => width - 48}px;
		height: ${({ height }) => height - 112}px;
	}
`;

const PictureLayer = styled.div`
	align-items: center;
	align-self: stretch;
	border-radius: 12px 0px 0px 12px;
	display: flex;
	grid-column: 1 / span 8;
	flex: 1;
	flex-direction: column;
	flex-grow: 1;
	justify-content: flex-end;
	position: relative;
	overflow: hidden;
`;

const Detail = styled.div`
	align-items: center;
	align-self: stretch;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 64px 40px;
	position: relative;
	grid-column: 9 / span 4;

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 56px 24px;
	}
`;

const TextContainer = styled.div`
	align-items: flex-start;
	align-self: stretch;
	display: flex;
	flex: 1;
	flex-direction: column;
	flex-grow: 1;
	gap: 64px;
	padding: 64px 0px 0px;
	position: relative;
	width: 100%;
`;

const Heading = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.display.small}
	margin-top: -1px;
	position: relative;
`;

const SubPartContainer = styled.div`
	align-items: center;
	align-self: stretch;
	display: flex;
	flex: 0 0 auto;
	flex-direction: column;
	gap: 24px;
	position: relative;
	width: 100%;

	& .button-instance {
		display: flex !important;
		width: 100% !important;
	}
`;

const SubText = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.body.medium}
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
	${typography.body.medium}
	position: relative;
	white-space: normal;
	width: fit-content;
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

const ProductCardExtend: React.FC<Props> = ({
	width,
	height,
	product,
	ariaLabel,
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
			const interval = setInterval(() => {
				setActiveIndex((prevIndex) => {
					const nextIndex = (prevIndex + 1) % product.medias.s1200x1200.length;
					if (
						nextIndex === product.medias.s1200x1200.length - 1 &&
						product.medias.s1200x1200[nextIndex].mediaType === "mp4"
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
	}, [isHovered, isVideoPlaying, product.medias.s1200x1200.length]); // Run effect on hover state change

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

	const chooseMedia = (i: Product) => {
		if (width >= 840 && width < 1199) {
			return i.medias.s640x1240;
		} else if (width < 1599 && width >= 1200) {
			return i.medias.s940x940;
		} else {
			return i.medias.s1200x1200;
		}
	};

	return (
		<ProductBlogContainer height={height} width={width}>
			<PictureLayer
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<MediaAutoSlider
					activeIndex={activeIndex}
					showInnerSlide={true}
					medias={chooseMedia(product)}
					onEnded={handleVideoEnd}
					onLoad={handleVideoLoad}
					videoRef={videoRef}
					blurDataUrl={product.blurDataUrl}
				/>
			</PictureLayer>
			<Detail>
				<TextContainer>
					<Heading>{product.name}</Heading>
					<SubPartContainer>
						<Button
							className="button-instance"
							labelText="Learn More"
							labelTextClassName="design-component-instance-node"
							showIcon={"none"}
							stateProp="enabled"
							style="filled"
							IconName={undefined}
							onClick={undefined}
							link={product.link}
							feature="link"
							ariaLabel={ariaLabel}
						/>
						<SubText>{product.subtext}</SubText>
					</SubPartContainer>
				</TextContainer>
				<PropertiesList>
					<Properties>
						<PropertiesElement properties={product.properties} />
					</Properties>
				</PropertiesList>
			</Detail>
		</ProductBlogContainer>
	);
};

export default ProductCardExtend;
