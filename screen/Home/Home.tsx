"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import HomeContent from "./HomeContent";
import TopBar from "../../components/TopBar";
import styled from "@emotion/styled";
import Loading from "../Loading/Loading";
import { products } from "../../public/information/home/home";
import TopBarMobile from "../../components/TopBarMobile";
import { praktika } from "@/app/css/fonts";

const StyledContainer = styled.div<{ width: number }>`
	background-color: ${({ theme }) => theme.sys.light.surface};
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: ${({ width }) => width}px;
	position: relative;
	scrollbar-width: none; /* สำหรับ Firefox */

	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ใน Chrome, Safari และ Edge */
	}
`;

const HomePage: React.FC = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useLayoutEffect(() => {
		const viewportHeight = window.visualViewport?.height || window.innerHeight;
		const viewportWidth = window.visualViewport?.width || window.innerWidth;
		setHeight(viewportHeight);
		setWidth(viewportWidth);

		const handleResize = () => {
			const viewportHeight =
				window.visualViewport?.height || window.innerHeight;
			const viewportWidth = window.visualViewport?.width || window.innerWidth;
			setHeight(viewportHeight);
			setWidth(viewportWidth);
		};

		window.visualViewport?.addEventListener("resize", handleResize);

		return () => {
			window.visualViewport?.removeEventListener("resize", handleResize);
		};
	}, []);

	const video = {
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/home/part1.mp4",
		preload:
			"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/home/webp/10px/part1-snapshot.webp",
	};
	const image = {
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/home/webp/part2-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRuIAAABXRUJQVlA4INYAAAAQBQCdASoKAAcAAAAAJaACdDBGvJuXgD8AP2A/wGWAaIBbqvqN/1j8pzU33wD3egIAAP7/Kl/9FUd0Ge9HnlFgXu5Gest1n80uICJCf3BbBD1k5EzI/9wWBfhQjjv9x0+BgLhYf/suPu232NZaPcq6r8xufxMPv/4f5DAP/9KtULbOYJb/n/pUsnLzzY4m4u16H+/NrlEkTq3/t7+nYn+toZ/85kP9Ld+uP1ny//3fD/w7+jkyzf/+PH/4epfn//Bv/6AR7h28TkYYF9atqiKgx9fDFEAA",
	};

	useEffect(() => {
		const handlePageLoad = () => {
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
		<StyledContainer width={width} className={`${praktika.variable}`}>
			{width < 840 ? <TopBarMobile height={height} /> : <TopBar />}
			<HomeContent
				width={width}
				height={height}
				video={video}
				image={image}
				products={products}
			/>
		</StyledContainer>
	);
};

export default HomePage;
