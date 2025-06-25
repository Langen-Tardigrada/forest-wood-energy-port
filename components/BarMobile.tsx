"use client";
import styled from "@emotion/styled";
import React from "react";
import Link from "next/link";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { ButtonIcon } from "./ButtonIcon";

const BarContainer = styled.div`
	display: flex;
	width: 100%;
	background-color: ${({ theme }) => theme.sys.light.surface};
	flex-flow: row wrap;
	flex-direction: row;
	justify-content: space-between;
	font-family: "Jost", Helvetica;
	align-items: center;
	align-content: center;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	gap: 2.5rem;

	.button-instance {
		color: ${({ theme }) => theme.sys.light["on-surface-variant"]} !important;
		touch-action: manipulation !important;
		pointer-events: auto;
		-webkit-tap-highlight-color: transparent;
	}
`;
const LeftContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 5rem;
`;
const FWEContainer = styled.button`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 0.75rem;
	background-color: transparent;
	border: none;
	cursor: pointer;
	&:enabled {
		color: ${({ theme }) => theme.sys.light["on-surface"]};
	}
	&:hover {
		color: ${({ theme }) => theme.sys.light.outline};
	}
	&:active {
		color: ${({ theme }) => theme.sys.light.outline};
	}
	&:disabled {
		color: ${({ theme }) => theme.sys.light["outline-variant"]};
		cursor: default;
	}
`;
const FWELabel = styled.div`
	font-size: 16px;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0.15px;
`;
interface BarProps {
	onClick: () => void;
	activeSection: boolean;
}
const BarMoblie: React.FC<BarProps> = ({ onClick, activeSection }) => {
	return (
		<BarContainer>
			<LeftContainer>
				<Link href={"/"} style={{ textDecoration: "none" }}>
					<FWEContainer>
						<svg
							width="46.72"
							height="24"
							viewBox="0 0 47 24"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid meet"
						>
							<image href="/logo.svg" width="46.72" height="24" />
						</svg>

						<FWELabel> Forest Wood Energy </FWELabel>
					</FWEContainer>
				</Link>
			</LeftContainer>
			<ButtonIcon
				style={"text"}
				stateProp={"enabled"}
				className={"button-instance"}
				IconName={activeSection ? faClose : faBars}
				size={"xl"}
				onClick={onClick}
				ariaLabel={activeSection ? "Collapse Menu" : "Expand Menu"}
			/>
		</BarContainer>
	);
};

export default BarMoblie;
