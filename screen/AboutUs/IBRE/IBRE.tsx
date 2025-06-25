"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import TopBar from "../../../components/TopBar";
import styled from "@emotion/styled";
import IBREContent from "./IBREContent";
import Loading from "../../Loading/Loading";
import TopBarMobile from "../../../components/TopBarMobile";
import { IMAGE } from "../../../types/image";
import { lora } from "../../../src/app/css/fonts";

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

const images: IMAGE[] = [
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/ibre/webp/part1.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRtYAAABXRUJQVlA4IMoAAADwAgCdASoKAAYAAAAAJbACdAbzNsDP99/Icwe4U3MmIAD+/Hb/+ps/7Mb/Mht+6/T9IOL0yA/1/+Uv1z/59I0u5PqrPc/3ZL0k2f/NP6usVWiNvzTQf/lIfMazXf9UlfVybf9dtClQ//3qnVfZW2/4a3GwZ7b6ln8//+eD1/jZI/CwhOfwpFcEQeHbvm7YrfPeZBr+23j9cz4i2bPoi/H+cK//wTv/E4+/uv/4wH8x7n3//DeX/ILIv8G///vZH/WiL7//Q3/9IAAA",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/ibre/webp/part2-1920.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRr4AAABXRUJQVlA4ILIAAABwAgCdASoKAAcAAAAAJbACdEyATZeDYC6jMqcYAP7/4k/+r7p/A/4LSwz+ApTs68fegMdcJT/zvKI7iQi62RJVNDbBzP/40L7X/7pn/2jf2j9O/g0EzhtSu4Z5ceIxLxBhnSfD/GsN7SX/9yUG/7MbrO0f/NEXFAwBLX//yct/9zxvH/zoUn/2MC/P/+pv/hP/+VJf9Hn6meO/Ew/9X16R0AP/zUf/X4+zVzP5NayjAAAA",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/ibre/webp/part3.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRsAAAABXRUJQVlA4ILQAAACQAwCdASoKAAYAAAAAJYgCdHIA+0Cv/7BV9EAi5X8TTczoL6eQAP7//h0eR/9lP9Nn/eB/bZapMLS7vTxo9/86d//OJ/9QgpP/a+szN4973PypD48dv/7ol3m9q2P0O7J0u/iQm8T+O3v/SHzZaIKeHqR7/9yw2P6AJ+zeexfrxyeuP/vKFh+lzxO1//FrQ7szsZ5hd20s3/8bj3b3v/v/8hUfO8MHUjfoF4yBUf/9wJxDAAA=",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/ibre/webp/part4.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRuoAAABXRUJQVlA4IN4AAACQBQCdASoKAAYAAAAAJZACdLoB+AB+mfozOlAngD8ZoYG/jv9P/F/9/+UA/UA927zF/APOAAD+9n/yB3/I08Y6b/ND/59IiwlNYke83Nb/9WG3Qnhf8H+dilFXTAR/+Jr8l/+19sOfq9/YjPG//oc/yaqAOhxff6WH/558LnyL+hqU3/4X7ov2oz1T93A/7cGzGf/7gBQP/aw8x/R/jx4iyVqa6Ov/3KfzX/8jat/uP/iJnbNnXn+DeeqMMao/aw5r9/Bv/hP/+17gt4Pyg3KwnZqdXn1euJf5N+/oAAA=",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/ibre/webp/part5.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRrQAAABXRUJQVlA4IKgAAACwAwCdASoKAAYAAAAAJYgCdLoB+AAeYBJHeRn/i/x0NzlEO2g3QAD8/hf+//85//5V//39D6WHp56inh+P/uH/+Ljg/2pi/5ckdH6gdyE41Q0xQJTQH1LX+4huF/9s/KVb/cAStQ7wEV04VBX+dWlym/fPmvNKv6LZNn/3oW6H9fezDsKH5IM+vKidy4//LjMgHDWmTMsXvejr8RlT+Tf8L9Bs2/HgAAA=",
	},
	{
		url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/ibre/webp/part6.webp",
		blurDataUrl:
			"data:image/webp;base64,UklGRrgAAABXRUJQVlA4IKwAAADQAwCdASoKAAYAAAAAJYwCdH8GcAfwCnAP1A9iUi0T8kjc2Dduo8AA/v/+Ra/+es3/+JkMF/2hbZQTom89USAP9fanzL/8ed//X2fU+OHP/0OLZUP8G+bOeP/7WROrbbkixHf/rg+pLJl/6L9/c8X8AbaqVEY7ZTwUl4+6nPSLYrrx+W3/5b/07f/AThJ1q0+sFU8//SQ6FeM29+L7/5txFWv/CDdp3z4wAAAA",
	},
];
const IBRE: React.FC = () => {
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
		<StyledContainer width={width} className={`${lora.variable}`}>
			{width < 840 ? <TopBarMobile height={height} /> : <TopBar />}
			<IBREContent width={width} height={height} images={images} />
		</StyledContainer>
	);
};

export default IBRE;
