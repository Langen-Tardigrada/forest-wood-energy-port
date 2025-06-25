"use client";
import styled from "@emotion/styled";
import { usePositionContext } from "./ContextPosition";
import Link from "next/link";
import { typography } from "../src/app/css/typography";

const ExtendTopBarContainer = styled.div<{ $hide: string | null }>`
	display: flex;
	width: 100%;
	flex-direction: row;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	padding: ${({ $hide }) => ($hide == null ? 0 : "1.5rem")} 0;
	height: ${({ $hide }) => ($hide == null ? 0 : "auto")};
	transition: height 0.5s ease-in-out, padding 0.5s ease-in-out;
`;
const ListContainer = styled.div<{ $left: number | undefined }>`
	display: flex;
	flex-flow: column;
	flex-direction: column;
	justify-content: flex-start;
	gap: 0.25rem;
	align-items: stretch;
	align-content: center;
	width: fit-content;
	margin-left: ${({ $left }) =>
		$left !== undefined ? `${($left - 40) / 16}rem` : $left};
`;
const TextLabel = styled.button`
	background-color: transparent;
	border: none;
	text-align: start;
	padding: 0;
	${typography.body.large}
	cursor: pointer;

	&:enabled {
		color: ${({ theme }) => theme.sys.light.outline};
	}
	&:hover {
		color: ${({ theme }) => theme.sys.light["on-surface"]};
	}
	&:active {
		color: ${({ theme }) => theme.sys.light["on-surface"]};
	}
	&:disabled {
		color: ${({ theme }) => theme.sys.light["outline-variant"]};
		cursor: default;
	}
`;
interface ExtendTopBarProps {
	activeSection: string | null;
}
interface Pos {
	aboutUs?: number;
	product?: number;
	sustainability?: number;
	media?: number;
}

const aboutUs: Array<{ title: string; link: string }> = [
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
const media: Array<{ title: string; link: string }> = [
	{ title: "Gallery", link: "/media/gallery" },
	{ title: "News", link: "/media/news" },
];

const ExtendTopBar: React.FC<ExtendTopBarProps> = ({ activeSection }) => {
	const { positions } = usePositionContext();

	const calPos: Pos = {
		aboutUs: positions.aboutUs?.left,
		product: positions.product?.left,
		sustainability: positions.sustainability?.left,
		media: positions.media?.left,
	};
	const titlePos =
		activeSection == "About Us"
			? calPos.aboutUs
			: activeSection == "Product"
			? calPos.product
			: activeSection == "Sustainability"
			? calPos.sustainability
			: calPos.media;
	const listsubTitle =
		activeSection == "About Us"
			? aboutUs
			: activeSection == "Product"
			? product
			: activeSection == "Sustainability"
			? sustainability
			: activeSection == "Media"
			? media
			: null;

	let content =
		listsubTitle == null ? (
			<></>
		) : (
			listsubTitle.map((item) => (
				<Link
					href={item.link}
					key={item.title}
					style={{ textDecoration: "none" }}
				>
					<TextLabel>{item.title}</TextLabel>
				</Link>
			))
		);

	return (
		<ExtendTopBarContainer $hide={activeSection}>
			<ListContainer $left={titlePos}>{content}</ListContainer>
		</ExtendTopBarContainer>
	);
};

export default ExtendTopBar;
