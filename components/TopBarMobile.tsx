"use client";
import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import BarMobile from "./BarMobile";
import ExtendTopBarMobile from "./ExtendTopBarMobile";

const TopBarContainer = styled.div<{
	$haveGap: boolean;
	$isvisible: string;
	height: number;
}>`
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: ${({ $haveGap }) => ($haveGap ? `flex-start` : "center")};
	align-items: center;
	align-content: stretch;
	padding: 1rem;
	background-color: ${({ theme }) => theme.sys.light.surface};
	gap: ${({ $haveGap }) => ($haveGap ? "2rem" : 0)};
	position: fixed;
	top: 0; /* ให้ติดที่ตำแหน่งด้านบนสุดของ viewport */
	width: -webkit-fill-available;
	z-index: 100;
	height: ${({ $haveGap, height }) => ($haveGap ? `${height}px` : "72px")};
	box-sizing: border-box;
	transition: transform 0.3s ease-in-out;
	transform: ${({ $isvisible }) =>
		$isvisible === "true" ? "translateY(0)" : "translateY(-100%)"};

	@media (min-width: 600px) and (max-width: 839px) {
		padding-right: 32px;
		padding-left: 32px;
	}
`;

interface Props {
	height: number;
}
const TopBarMobile: React.FC<Props> = ({ height }) => {
	const [activeSection, setActiveSection] = useState(false);
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const handleClick = () => {
		setActiveSection(!activeSection);
	};

	const handleScroll = useCallback(() => {
		if (typeof window !== "undefined") {
			const currentScrollY = window.scrollY;

			if (currentScrollY === 0) {
				setIsVisible(true);
			} else if (window.scrollY > lastScrollY) {
				// Scrolling down
				setActiveSection(false);
				setIsVisible(false);
			} else {
				// Scrolling up
				setIsVisible(true);
			}
			setLastScrollY(window.scrollY);
		}
	}, [lastScrollY]);

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("scroll", handleScroll);

			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, [handleScroll]);
	return (
		<TopBarContainer
			$haveGap={activeSection}
			$isvisible={isVisible.toString()}
			height={height}
		>
			<BarMobile onClick={handleClick} activeSection={activeSection} />
			<ExtendTopBarMobile activeSection={activeSection} />
		</TopBarContainer>
	);
};

export default TopBarMobile;
