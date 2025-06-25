"use client";
import React from "react";
import styled from "@emotion/styled";
import LineSectionComponent from "../../components/LineSection";
import { typography } from "../../src/app/css/typography";

const StyledBox = styled.div<{ height: number }>`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	height: ${({ height }) => (height * 2) / 3}px;
	justify-content: space-between;
	padding: 128px 40px;
	position: relative;
	width: 100%;
	box-sizing: border-box;

	@media (min-width: 0px) and (max-width: 599px) {
		padding: 56px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 56px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 48px 24px;
	}
`;
const HeadingContainer = styled.div`
	align-items: flex-start;
	align-self: stretch;
	display: flex;
	flex: 1;
	flex-direction: column;
	flex-grow: 1;
	gap: 12px;
	justify-content: center;
	position: relative;
	width: 100%;

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 24px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 24px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		gap: 12px;
	}
`;
const Heading = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.display.medium}
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.display.small}
	}
`;
const Body = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.title.large}
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.title.medium}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.title.medium}
	}
`;
interface Props {
	height: number;
}

const ThirdPart: React.FC<Props> = ({ height }) => {
	return (
		<StyledBox height={height}>
			<HeadingContainer>
				<Heading>Forest Wood Energy</Heading>
				<Body>
					“Powering a greener future, Forest Wood Energy is committed to
					transforming agricultural waste into high-quality biomass fuel. Our
					dedication to sustainability and quality ensures reliable energy
					solutions for our customers.”
				</Body>
			</HeadingContainer>
			<LineSectionComponent mode="light" />
		</StyledBox>
	);
};

export default ThirdPart;
