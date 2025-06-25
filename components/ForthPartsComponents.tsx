"use client";
import styled from "@emotion/styled";

export const StyledPart = styled.div<{ width: number; height: number }>`
	align-items: center;
	display: flex;
	height: ${({ height }) => (height * 2) / 3}px;
	width: ${({ width }) => width}px;
	justify-content: space-between;
	position: relative;
	@media (min-width: 0px) and (max-width: 599px) {
		flex-direction: column;
		height: ${({ height }) => height}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		flex-direction: column;
		height: ${({ height }) => height}px;
	}
`;

export const ImageContainer = styled.div<{ width: number; height: number }>`
	align-self: stretch;
	display: flex;
	position: relative;
	width: ${({ width }) => width / 2}px;
	box-sizing: border-box;
	overflow: hidden;
	&::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			rgba(244, 250, 251, 0) 50%,
			rgb(244, 250, 251) 100%
		);

		@media (min-width: 0px) and (max-width: 599px) {
			background: linear-gradient(
				180deg,
				rgba(244, 250, 251, 0) 50%,
				rgb(244, 250, 251) 100%
			);
		}

		@media (min-width: 600px) and (max-width: 839px) {
			background: linear-gradient(
				180deg,
				rgba(244, 250, 251, 0) 50%,
				rgb(244, 250, 251) 100%
			);
		}
	}
	@media (min-width: 0px) and (max-width: 599px) {
		gap: 32px;
		padding: 32px 16px;
		height: ${({ height }) => height / 2}px;
		width: ${({ width }) => width}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 32px;
		padding: 56px 32px;
		height: ${({ height }) => height / 2}px;
		width: ${({ width }) => width}px;
	}
`;
