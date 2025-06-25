"use client";
import React from "react";
import styled from "@emotion/styled";

const LineSlide = styled.div`
	align-items: center;
	align-self: stretch;
	display: flex;
	flex: 0 0 auto;
	gap: 16px;
	justify-content: center;
	position: relative;
	width: 250px;
`;
const Line = styled.div<{ $isActive: boolean }>`
	border-top: 2px solid
		${({ theme, $isActive }) =>
			$isActive
				? theme.sys.light["on-surface-variant"]
				: theme.sys.light["outline-variant"]};
	position: relative;
	width: 100%;
	transition: border-color 0.8s ease;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
`;
interface Props {
	amount: number;
	activeIndex: number;
}
const LineSlideBar: React.FC<Props> = ({ amount, activeIndex }) => {
	return (
		<LineSlide>
			{Array.from({ length: amount }).map((_, index) => (
				<Line key={index} $isActive={index === activeIndex} />
			))}
		</LineSlide>
	);
};

export default LineSlideBar;
