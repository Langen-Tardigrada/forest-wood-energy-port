"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import styled from "@emotion/styled";
import OurTeamContent from "./OurTeamContent";
import Loading from "../../Loading/Loading";
import { teammember } from "../../../public/information/about/ourteam";
import TopBarMobile from "../../../components/TopBarMobile";
import { lora } from "../../../src/app/css/fonts";

const StyledHomeDesktop = styled.div<{ width: number }>`
	background-color: ${({ theme }) => theme.sys.light.surface};
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: ${({ width }) => width}px;
	scrollbar-width: none; /* สำหรับ Firefox */

	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ใน Chrome, Safari และ Edge */
	}
`;

const OurteamPage: React.FC = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useLayoutEffect(() => {
		const viewportHeight = window.visualViewport?.height || window.innerHeight;
		const viewportWidth = window.visualViewport?.width || window.innerWidth;
		setHeight(viewportHeight); // อัปเดตค่า height ของหน้า
		setWidth(viewportWidth); // อัปเดตค่า width ของหน้า

		const handleResize = () => {
			const viewportHeight =
				window.visualViewport?.height || window.innerHeight;
			const viewportWidth = window.visualViewport?.width || window.innerWidth;
			setHeight(viewportHeight); // อัปเดตค่า height ของหน้า
			setWidth(viewportWidth); // อัปเดตค่า width ของหน้า
		};

		window.visualViewport?.addEventListener("resize", handleResize);

		return () => {
			window.visualViewport?.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const handlePageLoad = () => {
			// เมื่อหน้าทั้งหมดโหลดเสร็จ ให้ซ่อน loading screen
			setIsLoading(false);
		};

		if (document.readyState === "complete") {
			handlePageLoad();
		} else {
			window.addEventListener("load", handlePageLoad);
		}

		return () => {
			window.removeEventListener("load", handlePageLoad);
		};
	}, []);

	if (isLoading) {
		return <Loading width={width} height={height} />;
	}

	return (
		<StyledHomeDesktop width={width} className={`${lora.variable}`}>
			{width < 840 ? <TopBarMobile height={height} /> : <TopBar />}
			<OurTeamContent width={width} height={height} member={teammember} />
		</StyledHomeDesktop>
	);
};

export default OurteamPage;
