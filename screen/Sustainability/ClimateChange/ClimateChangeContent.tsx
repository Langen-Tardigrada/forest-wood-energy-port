"use client";
import React from "react";
import styled from "@emotion/styled";
import Footer from "../../../components/Footer";
import FirstPartStyle from "../../../components/FirstPartStyle";
import ThirdPart from "../../../components/ThridPart";
import ForthPart from "../../../components/ForthPart";
import SectionPart from "../../../components/SectionPart";
import FooterMobile from "../../../components/FooterMobile";
import { lora } from "../../../src/app/css/fonts";

const StyledContent = styled.div`
	align-items: flex-start;
	display: flex;
	position: relative;
	width: 100%;
	flex-direction: column;
	scrollbar-width: none; /* สำหรับ Firefox */
	box-sizing: border-box;
	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ใน Chrome, Safari และ Edge */
	}
`;
interface Props {
	width: number;
	height: number;
	images: { url: string; blurDataUrl: string }[];
}
const CliamteChangeContent: React.FC<Props> = ({ width, height, images }) => {
	return (
		<StyledContent className={`${lora.variable}`}>
			<FirstPartStyle
				screenMode="light"
				textMode="dark"
				header={"Climate Change"}
				width={width}
				height={height}
				position={
					width < 600
						? "50% 50%"
						: width < 840
						? "50% 50%"
						: width < 1200
						? "50% 50%"
						: "50% 50%"
				}
				size="1"
				fontSize={128}
				objectFit="cover"
				image={images[0]}
			/>
			<SectionPart
				width={width}
				height={height}
				heading={"Understanding the Impact of Climate Change"}
				body={
					"Climate change is one of the most pressing challenges of our time, with far-reaching consequences for ecosystems, economies, and human health."
				}
			/>
			<ThirdPart
				width={width}
				height={height}
				flexflow="column"
				heading="The warming of our planet, driven primarily by the increase in greenhouse gas emissions from human activities "
				body="It is leading to more frequent and severe weather events, rising sea levels, and the loss of biodiversity. These changes threaten the very foundation of life on Earth, making it imperative for individuals, businesses, and governments to take urgent and collective action."
				mode="light"
				deg={-90}
				cropflexflow={"row"}
				image={images[1]}
				blur={width < 600 ? 10 : width < 840 ? 0 : width < 1200 ? 0 : 0}
				position={
					width < 600
						? "45% 30%"
						: width < 840
						? "50% 50%"
						: width < 1200
						? "50% 50%"
						: "50% 50%"
				}
				size={width < 600 ? "5" : width < 840 ? "1" : width < 1200 ? "1" : "1"}
				objectFit="cover"
			/>
			<SectionPart
				width={width}
				height={height}
				heading={"Trends of Climate Worsening Over the Last Decades"}
				body={
					"Over the past few decades, the evidence of climate change has become increasingly clear. Global temperatures have risen steadily, with the last decade being the warmest on record."
				}
			/>
			<ThirdPart
				width={width}
				height={height}
				flexflow="column"
				heading="Polar ice caps are melting at unprecedented rates, leading to rising sea levels that threaten coastal communities."
				body="The frequency and intensity of wildfires, heatwaves, and storms have surged, causing widespread destruction and displacement. These trends are expected to continue and worsen unless significant action is taken to reduce greenhouse gas emissions."
				mode="light"
				deg={0}
				cropflexflow={"row"}
				image={images[2]}
				blur={width < 600 ? 0 : width < 840 ? 0 : width < 1200 ? 0 : 0}
				position={
					width < 600
						? "40% 40%"
						: width < 840
						? "50% 50%"
						: width < 1200
						? "50% 40%"
						: "50% 50%"
				}
				size={
					width < 600 ? "3" : width < 840 ? "1" : width < 1200 ? "1.5" : "1"
				}
				objectFit="cover"
			/>
			<ForthPart
				width={width}
				height={height}
				image={images[3]}
				body={
					"The urgency of the situation is underscored by scientific reports that warn of tipping points—thresholds beyond which the impacts of climate change could become irreversible. Without decisive action, "
				}
				heading={
					"We risk passing these tipping points, leading to catastrophic consequences for the planet and all who inhabit it."
				}
				flexflow="column"
				cropflexflow={"-reverse"}
				deg={-1}
			/>

			<SectionPart
				width={width}
				height={height}
				heading={"How Biomass Can Help Combat Climate Change"}
				body={
					"In the fight against climate change, biomass plays a crucial role as a renewable, carbon-neutral energy source."
				}
			/>
			<ThirdPart
				width={width}
				height={height}
				flexflow="column-reverse"
				body="Unlike fossil fuels, which release carbon that has been stored for millions of years, biomass energy relies on organic materials that absorb CO2 from the atmosphere during their growth. When these materials are converted into energy,  "
				heading="The CO2 released is offset by the carbon absorbed, resulting in a net-zero impact on atmospheric CO2 levels."
				mode="light"
				deg={0}
				cropflexflow={"row"}
				image={images[4]}
				position={"50% 50%"}
				size={"1"}
				blur={0}
				objectFit="cover"
			/>
			<ForthPart
				width={width}
				height={height}
				image={images[5]}
				body={
					"By replacing fossil fuels with sustainably sourced biomass. Moreover, the use of biomass supports sustainable forest management practices, helping to maintain and even increase forest carbon stocks. This not only provides a renewable energy source but also preserves vital ecosystems and enhances biodiversity."
				}
				heading={
					"We can significantly reduce greenhouse gas emissions and slow the progression of climate change."
				}
				flexflow="column"
				cropflexflow={"-reverse"}
				deg={-1}
			/>
			{width < 840 ? <FooterMobile mode="light" /> : <Footer mode="light" />}
		</StyledContent>
	);
};

export default CliamteChangeContent;
