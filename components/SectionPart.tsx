"use client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "../src/app/css/typography";

const StyledPart = styled.div<{ height: number; width: number }>`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	height: ${({ height }) => (height * 2) / 3}px;
	width: ${({ width }) => width}px;
	justify-content: center;
	padding: 40px;
	position: relative;
	box-sizing: border-box;
	@media (min-width: 0px) and (max-width: 599px) {
		padding: 32px 16px;
		height: ${({ height }) => height}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 56px 32px;
		height: ${({ height }) => height}px;
	}

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
	gap: 40px;
	justify-content: center;
	position: relative;
	width: 100%;
`;
const Heading = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.display.medium}
	position: relative;
	@media (min-width: 0px) and (max-width: 839px) {
		${typography.display.small}
	}
`;

const Body = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.headline.small}
	position: relative;
	@media (min-width: 0px) and (max-width: 839px) {
		${typography.title.large}
	}
`;
interface Props {
	width: number;
	height: number;
	heading: string;
	body: string;
}

const SectionPart: React.FC<Props> = ({ width, height, heading, body }) => {
	return (
		<StyledPart width={width} height={height}>
			<TextContainer>
				<Heading>{heading}</Heading>
				<Body>{body}</Body>
			</TextContainer>
		</StyledPart>
	);
};

export default SectionPart;
