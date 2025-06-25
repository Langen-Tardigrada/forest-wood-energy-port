"use client";

import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faPlus } from "@fortawesome/free-solid-svg-icons";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

type Variant = "outlined" | "filled" | "tonal" | "text" | "elevated";

interface ButtonProps {
	$variant: Variant;
}

interface StateLayerProps {
	$variant: Variant;
}
interface Props {
	style?: "filled" | "tonal" | "elevated" | "text" | "outlined";
	stateProp?: "enabled" | "disabled";
	className?: any;
	IconName?: IconDefinition;
	onClick?: () => void;
	size?: SizeProp;
	width?: number;
	height?: number;
	id?: string;
	ariaLabel?: string;
}

const StyledButton = styled.button<ButtonProps>`
	all: unset;
	align-items: center;
	border-radius: 100px;
	box-sizing: border-box;
	display: inline-flex;
	flex-direction: column;
	height: 48px;
	width: 48px;
	justify-content: center;
	overflow: hidden;
	position: relative;

	${({ theme, $variant }) =>
		$variant === "outlined" &&
		`
			border: 1px solid;
			border-color: ${theme.sys.light.outline};
			background-color: transparent;
			color: ${theme.sys.light.primary};
			pointer-events: auto;

			&:hover {
				background-color: ${theme.sys.light["state-layers"].primary["08"]};
			}
			&:active {
				background-color: ${theme.sys.light["state-layers"].primary["12"]};
				border-color: ${theme.sys.light.outline};
			}
			&:focus-visible {
				background-color: ${theme.sys.light["state-layers"].primary["12"]};
				border-color: ${theme.sys.light.primary};
			}
			&:disabled {
				border-color: ${theme.sys.light["state-layers"]["on-surface"]["12"]};
				background-color: ${theme.sys.light["state-layers"]["on-surface"]["12"]};
				color: rgba(22, 29, 29, 0.38);
				pointer-events: none;
			}
		`}

	${({ theme, $variant }) =>
		$variant === "filled" &&
		`
			background-color: ${theme.sys.light.primary};
			color: ${theme.sys.light["on-primary"]};
			pointer-events: auto;

			&:hover {
				box-shadow: ${theme.sys.light.elevation[1]};
			}
			&:focus-visible {
				background-color: ${theme.sys.light.primary};
			}
			&:disabled {
				background-color: transparent;
				color: rgba(22, 29, 29, 0.38);
				pointer-events: none;
			}
		`}

	${({ theme, $variant }) =>
		$variant === "tonal" &&
		`
			background-color: ${theme.sys.light["secondary-container"]};
			color: ${theme.sys.light["on-secondary-container"]};
			pointer-events: auto;

			&:hover {
				box-shadow: ${theme.sys.light.elevation[1]};
			}
			&:disabled {
				background-color: transparent;
				color: rgba(22, 29, 29, 0.38);
				pointer-events: none;
			}
		`}

	${({ theme, $variant }) =>
		$variant === "text" &&
		`
			background-color: transparent;
			color: ${theme.sys.light.primary};
			pointer-events: auto;
			&:disabled {
				color: rgba(22, 29, 29, 0.38);
				cursor: none;
				pointer-events: none;
			}
		`}

	${({ theme, $variant }) =>
		$variant === "elevated" &&
		`
			background-color: ${theme.sys.light["surface-container-low"]};
			color: ${theme.sys.light.primary};
			box-shadow: ${theme.sys.light.elevation[1]};
			pointer-events: auto;

			&:hover {
				box-shadow: ${theme.sys.light.elevation[2]};
			}
			&:disabled {
				background-color: transparent;
				color: rgba(22, 29, 29, 0.38);
				box-shadow: none;
				pointer-events: none;
			}
		`}
`;

const StateLayer = styled.div<StateLayerProps>`
	align-items: center;
	align-self: center;
	display: flex;
	flex: 1;
	flex-grow: 1;
	gap: 8px;
	position: relative;
	width: inherit;
	justify-content: center;
	height: inherit;

	${({ theme, $variant }) => {
		const layers = theme.sys.light["state-layers"];
		const color =
			$variant === "tonal"
				? layers["on-secondary-container"]
				: $variant === "filled"
				? layers["on-primary"]
				: $variant === "text" || $variant === "elevated"
				? layers.primary
				: null;

		const disabledColor = layers["on-surface"]["12"];

		if (!color) return null;

		return `
			${`
				&:hover {
					background-color: ${color["08"]};
				}
				&:active,
				&:focus-visible {
					background-color: ${color["12"]};
				}
				&:disabled: ${disabledColor}
			`}
		`;
	}}
`;

export const ButtonIcon: React.FC<Props> = ({
	style = "filled",
	stateProp = "enabled",
	className = "",
	IconName = faPlus,
	onClick,
	size = "xl",
	width = 48,
	height = 48,
	id,
	ariaLabel = "button",
}) => {
	style = style || "filled";
	const state = stateProp;
	return (
		<StyledButton
			className={className}
			disabled={state === "disabled" ? true : false}
			onClick={onClick}
			id={id}
			$variant={style}
			aria-label={ariaLabel}
		>
			<StateLayer $variant={style} className={className}>
				<FontAwesomeIcon
					icon={IconName}
					size={size}
					width={width}
					height={height}
				/>
			</StateLayer>
		</StyledButton>
	);
};
