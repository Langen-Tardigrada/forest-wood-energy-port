"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import styled from "@emotion/styled";
import REIContent from "./REIContent";
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
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/rei/webp/part1.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRs4AAABXRUJQVlA4IMIAAABQBACdASoHAAoAAAAAJZACdHIA/EC4AP6BfgH6gdIB6IBGCX9yMy4YLQRgAP7+4Y0y1yX7BQsST8ueQ37wNWIcv//PVM8zCXyW//6nrP5rDv5jP/8ivlWnsD1iX9OS/ui6KdN47G6jbv6wSndk/Wd98ieGg3ZkLC+ZpKayBFRLmWj/5702n9XZcT4hnnllL9q/D/WT/5cFnOX8qH87FTj9egv/WS/+nKlf8MVfQdCKZvmh+3P+qlf/a/WV/IUwFAAAAA==",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/rei/webp/part3-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRuYAAABXRUJQVlA4INoAAACQBACdASoKAAoAAAAAJbACdLoB+AH6gDhAYwBlpNOA2Ar+O/3g2cwb/ea98mAA/v2ZL/Y6lEG+40ULjocfwXuaS5wuQ3Wk8b1CyR+bP5xOj3P5Jci//Zr8y9J3mfC/3pgnAY+f/9d8P/7D7/EVCIP/f2PJ/wPGE/udaYMR+M8x98g5sf+7U8wHLf+x4/v5GvOeteLTRB1ml6E+UPak+l7icL800FqKQq//cQ9iC/ayh12WLFAm5Q7jP8G3N9qd/1N/+wz/9pb10xDPUIqqOUzGHbx/g3/97/gAAA==",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/rei/webp/part4-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRgQBAABXRUJQVlA4IPgAAACwBgCdASoJAAoAAAAAJaACdLoB+ACWAP0A6wCTAMcB+FfgAbYBkAH4k/jNQpe8A/lfqQf1j8yDWfyxTqG4YAD++qP0EfyiDnLcXZ6hDh8q5TH91aqcp/1TP/5aVppphgYCj9P//4EL/1Qx1B2/U/g2yf5yUd4nLQkNm1d9xFu6anH9s8bFW1aOXav9vf6WN/7HZa/Wh//kPfDr/XWvmX/3+ZZAeRPUDf78/nX/FB9//TXGFhAE7n8/c+zPigGhSTMn/54N303lZxGzJsL7woyj8f+CH747/3Vc/xef/n0vuaq76wH67V4H8Kp7MX+zeYdTB+FKf7tgAA==",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/rei/webp/part5-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRtwAAABXRUJQVlA4INAAAACwAwCdASoHAAoAAAAAJQBOiYAKcA9FW0ADMB/7n+VReCSjVj4Q4AD+//+uR/+Ofz//GRX+ZYfT2kJHjY3nrE3Kpdya4iSILf/AeigHzPH9D/6Y3+ZOB/w6P/7kyFg3/28ohk/+3vwP/6nl//luP/pn/9lcRHFrDzr82Vj/d87oldc/U/lVsg7z22OLOwWOFsnUhJDsN/+Tb/vwRLCNf16rp4q34jWN64//5xV1xi/Mp/5//NYab//pz+v7JL/c0nOcCw7/5uOhjt/2XCNAUQAA",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/rei/webp/part7-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRtIAAABXRUJQVlA4IMYAAABwBACdASoKAAcAAAAAJbACdLoBNgFwAWRn+oHsAehmRhh/lDSfyI38WFKUAAD+2Ggv/Q2X4xf827f5Ye47/3r2dF/pP/f//+Pee7wTPP+K6Yd9/zlWt/9r12C7lD/ph/Fem//3QSlBfiN+enJAFApOT4Z6jsgetotcenupSHs9/2zf5cmxVjtnrf1wX2/HX/6HP/10DHd4ED5hH8Tvwb/+zFP/oeeAf7IO0qK+uas2slP//bm7/7k0IkF//kWvqsfH+h/V4AA=",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/rei/webp/part8-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRoAAAABXRUJQVlA4IHQAAADwAgCdASoKAAcAAAAAJbACdLoB+AH6AfwABmxLtEJfAAD+9v/i/L8kzYfficEyafQIZv29rTtl+enmNNWwdYxTY9pAP//JkvhdzhZhd8vlfe3f/lFH//aBl2P5yb9/Me138ymlvQmhuapn8Tvwb//u/wAAAA==",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/sustainability/rei/webp/part9.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRtQAAABXRUJQVlA4IMgAAACQAwCdASoKAAcAAAAAJbACdDBFlUA/Ct5s2wLf1X8ui8Gy7a6gAP7//hhMH8/KfTLVaHrjDPy+Thk0+UB//vx5Af0PK6V0W8G4a+f/i5oFpkj77Kn//++rx/0Fz/Xv8mRvf/jCeLVr9DrPa//9Dbjef/1Gn96ZUsS7PiymK/9f+pHekH/2TW3VloUvUnQAt6q/aVThP/mMffEa/Y/+xBnw3wevCn///qT0vvxO/c3/jg8fn//m+9Bq7FC9VZ7G3/rC9f8+DfFwAA==",
	},
];

const REI: React.FC = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useLayoutEffect(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);

		const handleResize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
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
			<REIContent width={width} height={height} images={images} />
		</StyledHomeDesktop>
	);
};

export default REI;
