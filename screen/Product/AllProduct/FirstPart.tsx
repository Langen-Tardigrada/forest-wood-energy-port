"use client";
import React from "react";
import styled from "@emotion/styled";
import LineSectionComponent from "../../../components/LineSection";
import { typography } from "../../../src/app/css/typography";

const StyledPart = styled.div<{ height: number }>`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: 1fr auto;
	column-gap: 24px;
	row-gap: 16px;
	height: ${({ height }) =>
		height - 40 - 128}px; //height - bottom padding - inner-top+bottom padding
	padding: 64px 40px;
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		height: ${({ height }) => height - 56 - 128}px;
		padding: 56px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		height: ${({ height }) => height - 56 - 128}px;
		padding: 56px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		height: ${({ height }) => height - 64 - 128}px;
		padding: 64px 24px;
	}
`;
const ProductHeading = styled.div`
	align-items: flex-start;
	display: flex;
	grid-column: 1 / span 7;
	grid-row: 1;
	flex-direction: column;
	flex-grow: 1;
	gap: 48px;
	justify-content: center;
	position: relative;
	height: 100%;

	@media (min-width: 0px) and (max-width: 599px) {
		grid-column: 1 / span 12;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		grid-column: 1 / span 12;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		grid-column: 1 / span 8;
	}
`;
const Heading = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	font-family: var(--font-jost), Helvetica;
	font-size: 72px;
	font-weight: 400;
	letter-spacing: 0;
	line-height: 64px;
	position: relative;

	@media (min-width: 0px) and (max-width: 839px) {
		font-size: ${({ theme }) => theme.typography.display.large.fontSize};
		font-style: normal;
		font-weight: ${({ theme }) => theme.typography.display.large.fontWeight};
		letter-spacing: ${({ theme }) =>
			theme.typography.display.large.letterSpacing};
		line-height: ${({ theme }) => theme.typography.display.large.lineHeight};
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 72px;
	}
`;
const Body = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.headline.small}
	position: relative;
	text-align: justify;

	@media (min-width: 0px) and (max-width: 839px) {
		${typography.title.large}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.headline.small}
	}
`;
interface Props {
	width: number;
	height: number;
}
const FirstPart: React.FC<Props> = ({ width, height }) => {
	return (
		<StyledPart height={height}>
			<ProductHeading>
				<Heading>Products</Heading>
				<Body>
					At Forest Wood Energy, we are committed to supporting our clients in
					achieving their clean energy goals by offering a diverse range of
					biomass products tailored to the specific needs of industrial
					customers.
				</Body>
			</ProductHeading>
			<div
				style={{ gridRow: 2, gridColumn: "1 / span 12", height: "min-content" }}
			>
				<LineSectionComponent mode="light" />
			</div>
		</StyledPart>
	);
};

export default FirstPart;
