"use client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "../src/app/css/typography";
import Image from "next/image";
import { IMAGE } from "../types/image";

const StackedCardContainer = styled.div<{
	$grid_column: string;
	width: number;
}>`
	align-items: stretch;
	display: flex;
	flex-direction: column;
	position: relative;
	height: 100%;
	grid-column: ${({ $grid_column }) => $grid_column};
	border-radius: 12px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.sys.light.surface};
	border: 1px solid ${({ theme }) => theme.sys.light["outline-variant"]};

	@media (min-width: 0px) and (max-width: 599px) {
		width: ${({ width }) => width / 2 - 28}px;
		height: ${({ width }) => ((width - 32) / 4) * 2 * 1.5}px;
		grid-column: unset;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: ${({ width }) => width / 2 - 44}px;
		height: ${({ width }) => ((width - 64) / 8) * 4 * 1.5}px;
		grid-column: unset;
	}
`;

const MediaTextContent = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100%;
	position: relative;
	width: 100%;
`;

const Media = styled.div`
	align-self: stretch;
	flex: 1;
	flex-grow: 1;
	position: relative;
	overflow: hidden;
	width: 100%;
`;

const Headline = styled.div`
	align-items: flex-start;
	align-self: stretch;
	display: flex;
	flex: 0 0 auto;
	flex-direction: column;
	position: relative;
	width: 100%;
	box-sizing: border-box;
	padding: 16px;
`;

const Title = styled.div`
	color: #161d1d;
	${typography.title.large}
	position: relative;
	width: 100%;
	@media (min-width: 0px) and (max-width: 839px) {
		${typography.title.medium}
	}
`;

const Subhead = styled.div`
	color: #3f4849;
	${typography.body.large}
	position: relative;
	width: 100%;
`;

interface Props {
	width: number;
	height: number;
	cardWidth: string;
	image: IMAGE;
	position: string;
	name: string;
}

const StackedCard: React.FC<Props> = ({
	width,
	height,
	cardWidth,
	image,
	position,
	name,
}) => {
	return (
		<StackedCardContainer width={width} $grid_column={cardWidth}>
			<MediaTextContent>
				<Media>
					<Image
						src={image.url}
						alt={"person"}
						fill
						style={{
							objectFit: "cover",
							objectPosition: "50% 50%",
							zIndex: 0,
						}}
						placeholder="blur"
						blurDataURL={image.blurDataUrl}
						key={image.blurDataUrl}
						sizes="(min-width: 1600) 80vw, (min-width: 1200) 80vw, (min-width: 840): 100vw, (max-width: 600): 80vw"
					/>
				</Media>
				<Headline>
					<Title>{name}</Title>
					<Subhead>{position}</Subhead>
				</Headline>
			</MediaTextContent>
		</StackedCardContainer>
	);
};

export default StackedCard;
