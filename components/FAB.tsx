"use client";
import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faPlus } from "@fortawesome/free-solid-svg-icons";
import { typography } from "@/app/css/typography";
import Link from "next/link";

type Variant = "primary" | "tertiary" | "surface" | "secondary";
type Size = "extend" | "fab" | "small" | "large";

interface ButtonProps {
	$variant: string;
	$size: Size;
}

interface StateLayerProps {
	$variant: string;
	$size: Size;
}
interface Props {
	style?: Variant;
	stateProp?: "enabled" | "disabled";
	labelText?: string;
	className?: any;
	IconName?: IconDefinition;
	onClick?: () => void;
	size: "extend" | "fab" | "small" | "large";
	feature?: "link" | "other";
	link?: string;
	ariaLabel: string;
}

const StyledButton = styled.button<ButtonProps>`
	all: unset;
	align-items: center;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	height: ${({ $size }) =>
		$size === "small"
			? "40px"
			: $size === "fab"
			? "56px"
			: $size === "large"
			? "96px "
			: "56"};
	width: ${({ $size }) =>
		$size === "small"
			? "40px"
			: $size === "fab"
			? "56px"
			: $size === "large"
			? "96px "
			: "auto"};
	justify-content: center;
	overflow: hidden;
	position: relative;
	background-color: ${({ theme, $variant }) =>
		$variant === "primary"
			? theme.sys.light["primary-container"]
			: $variant === "secondary"
			? theme.sys.light["secondary-container"]
			: $variant === "tertiary"
			? theme.sys.light["tertiary-container"]
			: theme.sys.light["surface-container-high"]};
	box-shadow: ${({ theme }) => theme.sys.light.elevation[3]};
	border-radius: ${({ $size }) =>
		$size === "small"
			? 12
			: $size === "fab"
			? 16
			: $size === "large"
			? 28
			: 16}px;
	color: ${({ theme, $variant }) =>
		$variant === "primary"
			? theme.sys.light["on-primary-container"]
			: $variant === "secondary"
			? theme.sys.light["on-secondary-container"]
			: $variant === "tertiary"
			? theme.sys.light["on-tertiary-container"]
			: theme.sys.light.primary};

	&:hover {
		box-shadow: ${({ theme }) => theme.sys.light.elevation[4]};
	}

	&:focus-visible {
		box-shadow: ${({ theme }) => theme.sys.light.elevation[3]};
	}

	&:active {
		box-shadow: ${({ theme }) => theme.sys.light.elevation[3]};
	}
`;

const StateLayer = styled.div<StateLayerProps>`
	display: flex;
	align-items: center;
	align-self: center;
	display: flex;
	flex: 1;
	flex-grow: 1;
	gap: ${({ $size }) => ($size === "extend" ? 12 : 0)}px;
	position: relative;
	justify-content: center;
	font-size: ${({ $size }) =>
		$size === "small"
			? "24px"
			: $size === "fab"
			? "24px"
			: $size === "large"
			? "36px"
			: "24"};
	width: inherit;
	height: inherit;
	padding: 16px;

	${({ theme, $variant }) => {
		const layer = theme.sys.light["state-layers"];
		const color =
			$variant === "primary"
				? layer["on-primary-container"]
				: $variant === "secondary"
				? layer["on-secondary-container"]
				: $variant === "tertiary"
				? layer["on-tertiary-container"]
				: layer.primary;

		return `
			${`
				&:hover {
					background-color: ${color["08"]};
				}
				&:active 
				&:focus-visible {
					background-color: ${color["12"]};
				}
			`}
		`;
	}}
`;

const LabelText = styled.div`
	display: flex;
	${typography.label.large}
`;

export const FAB: React.FC<Props> = ({
	style = "surface",
	stateProp = "enabled",
	className = "",
	IconName = faPlus,
	onClick,
	size = "fab",
	labelText = "",
	feature = "other",
	link = "",
	ariaLabel = "button",
}) => {
	style = style || "filled";
	const state = stateProp;
	return (
		<>
			{feature === "link" ? (
				<Link
					href={link}
					style={{
						textDecoration: "none",
						pointerEvents: state === "disabled" ? "none" : "auto",
						width: "auto",
						height: "auto",
					}}
				>
					<StyledButton
						className={className}
						disabled={state === "disabled" ? true : false}
						onClick={onClick}
						$variant={style}
						$size={size}
						aria-label={ariaLabel}
					>
						<StateLayer $variant={style} className={className} $size={size}>
							<FontAwesomeIcon icon={IconName} />
							{size === "extend" ? <LabelText> {labelText} </LabelText> : <></>}
						</StateLayer>
					</StyledButton>
				</Link>
			) : (
				<StyledButton
					className={className}
					disabled={state === "disabled" ? true : false}
					onClick={onClick}
					$variant={style}
					$size={size}
				>
					<StateLayer $variant={style} className={className} $size={size}>
						<FontAwesomeIcon icon={IconName} />
						{size === "extend" ? <LabelText> {labelText} </LabelText> : <></>}
					</StateLayer>
				</StyledButton>
			)}
		</>
	);
};
