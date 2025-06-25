"use client";
import styled from "@emotion/styled";

export const StyledPart = styled.div<{
	width: number;
	height: number;
}>`
	height: ${({ height }) => height}px;
	position: relative;
	display: flex;
	justify-content: flex-end;
	width: ${({ width }) => width}px;
	overflow: hidden;
`;

export const TextContainer = styled.div<{ width: number; height: number }>`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 48px;
	height: ${({ height }) => height}px;
	justify-content: center;
	padding: 40px;
	position: relative;
	width: ${({ width }) => width / 2}px;
	box-sizing: border-box;

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 32px;
		padding: 32px 16px;
		width: ${({ width }) => width}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 32px;
		padding: 56px 32px;
		width: ${({ width }) => width}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 56px 24px;
	}
`;

export const BackgroundBlur = styled.div`
	position: absolute;
	width: 50%;
	height: 100%;
	right: 0;
	top: 0;
	backdrop-filter: blur(8px);
	background: linear-gradient(
		-90deg,
		rgba(0, 0, 0, 0.6) 0%,
		rgba(0, 0, 0, 0) 100%
	);
	mask-image: linear-gradient(to right, transparent 0%, black 3%);
	@media (min-width: 0px) and (max-width: 599px) {
		gap: 32px;
		padding: 32px 16px;
		width: 100%;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.6) 0%,
			rgba(0, 0, 0, 0) 100%
		);
		mask-image: none;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 32px;
		padding: 56px 32px;
		width: 100%;
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 0.6) 0%,
			rgba(0, 0, 0, 0) 100%
		);
		mask-image: none;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 56px 24px;
	}
`;
