"use client";
import React from "react";
import styled from "@emotion/styled";

import Footer from "../../../components/Footer";
import FirstPart from "../../../components/FirstPartStyle";
import MemberPart from "./MemberPart";
import { Member } from "../../../public/information/about/ourteam";
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
	member: Array<Member>;
}
const OurTeamContent: React.FC<Props> = ({ width, height, member }) => {
	return (
		<StyledContent>
			<FirstPart
				width={width}
				height={height}
				header={"Our Team"}
				screenMode={"light"}
				textMode="light"
				image={{
					url: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/about-us/our-team/webp/part1-1920.webp",
					blurDataUrl:
						"data:image/webp;base64,UklGRnIAAABXRUJQVlA4IGYAAAAwAgCdASoKAAcAAAAAJZQCdLoAAv46LUVEmAD+//+EZkYfNh+95Hgn4mBf/Xwpex2W0vsVRxeNJfh/8r9aL8IUX5jp8AODxrytsAhu+eaBPv9RVDckkVk9/5WU4ktYppyB+uxwAAA=",
				}}
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
			<MemberPart width={width} height={height} member={member} />
			{width < 840 ? <FooterMobile mode="light" /> : <Footer mode="light" />}
		</StyledContent>
	);
};

export default OurTeamContent;
