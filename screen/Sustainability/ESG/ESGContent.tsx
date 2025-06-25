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
const ESGContent: React.FC<Props> = ({ width, height, images }) => {
	return (
		<StyledContent className={`${lora.variable}`}>
			<FirstPartStyle
				screenMode="dark"
				textMode="dark"
				header={"ESG Commitment"}
				image={images[0]}
				width={width}
				height={height}
				position={
					width < 600
						? "50% 70%"
						: width < 840
						? "50% 50%"
						: width < 1200
						? "50% 50%"
						: "0% 50%"
				}
				size={
					width < 600
						? "9"
						: width < 840
						? "cover"
						: width < 1200
						? "cover"
						: "1.6"
				}
				fontSize={128}
				objectFit={"cover"}
			/>
			<SectionPart
				width={width}
				height={height}
				heading={"Environmental Stewardship"}
				body={"ESG: Environmental, Social, and Governance"}
			/>
			<ThirdPart
				width={width}
				height={height}
				flexflow="column"
				cropflexflow="row-reverse"
				body=" That foster innovation in timber trading and biomass production while safeguarding the interests of both our people and the environment. Our commitment to environmental stewardship ensures that our operations contribute positively to the preservation of natural resources and the well-being of future generations."
				heading="We are dedicated to upholding sustainable business practices"
				mode="light"
				deg={90}
				image={images[1]}
				blur={width < 600 ? 20 : width < 840 ? 0 : width < 1200 ? 0 : 8}
				position={
					width < 600
						? "15% 50%"
						: width < 840
						? "50% 50%"
						: width < 1200
						? "50% 50%"
						: "100% 30%"
				}
				size={
					width < 600 ? "1" : width < 840 ? "1" : width < 1200 ? "1" : "1.4"
				}
				objectFit="cover"
			/>
			<SectionPart
				width={width}
				height={height}
				heading={"Social Responsibilities"}
				body={
					"We are firmly committed to maintaining the highest standards of safety for our employees and the surrounding communities."
				}
			/>
			<ForthPart
				width={width}
				height={height}
				image={images[2]}
				body={
					"Our manufacturing partners in Thailand play a crucial role in this commitment by offering educational support and after-school care programs for the children of their employees, "
				}
				heading={
					"Empowering the next generation through education and community engagement."
				}
				flexflow="column-reverse"
				cropflexflow="-reverse"
				deg={-1}
			/>
			<SectionPart
				width={width}
				height={height}
				heading={"Governance"}
				body={
					"Our company is fully registered with the relevant local authorities and participates in the Sustainable Trade Certification program. "
				}
			/>
			<SixthPart
				width={width}
				height={(height * 2) / 3}
				image={images[3]}
				body="We are committed to complying with all necessary legal requirements and continuously strive to uphold the highest standards of safety and accountability "
				heading="To ensure the well-being of our communities and the environment."
			/>
			{width < 840 ? <FooterMobile mode="light" /> : <Footer mode="light" />}
		</StyledContent>
	);
};

export default ESGContent;
