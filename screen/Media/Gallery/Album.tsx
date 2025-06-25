"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import styled from "@emotion/styled";
import Loading from "../../Loading/Loading";
import TopBarMobile from "../../../components/TopBarMobile";
import AlbumContainer from "./AlbumContainer";

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

interface Props {
	medias: Array<{
		original: string;
		type: string;
		grid_column: string;
		grid_row: string;
		blurDataUrl: string;
	}>;
	albumName: string;
	slug: string;
}

const AlbumPage: React.FC<Props> = ({ medias, albumName, slug }) => {
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
		<StyledHomeDesktop width={width}>
			{width < 840 ? <TopBarMobile height={height} /> : <TopBar />}
			<AlbumContainer
				width={width}
				height={height}
				medias={medias}
				albumName={albumName}
				slug={slug}
			/>
		</StyledHomeDesktop>
	);
};

export default AlbumPage;
