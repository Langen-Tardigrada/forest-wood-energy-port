"use client";
import React from "react";
import styled from "@emotion/styled";
import Footer from "../../../components/Footer";
import FirstPartStyle from "../../../components/FirstPartStyle";
import ThirdPart from "../../../components/ThridPart";
import ForthPart from "../../../components/ForthPart";
import SectionPart from "../../../components/SectionPart";
import SixthPart from "../../../components/SixthPart";
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
const REIContent: React.FC<Props> = ({ width, height, images }) => {
	return (
		<StyledContent className={`${lora.variable}`}>
			<FirstPartStyle
				screenMode="light"
				textMode="light"
				header={"Reducing environmental impact"}
				image={images[0]}
				width={width}
				height={height}
				position={
					width < 600
						? "0% 50%"
						: width < 840
						? "50% 50%"
						: width < 1200
						? "15% 55%"
						: "0% 35%"
				}
				size={
					width < 600
						? "3"
						: width < 840
						? "cover"
						: width < 1200
						? "1.3"
						: "1.5"
				}
				fontSize={128}
				objectFit="cover"
			/>
			<SectionPart
				width={width}
				height={height}
				heading={"Why Biomass Can Reduce Environmental Impact"}
				body={
					"Biomass stands out as one of the best tools in the effort to reduce environmental impact, particularly in the energy sector."
				}
			/>
			<SixthPart
				width={width}
				height={height}
				image={images[1]}
				body="Unlike fossil fuels, which release stored carbon into the atmosphere and contribute to global warming, biomass is derived from organic materials that are part of the current carbon cycle. When sustainably sourced, biomass energy is carbon-neutral, meaning the carbon dioxide (CO2) released during combustion is balanced by the CO2 absorbed by plants during their growth. "
				heading="This process minimizes the net increase of greenhouse gasses in the atmosphere, directly addressing one of the key drivers of climate change."
			/>
			<ForthPart
				width={width}
				height={height}
				image={images[2]}
				body={
					"utilizing waste materials from agriculture, forestry, and other industries that would otherwise contribute to landfill or open burning. "
				}
				heading={"Furthermore, biomass helps reduce environmental impact by"}
				flexflow="column"
				cropflexflow="-reverse"
				deg={-1}
			/>
			<ThirdPart
				width={width}
				height={height}
				flexflow="column-reverse"
				cropflexflow="row-reverse"
				heading="This dual benefit makes biomass a cornerstone of sustainable energy strategies aimed at reducing the overall environmental footprint of energy production."
				body="By converting these byproducts into energy, biomass not only reduces the need for waste disposal but also provides a renewable energy source that can replace more polluting options like coal or oil."
				mode="light"
				deg={90}
				image={images[3]}
				blur={width < 600 ? 30 : width < 840 ? 10 : width < 1200 ? 4 : 0}
				position={
					width < 600
						? "50% 50%"
						: width < 840
						? "50% 50%"
						: width < 1200
						? "100% 0%"
						: "50% 50%"
				}
				size={
					width < 600
						? "1.8"
						: width < 840
						? "cover"
						: width < 1200
						? "1.2"
						: "cover"
				}
				objectFit="cover"
			/>
			<SectionPart
				width={width}
				height={height}
				heading={
					"The Long-Term Vision of Biomass for Environmental Sustainability"
				}
				body={
					"In the long run, the adoption of biomass as a key component of the global energy mix promises substantial environmental benefits."
				}
			/>
			<ThirdPart
				width={width}
				height={height}
				flexflow="column"
				cropflexflow="row"
				heading="As technology advances, biomass energy systems are becoming more efficient, further reducing emissions and improving the sustainability of the energy supply. "
				body="The long-term vision for biomass includes its integration with other renewable energy sources to create a resilient, low-carbon energy system that can meet the growing demand for clean power."
				mode="light"
				deg={0}
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
					"As the world transitions to a low-carbon economy, the role of biomass will become increasingly important in sectors that are difficult to decarbonize, such as heavy industry and transportation. By providing a renewable alternative to fossil fuels, "
				}
				heading={
					"Biomass can help these sectors reduce their environmental impact while maintaining economic viability."
				}
				flexflow="column-reverse"
				cropflexflow="-reverse"
				deg={-1}
			/>
			<SixthPart
				width={width}
				height={height}
				image={images[6]}
				body="In the long run, a widespread shift to biomass and other renewable energy sources will lead to a significant reduction in global greenhouse gas emissions, slow the progression of climate change, and protect vital ecosystems."
				heading="The CO2 released is offset by the carbon absorbed, resulting in a net-zero impact on atmospheric CO2 levels."
			/>
			{width < 840 ? <FooterMobile mode="light" /> : <Footer mode="light" />}
		</StyledContent>
	);
};

export default REIContent;
