"use client";
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import { typography } from "../src/app/css/typography";

const TextLabel = styled.button<{ mode: string }>`
	background-color: transparent;
	border: none;
	padding: 0;
	font-family: ${({ theme }) => theme.typography.body.large.fontFamily};
	font-size: 18px;
	font-style: normal;
	font-weight: ${({ theme }) => theme.typography.body.large.fontWeight};
	letter-spacing: 0.5px;
	line-height: 24px;
	text-align: left;
	width: fit-content;
	cursor: pointer;

	&:enabled {
		color: ${({ theme, mode }) =>
			mode == "dark"
				? theme.sys.dark["on-surface"]
				: theme.sys.light["on-surface"]};
	}
	&:hover {
		color: ${({ theme, mode }) =>
			mode == "dark" ? theme.sys.dark.outline : theme.sys.dark.outline};
	}
	&:active {
		color: ${({ theme, mode }) =>
			mode == "dark" ? theme.sys.dark.outline : theme.sys.dark.outline};
	}
	&:disabled {
		color: ${({ theme, mode }) =>
			mode == "dark"
				? theme.sys.dark["outline-variant"]
				: theme.sys.light["outline-variant"]};
		cursor: default;
	}
`;
const TitleLabel = styled.div<{ mode: string }>`
	${typography.label.large}
	color: ${({ theme, mode }) =>
		mode == "dark" ? theme.sys.dark.outline : theme.sys.dark.outline};
`;
const SubListContainer = styled.div`
	display: flex;
	flex-flow: column;
	flex-direction: column;
	justify-content: flex-start;
	gap: 0.875rem;
	align-items: stretch;
	align-content: flex-start;
	width: 100%;
`;
const ListContainer = styled.div`
	display: flex;
	flex-flow: column;
	flex-direction: column;
	justify-content: flex-start;
	gap: 1.5rem;
	align-items: stretch;
	align-content: flex-start;
	width: 100%;
`;
const FooterContainer = styled.div<{ mode: string }>`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	align-content: stretch;
	background-color: ${({ theme, mode }) =>
		mode == "light"
			? theme.sys.light["surface-bright"]
			: mode == "grey"
			? theme.sys.light["surface-container-high"]
			: theme.sys.dark.surface};
	padding: 2.5rem;
	gap: 2.5rem;
	box-sizing: border-box;

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 40px 24px;
	}
`;
const GroupListContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	gap: 0.75rem; //least gap
	align-items: stretch;
	align-content: stretch;
`;
const NameCooperation = styled.div<{ mode: string }>`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	text-align: right;
	${typography.body.small}
	color: ${({ theme, mode }) =>
		mode == "dark"
			? theme.sys.dark["on-surface"]
			: theme.sys.light["on-surface"]};
`;
const details = [
	{
		title: "About Us",
		subDetail: [
			{
				subTitle: "Our Mission",
				path: "/about_us/our_mission",
			},
			{
				subTitle: "The Importance of Biomass and Renewable Energy",
				path: "/about_us/IBRE",
			},
			{
				subTitle: "Our Team",
				path: "/about_us/our_team",
			},
		],
	},
	{
		title: "Product",
		subDetail: [
			{
				subTitle: "All Products",
				path: "/product",
			},
			{
				subTitle: "Wood Pellet",
				path: "/product/wood_pellet",
			},
			{
				subTitle: "Palm Kernel Shells",
				path: "/product/PKS",
			},
			{
				subTitle: "Briquettes",
				path: "/product/briquettes",
			},
			{
				subTitle: "Wood Chips",
				path: "/product/wood_chips",
			},
			{
				subTitle: "Empty Fruit Bunches",
				path: "/product/EFB",
			},
		],
	},
	{
		title: "Sustainability",
		subDetail: [
			{
				subTitle: "Climate Change",
				path: "/sustainability/climate_change",
			},
			{
				subTitle: "Reducing Environment Impact",
				path: "/sustainability/reduce_environment_impact",
			},
			{
				subTitle: "ESG",
				path: "/sustainability/ESG_commitment",
			},
		],
	},
	{
		title: "Media",
		subDetail: [
			{
				subTitle: "Gallery",
				path: "/media/gallery",
			},
			{
				subTitle: "News",
				path: "/media/news",
			},
		],
	},
	{
		title: "Contact Us",
		subDetail: [
			{
				subTitle: "Network",
				path: "/contact_us",
			},
		],
	},
];

interface FooterProps {
	mode: string;
}

const Footer: React.FC<FooterProps> = ({ mode }) => {
	const disabled_list = [
		"Our Mission",
		"The Importance of Biomass and Renewable Energy",
		"Our Team",
		"All Products",
		"Wood Pellet",
		"Palm Kernel Shells",
		"Briquettes",
		"Wood Chips",
		"Empty Fruit Bunches",
		"Climate Change",
		"Reducing Environment Impact",
		"ESG",
	];
	return (
		<FooterContainer mode={mode}>
			<GroupListContainer>
				{details.map((item, i) => (
					<ListContainer key={i}>
						<TitleLabel mode={mode}> {item.title} </TitleLabel>
						<SubListContainer>
							{item.subDetail.map((sub, j) => (
								<Link
									href={sub.path}
									style={{ textDecoration: "none" }}
									key={j}
								>
									<TextLabel
										mode={mode}
										disabled={disabled_list.includes(sub.subTitle)}
									>
										{" "}
										{sub.subTitle}
									</TextLabel>
								</Link>
							))}
						</SubListContainer>
					</ListContainer>
				))}
			</GroupListContainer>
			<NameCooperation mode={mode}>@FOREST WOOD ENERGY 2024</NameCooperation>
		</FooterContainer>
	);
};

export default Footer;
