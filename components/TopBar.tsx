"use client";
import React, { useCallback, useEffect, useState } from "react";
import { PositionProvider } from "./ContextPosition";
import Bar from "./Bar";
import ExtendTopBar from "./ExtendTopBar";
import styled from "@emotion/styled";

const TopBarContainer = styled.div<{
	$haveGap: string | null;
	$isvisible: string;
}>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-content: stretch;
	padding: 0.75rem 2.5rem;
	background-color: ${({ theme }) => theme.sys.light.surface};
	gap: ${({ $haveGap }) => ($haveGap === null ? 0 : "0.75rem")};
	position: fixed;
	top: 0; /* ให้ติดที่ตำแหน่งด้านบนสุดของ viewport */
	width: -webkit-fill-available;
	z-index: 100;

	transition: transform 0.3s ease-in-out;
	transform: ${({ $isvisible }) =>
		$isvisible === "true" ? "translateY(0)" : "translateY(-100%)"};

	@media (min-width: 840px) and (max-width: 1199px) {
		padding-left: 24px;
		padding-right: 24px;
	}
`;
const TopBar: React.FC = () => {
	const [activeSection, setActiveSection] = useState<string | null>(null);
	const [isVisible, setIsVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const handleMouseEnter = (section: string) => {
		setActiveSection(section);
	};

	const handleMouseLeave = () => {
		setActiveSection(null);
	};

	const handleScroll = useCallback(() => {
		if (typeof window !== "undefined") {
			const currentScrollY = window.scrollY;

			if (currentScrollY === 0) {
				setIsVisible(true);
			} else if (window.scrollY > lastScrollY) {
				// Scrolling down
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
			onMouseLeave={handleMouseLeave}
			$haveGap={activeSection}
			$isvisible={isVisible.toString()}
		>
			<PositionProvider>
				<Bar onMouseEnter={handleMouseEnter} />
				<ExtendTopBar activeSection={activeSection} />
			</PositionProvider>
		</TopBarContainer>
	);
};

export default TopBar;
