"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import styled from "@emotion/styled";
import ClimateChangeContent from "./ClimateChangeContent";
import Loading from "../../Loading/Loading";
import TopBarMobile from "../../../components/TopBarMobile";

const StyledContainer = styled.div<{ width: number }>`
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

const images: {
	url: string;
	blurDataUrl: string;
}[] = [
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/climatechange/webp/part1-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRggBAABXRUJQVlA4IPwAAADQBACdASoKAAoAAAAAJbACdLoB+AH6gHoqkcAfw3+Qf4j8vf55yAH6AGB+3mjVlgD+/zGTsSLNuP+PZijuw//kn//UY8jn+r/b9ssYk/HFcCXHXud15bENUBFYMn6PZrbn+3v7Q/oa5SIm2ZMU/fV/8XA//+uZp8//rh+/+b/0T8j91TvN/9sD//t0U0Av9yt62+rf/tropD0ooFeR3/9a7T7//wfp/t7/uAHY7/nffTAlz1mQRCxn//FyP8X/unX8zv9J0iKQb/N9vnsNf/Ti1/3cWfJa38m3LwW//OXOeef1lj8/Zn7XhoJUUT5vpH8nJGr1EK/v2aYAAAA=",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/climatechange/webp/part3-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRqoAAABXRUJQVlA4IJ4AAAAwAwCdASoKAAYAAAAAJYwCdHAAN4A9EC0ADMKP8AUn0M4gAP7//3f2Ha7Rv/awxLB1p1CP/wv3azvHb6v7gyS2F5f3/7mt41YjGRLm8ZIA7gt+1/xdCS+29nHfxf9HdcFOIGojvDAPC1Pom0h8H//386ye3ev7qXxAPqE+yP5vw2uOZKS+DVNvfj/7jCmd/pQp/ff6nI1//+akQkAAAA==",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/climatechange/webp/part5-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRugAAABXRUJQVlA4INwAAADQBQCdASoHAAoAAAAAJZwCdEf/2Rf+uThAfSBPAH4zagB+FeszbIX/F/5/+PnCAH1XW55e5ZAAAP7//lobFl/odffyfo+ylZMvo4YYgv/5y6Z6lGVLps33/+HsiKX9BDm0Rf/ufOf/E4PEkff4RrqbqUQ5z0sNW3l9Pf+hqCV7JF7QhRR6chP//jtr/+87u8Wx8+rvg5tPYvbGb//eJOtA7gbgfTYUapb+0a4LiW8E4XEDivYkqf1brNuY25x+t51NY/4//X/OYD/Iox/5mNB4c/tJf8qH0MdjAAAA",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/climatechange/webp/part6.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRuAAAABXRUJQVlA4INQAAAAwBACdASoKAAcAAAAAJbACdC/Jf1VcgCZAM5A1wGud/3L8uzB76NSNiMAA/th/80F2xX4lIjFf7N1g6D+Pf9213WxJoC2DNJcB+22P88t2ySYMqag0/Kc9nn/Kf746/gq2/+aX3nhSp+m3f5zGiDN4QS9vvgaNX7E/+J3nqW0v6WFtHKCKIen1+GNvFY//ng3nzPe/29+rbSb3U/ab/+DXTvcz//+JlW3+Jj+xv/6AR/9Hm//4ZYMv+Zz/0gGh0Pj//IrcVv+Df/p7/od33F/0XAAAAA==",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/climatechange/webp/part8-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRsIAAABXRUJQVlA4ILYAAADwAwCdASoIAAoAAAAAJbACdLcAKcAsQCfB/4P/dvyz/m5oT2pVJVYAAP77mj7nxatb2PL9vftC/SejjyvFf9+T5LDtmavEf5H8+hYYDIR3LvzWP4OT/cof+t2f/wnJ/vq//6OU+Fu7iFA1/4neEao/6Hn/0G/++r//Z+0gMc521ZAyIzWv/6wRAthFF8/5OW5A/6QV4b/U3/wn//yT/g/4a8Wp9/p6if/9jWv67p3X9VbdYgAAAA==",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/climatechange/webp/part9.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRrIAAABXRUJQVlA4IKYAAADQAgCdASoKAAcAAAAAJZgCdLoANkAxQHlzvfQbtGMAAP7//xhvtLqJW7J/5Nsr3lL5+5Bvv6/clyQEV/9KMQyc/um7xyVTv/kFf8q2W/vd/gupkxWS/4sN/DElayD/2/kdT//xb0MeQmBO535UN64gIg/JIJmf/wgCifv1u/4/5gOMsPJmvog//ys7ar8zv6G+vP/zamrvsCsP9TxH//Ds6Xx3IQAA",
	},
];

const ClimateChange: React.FC = () => {
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
		<StyledContainer width={width}>
			{width < 840 ? <TopBarMobile height={height} /> : <TopBar />}
			<ClimateChangeContent width={width} height={height} images={images} />
		</StyledContainer>
	);
};

export default ClimateChange;
