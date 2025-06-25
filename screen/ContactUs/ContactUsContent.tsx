"use client";
import React from "react";
import styled from "@emotion/styled";
import Footer from "../../components/Footer";
import FooterMobile from "../../components/FooterMobile";
import NetWorkPart from "./NetworkPart";
import ContactPart from "./ContactPart";

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
}

const ContactUsContent: React.FC<Props> = ({ width, height }) => {
	return (
		<StyledContent>
			<NetWorkPart height={height} width={width} url={""} />
			<ContactPart height={height} width={width} url="" />
			{width < 840 ? <FooterMobile mode="light" /> : <Footer mode="light" />}
		</StyledContent>
	);
};

export default ContactUsContent;
