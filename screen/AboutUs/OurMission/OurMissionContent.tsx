"use client";
import React from "react";
import styled from "@emotion/styled";
import Footer from "../../../components/Footer";
import FirstPartStyle from "../../../components/FirstPartStyle";
import SecondAboutPartStyle from "../../../components/SecondAboutPartStyle";
import ThirdPart from "./ThirdPart";
import ForthPart from "./ForthPart";
import FifthPart from "./FifthPart";
import SixthPart from "./SixthPart";
import FooterMobile from "../../../components/FooterMobile";

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
	images: { url: string; blurDataUrl: string }[];
}
const OurMissionContent: React.FC<Props> = ({ width, height, images }) => {
	return (
		<StyledContent>
			<FirstPartStyle
				screenMode="dark"
				textMode="dark"
				header={"Our Mission"}
				image={images[0]}
				width={width}
				height={height}
				fontSize={128}
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
				objectFit="cover"
			/>
			<SecondAboutPartStyle
				mode="dark"
				width={width}
				height={height}
				header={"Combating climate change is at the heart of our job. "}
				image={images[1]}
			/>
			<ThirdPart
				width={width}
				height={height}
				header={"“The use of sustainable biomass.”"}
				body={
					"We have been instrumental in helping global energy producers significantly lower their net carbon emissions through"
				}
				image={images[2]}
				mode="light"
			/>
			<ForthPart width={width} height={height} image={images[3]} />
			<FifthPart width={width} height={height} image={images[4]} />
			<SixthPart width={width} height={height} image={images[5]} />
			{width < 840 ? <FooterMobile mode="light" /> : <Footer mode="light" />}
		</StyledContent>
	);
};

export default OurMissionContent;
