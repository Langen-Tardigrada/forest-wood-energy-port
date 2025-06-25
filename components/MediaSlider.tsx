"use client";
import React, { ForwardedRef, useState } from "react";
import styled from "@emotion/styled";
import { ButtonIcon } from "./ButtonIcon";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
	border-radius: 16px;
`;

const SlideButton = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 2;
	display: flex;
`;
const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	flex: 1;
	justify-content: space-between;
	align-items: center;
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
	activeIndex: number;
	showInnerSlide: boolean;
	onEnded: () => void;
	videoRef: ForwardedRef<HTMLVideoElement>;
	onClickMedia?: () => void;
	buttonClassname?: string;
	onClickButtonLeft?: () => void;
	onClickButtonRight?: () => void;
	blurDataUrl: Array<{ url: string; mediaType: "img" | "mp4" }>;
}
const MediaSlider = React.forwardRef<HTMLVideoElement, Props>(
	(
		{
			medias,
			activeIndex,
			showInnerSlide,
			onEnded,
			videoRef,
			onClickMedia,
			buttonClassname,
			onClickButtonRight,
			onClickButtonLeft,
			blurDataUrl,
		},
		ref
	) => {
		return (
			<ImageContainer onClick={onClickMedia}>
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
								loop
								onEnded={onEnded}
								playsInline
								poster={blurDataUrl[index].url}
							>
								<source src={item.url} type="video/mp4" />
							</Video>
						)}
					</React.Fragment>
				))}
				{showInnerSlide ? (
					<SlideButton>
						<ButtonContainer>
							<ButtonIcon
								style={"text"}
								stateProp={"enabled"}
								className={buttonClassname}
								IconName={faChevronLeft}
								size={"sm"}
								onClick={onClickButtonLeft}
								ariaLabel="Previous photo"
							/>
							<ButtonIcon
								style={"text"}
								stateProp={"enabled"}
								className={buttonClassname}
								IconName={faChevronRight}
								size={"sm"}
								onClick={onClickButtonRight}
								ariaLabel="Next Photo"
							/>
						</ButtonContainer>
					</SlideButton>
				) : (
					<></>
				)}
			</ImageContainer>
		);
	}
);

MediaSlider.displayName = "MediaSlider";

export default MediaSlider;
