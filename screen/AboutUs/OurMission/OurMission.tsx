"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import styled from "@emotion/styled";
import OurMissionContent from "./OurMissionContent";
import Loading from "../../Loading/Loading";
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

const images: { url: string; blurDataUrl: string }[] = [
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-mission/webp/part1-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRsYAAABXRUJQVlA4ILoAAAAQAwCdASoKAAcAAAAAJagCdLoAfhuPor/xBpMYOmE9mIAA/v//Kp//ggf83d/+uTv/79pPn8/io9+Z3Qm33/6NKF//WdvYiXqv/y+/yd+5/fm/86LpTdrh86udpaEXU6of9rD1ul/xiCcmWz7P4Pv5/t+ouFzhr25DYDr+HPqLKrXEPgnuqRH4g3bEzIdfZtcrbv1urXZ9hr0D4jv/b2j+Cf8X6S/d4/+DefxzD3M//cgO/38G//r4YAA=",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-mission/webp/part2-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRgoBAABXRUJQVlA4IP4AAABQBQCdASoKAAoAAAAAJQBOhaIFAAfoBkuZlV/IDUQPyAunL2Cv5b/bvyLMbxBLOVSOXwAA/ubjf/tBHzl2waO/ewI3NVa39fPX3/vy/f5j16vhQf+84w5kMqOVzIqv1Xoj40WKPOLOxJ/6zVOnC8UnsZefN67R/z/z+Mv/sg//bp8LoovqQusrKp/+qt0i8Ir+3bp7MN1+cVF/3/+veOIBtApNc2SY8Su5e4VY15//oshojGrTbN9sQeYLOQAlAvf/zGfUdfPm7f/tU3F/62qZb9zf/pz/9w7y/rJf/8//YyeFl/8NXEf9P+3/4bKF7f/TLNWdrYzWn72LuhAAAA==",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-mission/webp/part3.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRqAAAABXRUJQVlA4IJQAAABwAgCdASoKAAcAAAAAJbACdLoB+AADJxmWTx2AAP7//0xjCtuwofdGMywj7/nv/PZffhHnOCtp/8XL/cJt2+Cv/0uXhD6/H+P/UTybRxfU7ye4P/vrm2JRtfR+mnRbKz8sPhahGnSf/YJP+f9ukA2rT+5jX82/4Iq89lEJj75H/0rV+XiBkiQ1e7HRmvvxTf2wAAAA",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-mission/webp/part4-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRtYAAABXRUJQVlA4IMoAAAAQBACdASoKAAYAAAAAJZACdDBHW6AlgDRALAT/kP48cIAenma6gzhssAD+/sHp7/z6f8GGoL7f/Y851I6lGLOFDdnH/1uz+F+zv/KS+2W73s0cDa7+975bGb8GpTeGpzdXI//cWd1Vx8ZbRM4VNhCn6Yxj6P5S3/O6OZR+kX1nXwAdE5/Xq/v/ymdXX/Lg0f8d8GPy+vX/+9MMXP3X/0/4uF+kAfjf//91Ie/6b//3/w0vv//g3/khioTHLuDbYd4d/BxVPTmEqQAA",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-mission/webp/part5-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRtwAAABXRUJQVlA4INAAAACQBQCdASoKAAcAAAAAJQBOl0A/AD8AEEVqRAywCmAOMA/gH43fIB/Iv8BwAH6ZmCphu1n4gAD+//8Ybj6EPDX/f+ZWUg0dKFfH8s//egn/+jz2oj/MPwFQKbuPP6qL/35z/vjRPAKHMKfWwdH/2mP/rL3727XTE3Nmh3/200/qOfKtebuUawo7tfsjQPgh8c/9ziXQksrp3Ms8wR7nz//X4URz4b/WYajWPua4/0ceuKRB/4N/3Jf/tQHJz2P0vPzXXnp8e99/ubwBHWv/8tgA",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-mission/webp/part6.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRo4AAABXRUJQVlA4IIIAAABQAwCdASoKAAQAAAAAJbACdLoA1AD+Ae3/dgA8FU3aG+QQsAD+/czcSO6LBhytosL82/u0a30z+RHh8qMqt52n4JU/3YKfP/XcTlUnk+v/3Eyv+uZ9Js7dxf/upr/+uZ8L93F//eZAKl/76jav90/JCqzeH3/VN0Wb/+hvcnPpwAAA",
	},
];

const OurMission: React.FC = () => {
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
			<OurMissionContent width={width} height={height} images={images} />
		</StyledHomeDesktop>
	);
};

export default OurMission;
