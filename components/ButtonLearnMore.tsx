"use client";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "../src/app/css/typography";

const StyledButtonLearnMore = styled.button`
	all: unset;
	align-items: center;
	border-radius: 100px;
	box-sizing: border-box;
	display: inline-flex;
	flex-direction: column;
	gap: 8px;
	justify-content: center;
	overflow: hidden;
	position: relative;

	& .state-layer {
		align-items: center;
		align-self: stretch;
		display: flex;
		flex: 0 0 auto;
		gap: 8px;
		justify-content: center;
		position: relative;
		width: 100%;
	}

	& .label-text {
		color: ${({ theme }) => theme.sys.light["on-surface"]};
		position: relative;
		text-align: center;
		white-space: nowrap;
		width: fit-content;
	}

	&:enabled {
		font-family: "Jost", Helvetica;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.1px;
		line-height: 20px;
		text-decoration: underline;
		text-decoration-color: ${({ theme }) => theme.sys.light["on-surface"]};
	}

	&:hover {
		${typography.label.large}
		text-decoration: none;
		cursor: pointer;
	}

	&:active {
		${typography.label.large}
		text-decoration: none;
	}

	&:disabled {
		${typography.label.large}
		color: ${({ theme }) => theme.sys.light["on-surface-variant"]};
	}
`;

interface Props {
	stateProp: "disabled" | "enabled";
	className: any;
	link: string;
	ariaLabel?: string;
}

export const ButtonLearnMore: React.FC<Props> = ({
	stateProp,
	className,
	link,
	ariaLabel,
}) => {
	return (
		<Link
			href={link}
			style={{
				textDecoration: "none",
				pointerEvents: stateProp === "disabled" ? "none" : "auto",
			}}
		>
			<StyledButtonLearnMore
				className={className}
				disabled={stateProp == "disabled" ? true : false}
				aria-label={ariaLabel}
			>
				<div className="state-layer">
					<div className={`label-text`}>Learn more</div>
				</div>
			</StyledButtonLearnMore>
		</Link>
	);
};

export default ButtonLearnMore;
