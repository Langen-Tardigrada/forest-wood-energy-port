"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import { ButtonIcon } from "./ButtonIcon";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { typography } from "../src/app/css/typography";

const ExtendTopBarContainer = styled.div<{ $hide: boolean }>`
	display: flex;
	width: 100%;
	flex-direction: row;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	padding: ${({ $hide }) => ($hide ? 0 : 0)} 0;
	height: ${({ $hide }) => ($hide ? "auto" : 0)};
	transition: height 0.5s ease-in-out, padding 0.5s ease-in-out;
	box-sizing: border-box;
`;
const Container = styled.div`
	display: flex;
	flex-flow: column;
	flex-direction: column;
	justify-content: flex-start;
	gap: 0.25rem;
	align-items: stretch;
	align-content: center;
	width: fit-content;
	padding: 12px 12px;
	color: ${({ theme }) => theme.sys.light.outline};
	width: 100%;

	.button-instance {
		color: ${({ theme }) => theme.sys.light.outline} !important;
		-webkit-tap-highlight-color: transparent;
		padding: 0 !important;
		width: 24px;
		height: 24px;
	}
`;
const ListContainer = styled.div`
	display: flex;
	flex-flow: column;
	flex-direction: column;
	justify-content: flex-start;
	gap: 0.75rem;
	align-items: stretch;
	align-content: center;
	width: fit-content;
	padding: 12px;
`;
const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex: 1;
	justify-content: space-between;
	align-items: center;
	gap: 0.25rem;
	width: 100%;
	border-bottom: 1px solid ${({ theme }) => theme.sys.light.outline};
	padding: 12px 0px;
`;
const Header = styled.div`
	text-align: start;
	padding: 0;
	${typography.title.large}
`;
const TextLabel = styled.button`
	background-color: transparent;
	border: none;
	text-align: start;
	padding: 0;
	${typography.body.large}
	font-size: 18px;

	&:enabled {
		color: ${({ theme }) => theme.sys.light.outline};
	}
	&:active {
		color: ${({ theme }) => theme.sys.light["on-surface"]};
	}
	&:disabled {
		color: ${({ theme }) => theme.sys.light["outline-variant"]};
	}
`;

const about_us: Array<{ title: string; link: string }> = [
	{ title: "Our Mission", link: "/about_us/our_mission" },
	{
		title: "The Importance of Biomass and Renewable Energy",
		link: "/about_us/IBRE",
	},
	{ title: "Our Team", link: "/about_us/our_team" },
];
const product: Array<{ title: string; link: string }> = [
	{ title: "All Products", link: "/product" },
	{ title: "Wood Pellet", link: "/product/wood_pellet" },
	{ title: "Palm Kernel Shells", link: "/product/PKS" },
	{ title: "Briquettes", link: "/product/briquettes" },
	{ title: "Wood Chips", link: "/product/wood_chips" },
	{ title: "Empty Fruit Bunches", link: "/product/EFB" },
];
const sustainability: Array<{ title: string; link: string }> = [
	{ title: "Climate Change", link: "/sustainability/climate_change" },
	{
		title: "Reducing Environment Impact",
		link: "/sustainability/reduce_environment_impact",
	},
	{ title: "ESG Commitment", link: "/sustainability/ESG_commitment" },
];
const contact_us: Array<{ title: string; link: string }> = [
	{ title: "Network", link: "/contact_us" },
];
const media: Array<{ title: string; link: string }> = [
	{ title: "Gallery", link: "/media/gallery" },
	{ title: "News", link: "/media/news" },
];

interface SubjectProps {
	subject: string;
	state: string;
	onClick: any;
	list: Array<{ title: string; link: string }>;
}

const SubjectContent: React.FC<SubjectProps> = ({
	subject,
	state,
	onClick,
	list,
}) => {
	return (
		<>
			<HeaderContainer onClick={onClick}>
				<Header> {subject} </Header>
				<ButtonIcon
					style={"text"}
					stateProp={"enabled"}
					className={"button-instance"}
					IconName={state === subject ? faMinus : faPlus}
					size={"sm"}
					ariaLabel={state === subject ? "Collapse Menu" : "Expand Menu"}
				/>
			</HeaderContainer>
			{state === subject ? (
				<ListContainer>
					{list.map((item) => (
						<Link
							href={item.link}
							key={item.title}
							style={{ textDecoration: "none" }}
						>
							<TextLabel
								disabled={
									subject === "About Us" ||
									subject === "Product" ||
									subject === "Sustainability"
								}
							>
								{item.title}
							</TextLabel>
						</Link>
					))}
				</ListContainer>
			) : (
				<></>
			)}
		</>
	);
};

interface ExtendTopBarProps {
	activeSection: boolean;
}

const ExtendTopBarMobile: React.FC<ExtendTopBarProps> = ({ activeSection }) => {
	const [state, setState] = useState("Contact Us");

	const handleClick = (subject: string) => {
		if (state === subject) {
			setState("");
		} else {
			setState(subject);
		}
	};

	useEffect(() => {
		if (activeSection) setState("Contact Us");
	}, [activeSection]);

	return (
		<ExtendTopBarContainer $hide={activeSection}>
			{activeSection ? (
				<Container>
					<SubjectContent
						subject={"About Us"}
						state={state}
						onClick={() => {
							handleClick("About Us");
						}}
						list={about_us}
					/>
					<SubjectContent
						subject={"Product"}
						state={state}
						onClick={() => {
							handleClick("Product");
						}}
						list={product}
					/>
					<SubjectContent
						subject={"Sustainability"}
						state={state}
						onClick={() => {
							handleClick("Sustainability");
						}}
						list={sustainability}
					/>
					<SubjectContent
						subject={"Media"}
						state={state}
						onClick={() => {
							handleClick("Media");
						}}
						list={media}
					/>
					<SubjectContent
						subject={"Contact Us"}
						state={state}
						onClick={() => {
							handleClick("Contact Us");
						}}
						list={contact_us}
					/>
				</Container>
			) : (
				<></>
			)}
		</ExtendTopBarContainer>
	);
};

export default ExtendTopBarMobile;
