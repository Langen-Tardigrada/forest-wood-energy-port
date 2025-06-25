"use client";
import React from "react";
import styled from "@emotion/styled";
import Footer from "../../../components/Footer";
import FirstPartStyle from "../../../components/FirstPartStyle";
import ThirdPart from "./ThirdPart";
import ForthPart from "./ForthPart";
import FifthPart from "./FifthPart";
import SixthPart from "./SixthPart";
import FooterMobile from "../../../components/FooterMobile";
import { IMAGE } from "../../../types/image";

const StyledContent = styled.div`
	align-items: flex-start;
	display: flex;
	position: relative;
	width: 100%;
	flex-direction: column;
	scrollbar-width: none; /* สำหรับ Firefox */

	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ใน Chrome, Safari และ Edge */
	}
`;
interface Props {
	width: number;
	height: number;
	images: IMAGE[];
}
const IBREContent: React.FC<Props> = ({ width, height, images }) => {
	return (
		<StyledContent>
			<FirstPartStyle
				screenMode="dark"
				textMode="dark"
				header={"The Importance of Biomass and Renewable Energy"}
				image={images[0]}
				width={width}
				height={height}
				fontSize={96}
				position={
					width < 600
						? "0% 50%"
						: width < 840
						? "0% 0%"
						: width < 1200
						? "0% 100%"
						: "50% 50%"
				}
				size="1"
				objectFit="cover"
			/>
			<ThirdPart
				width={width}
				height={height}
				header={
					"Biomass has emerged as a pivotal component of the renewable energy revolution,"
				}
				subheading={
					"playing a crucial role in the global effort to combat climate change and transition to sustainable energy sources."
				}
				body={
					"Over the past few decades, biomass has gained recognition as a reliable and carbon-neutral alternative to fossil fuels, particularly in power generation and heating. Derived from organic materials such as wood chips, pellets, and agricultural residues, biomass not only provides a renewable energy source but also helps in managing waste and promoting sustainable land use."
				}
				image={images[2]}
				mode="dark"
			/>
			<ForthPart width={width} height={height} image={images[3]} />
			<SixthPart width={width} height={height} image={images[4]} />
			<FifthPart width={width} height={height} image={images[5]} />
			{width < 840 ? <FooterMobile mode="light" /> : <Footer mode="light" />}
		</StyledContent>
	);
};

export default IBREContent;
