"use client";

import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { typography } from "../src/app/css/typography";

interface Props {
	type?: "button" | "submit" | "reset";
	labelText?: string;
	style?: "filled" | "tonal" | "elevated" | "text" | "outlined";
	stateProp?: "enabled" | "disabled";
	showIcon?: "pre" | "trailing" | "none";
	className?: string;
	labelTextClassName?: string;
	headlineClassName?: string;
	IconName?: IconDefinition;
	onClick?: () => void;
	feature?: "link" | "other";
	link?: string;
	id?: string;
	headline?: string;
	boxClassName?: string;
	ariaLabel?: string;
}

type Variant = "outlined" | "filled" | "tonal" | "text" | "elevated";
interface ButtonProps {
	$variant: Variant;
}

interface StateLayerProps {
	$padding: string;
	$variant: Variant;
}

const StyledButton = styled.button<ButtonProps>`
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
	justify-content: center;

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
	padding: ${({ $padding }) => $padding};
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
const LabelText = styled.div`
	${typography.label.medium}
	position: relative;
	justify-content: center;
	text-align: center;
	white-space: nowrap;
	width: fit-content;
`;
const HeadlineLabel = styled.div`
	${typography.label.large}
	font-weight: 600;
	position: relative;
	justify-content: center;
	text-align: center;
	white-space: nowrap;
	width: fit-content;
`;
const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
`;
export const ButtonMedia: React.FC<Props> = ({
	type = "button",
	labelText = "Label",
	style = "filled",
	stateProp = "enabled",
	showIcon = "none",
	className = undefined,
	labelTextClassName = undefined,
	IconName = faPlus,
	onClick,
	feature = "other",
	link = "",
	id,
	headline = "Headline",
	headlineClassName,
	boxClassName,
	ariaLabel = "button",
}) => {
	style = style || "filled";
	const state = stateProp;
	const padding =
		showIcon === "none"
			? "10px 24px"
			: showIcon === "trailing"
			? "10px 16px 10px 24px"
			: "10px 24px 10px 16px";
	return (
		<>
			{feature === "link" ? (
				<Link
					href={link}
					style={{
						textDecoration: "none",
						pointerEvents: state === "disabled" ? "none" : "auto",
					}}
				>
					<StyledButton
						type={type}
						className={className}
						disabled={state === "disabled" ? true : false}
						onClick={onClick}
						id={id}
						$variant={style}
						aria-label={ariaLabel}
					>
						<StateLayer $padding={padding} $variant={style}>
							{showIcon === "pre" ? (
								<FontAwesomeIcon icon={IconName} width={18} height={18} />
							) : (
								<></>
							)}
							<Box className={boxClassName}>
								<HeadlineLabel className={`${headlineClassName}`}>
									{headline}
								</HeadlineLabel>
								<LabelText className={`${labelTextClassName}`}>
									{labelText}
								</LabelText>
							</Box>

							{showIcon === "trailing" ? (
								<FontAwesomeIcon icon={IconName} width={18} height={18} />
							) : (
								<></>
							)}
						</StateLayer>
					</StyledButton>
				</Link>
			) : (
				<StyledButton
					className={className}
					disabled={state === "disabled" ? true : false}
					type={type}
					onClick={onClick}
					$variant={style}
				>
					<StateLayer $padding={padding} $variant={style}>
						{showIcon === "pre" ? (
							<FontAwesomeIcon icon={IconName} width={18} height={18} />
						) : (
							<></>
						)}
						<Box className={boxClassName}>
							<HeadlineLabel className={`${headlineClassName}`}>
								{headline}
							</HeadlineLabel>
							<LabelText className={`${labelTextClassName}`}>
								{labelText}
							</LabelText>
						</Box>
						{showIcon === "trailing" ? (
							<FontAwesomeIcon icon={IconName} width={18} height={18} />
						) : (
							<></>
						)}
					</StateLayer>
				</StyledButton>
			)}
		</>
	);
};
