"use client";
import React, { ForwardedRef, useState } from "react";
import styled from "@emotion/styled";
import LineSlideBar from "./LineSlideBar";
import Image from "next/image";

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 16px;
`;
const SlideWrap = styled.div`
	position: absolute;
	bottom: 64px;
	left: 50%;
	transform: translateX(-50%);
	z-index: 2;
	display: flex;
`;
const Video = styled.video<{ $active: boolean }>`
	width: 100%;
	height: 100%;
	object-fit: cover;
	position: absolute;
	top: 0;
	left: 0;
	transition: opacity 1s ease;
	opacity: ${({ $active }) => ($active ? 1 : 0)};
`;
interface Props {
	medias: Array<{ url: string; mediaType: "img" | "mp4" }>;
	blurDataUrl: Array<{ url: string; mediaType: "img" | "mp4" }>;
	activeIndex: number;
	showInnerSlide: boolean;
	onEnded: () => void;
	onLoad: () => void;
	videoRef: ForwardedRef<HTMLVideoElement>;
}
const MediaAutoSlider = React.forwardRef<HTMLVideoElement, Props>(
	(
		{
			medias,
			activeIndex,
			showInnerSlide,
			onEnded,
			onLoad,
			videoRef,
			blurDataUrl,
		},
		ref
	) => {
		return (
			<ImageContainer>
				{medias.map((item, index) => (
					<React.Fragment key={index}>
						{item.mediaType === "img" ? (
							<Image
								src={item.url}
								alt={"slide images" + index.toString}
								fill
								style={{
									objectFit: "cover",
									transition: "opacity 1s ease",
									opacity: `${index === activeIndex ? 1 : 0}`,
								}}
								placeholder="blur"
								blurDataURL={blurDataUrl[index].url}
								key={blurDataUrl[index].url}
							/>
						) : (
							<Video
								$active={activeIndex === medias.length - 1}
								ref={videoRef}
								muted
								onEnded={onEnded}
								onPlay={onLoad}
								playsInline
								poster={blurDataUrl[index].url}
							>
								<source src={item.url} type="video/mp4" />
							</Video>
						)}
					</React.Fragment>
				))}
				{showInnerSlide ? (
					<SlideWrap>
						<LineSlideBar amount={medias.length} activeIndex={activeIndex} />
					</SlideWrap>
				) : (
					<></>
				)}
			</ImageContainer>
		);
	}
);

MediaAutoSlider.displayName = "MediaAutoSlider";

export default MediaAutoSlider;
