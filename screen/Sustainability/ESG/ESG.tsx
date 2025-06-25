"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import styled from "@emotion/styled";
import ESGContent from "./ESGContent";
import Loading from "../../Loading/Loading";
import TopBarMobile from "../../../components/TopBarMobile";

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

const images: { url: string; blurDataUrl: string }[] = [
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/esg/webp/part1-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRqIAAABXRUJQVlA4IJYAAAAwAwCdASoKAAUAAAAAJYwCdDVAN5VLAA1xb8dC/4Nds1wAAP7//43y/plD8ZrfAm90S3CGg9b9Tnel+/q9N7LnL/7qvRv/n/z3H/Iz7z737fvNw7/9cOe3uWKP+7mw6uolOYv3+ahT/ClcEn9xl57/JySbEqufzbx2W+ur/T/yckopuH+X5j/y6MOPI/Rq/aOjbgIAAAA=",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/esg/webp/part3-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRgABAABXRUJQVlA4IPQAAACwBgCdASoKAAYAAAAAJYwCdLoBQALUAvgDnM6kAsQH4AfsB/gM8AyAD8Vakz2Bn+cfkbxgH6AHneam6zuKgAD+//8Kf0v+Ll6Ptef1en1E1Shsr//5/fmzqVPeQEVf7dWK07PU7g0nxZ60/6SzdHFC3/1enrH5//7hSHS83Cy77lohn9BH5ht9/8/1by5/L1Zx1RbQFtKP0xvAz//P/dmP/u+I96v/EUQp/yAy7sg9yDhBHi3wQrf9u7IsR+9hRbX++9AflxAGQx77YPx/wd38wFmfXhv1nk7j/yKen6BFt/xaS0k995OST7f+PW/tHybjIAAA",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/esg/webp/part5-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAACQAwCdASoKAAcAAAAAJbACdLoANkA7wCtD/8J+WBrYPpREeoQAAP7+nt/90Pf+6sEPUWyFoh7m5xG3798gh/9JmWVbsesm///0ovY/xYaHvggNaMmxGynf/l6f3VIar/J+Xcf4Re7Ju1zZSv4mSn/xboZ7Qjk3TcIhmAJslYzn2Gv//jxddIL6/bD/4TrQ+w//a9/+Sf8qH/980Gl6//ob//CMoo9bcsqd/cZA5Zd+2dIAAAA=",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/esg/webp/part7-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRswAAABXRUJQVlA4IMAAAADQAwCdASoKAAUAAAAAJYgCdLoB+AFGA+wBwjrZAE+xmnGXBuf9tAAA/v/+f9031X/qvx2/53//7deXbwlM/+f8++v//64Dv+w6//2VD2Mz/8L0PV6SGzUlJ/E73ul/+e12zf/9W3D/wx/uB5/+vvA/+mK/XAP//oPeI8MD/4mP58YIL7/z/g9r7/8//ydx5I5wt+jffd/+CK3/Bv7/wIq+//4v/+hH/5t87r9L/1cs5TfzNojz8SOPP/k3/jeAAAA=",
	},
];

const ESG: React.FC = () => {
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
			<ESGContent width={width} height={height} images={images} />
		</StyledHomeDesktop>
	);
};

export default ESG;
