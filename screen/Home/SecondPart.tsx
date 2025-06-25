"use client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "../../src/app/css/typography";
import Image from "next/image";

const StyledPart = styled.div<{
	width: number;
	height: number;
}>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: start;
	position: relative;
	width: 100%;
	height: ${({ height }) => height}px;
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
`;
const BoxContainer = styled.div<{ width: number }>`
	-webkit-backdrop-filter: blur(16px) brightness(100%);
	align-items: center;
	backdrop-filter: blur(16px) brightness(100%);
	background-color: #00000061;
	border-radius: 0px 12px 12px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 560px;
	padding: 40px;
	position: relative;
	width: ${({ width }) => width / 2 - 80 - 12}px;
	box-sizing: border-box;

	@media (min-width: 0px) and (max-width: 599px) {
		padding: 32px 16px;
		width: ${({ width }) => width - 16}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 56px 32px;
		width: ${({ width }) => width - 32}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 48px 24px;
		width: ${({ width }) => (width / 12) * 6 - 12}px;
	}
`;
const TextContainer = styled.div`
	align-items: center;
	align-self: stretch;
	display: flex;
	flex: 0 0 auto;
	flex-direction: column;
	gap: 40px;
	justify-content: center;
	position: relative;
	width: 100%;
`;
const HeadingContainer = styled.div`
	align-items: flex-start;
	align-self: stretch;
	display: flex;
	flex: 0 0 auto;
	flex-direction: column;
	gap: 24px;
	position: relative;
	width: 100%;
`;
const SubHeading = styled.div`
	align-self: stretch;
	${typography.headline.large}
	position: relative;

	@media (min-width: 0px) and (max-width: 839px) {
		${typography.headline.small}
	}
`;
const Heading = styled.div`
	align-self: stretch;
	${typography.display.medium}
	position: relative;

	@media (min-width: 0px) and (max-width: 839px) {
		${typography.headline.large}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.display.small}
	}
`;
const Body = styled.div`
	align-self: stretch;
	${typography.title.medium}
	position: relative;
	text-align: justify;
`;
interface Props {
	width: number;
	height: number;
	image: { url: string; blurDataUrl: string };
	ref: React.MutableRefObject<HTMLDivElement | null>;
}
const SecondPart = React.forwardRef<HTMLDivElement, Props>(
	({ width, height, image }, ref) => {
		return (
			<StyledPart width={width} height={height} ref={ref}>
				<Image
					src={image.url}
					alt={"Trees and Glass Box"}
					fill
					style={{
						objectPosition: "50% 50%",
						objectFit: "cover",
						zIndex: 0,
					}}
					placeholder="blur"
					blurDataURL={image.blurDataUrl}
				/>
				<BoxContainer width={width}>
					<TextContainer>
						<HeadingContainer>
							<SubHeading>At Forest Wood Energy</SubHeading>
							<Heading>
								Combating climate change is at the heart of our job
							</Heading>
						</HeadingContainer>
						<Body>
							Since the very beginning, we have been instrumental in helping
							global energy producers significantly lower their net carbon
							emissions through the use of sustainable biomass. By promoting
							sustainable bioenergy, we have enabled the transition away from
							fossil fuels, support the growth of forest carbon stocks, and
							deliver reliable, affordable energy to their communities.
						</Body>
					</TextContainer>
				</BoxContainer>
			</StyledPart>
		);
	}
);

export default SecondPart;
