import { colors_ref as colors } from "./colors";
function hexToRgba(hex: string, opacity: number): string {
	const cleanHex = hex.replace("#", "");

	const r = parseInt(cleanHex.substring(0, 2), 16);
	const g = parseInt(cleanHex.substring(2, 4), 16);
	const b = parseInt(cleanHex.substring(4, 6), 16);

	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export const theme = {
	sys: {
		light: {
			primary: colors.primary[40],
			"on-primary": colors.primary[100],
			"primary-container": colors.primary[90],
			"on-primary-container": colors.primary[10],
			"primary-fixed": colors.primary[90],
			"primary-fixed-dim": colors.primary[80],
			"on-primary-fixed": colors.primary[10],
			"on-primary-fixed-variant": colors.primary[30],
			secondary: colors.secondary[40],
			"on-secondary": colors.secondary[100],
			"secondary-container": colors.secondary[90],
			"on-secondary-container": colors.secondary[10],
			"secondary-fixed": colors.secondary[90],
			"secondary-fixed-dim": colors.secondary[80],
			"on-secondary-fixed": colors.secondary[10],
			"on-secondary-fixed-variant": colors.secondary[30],
			tertiary: colors.tertiary[40],
			"on-tertiary": colors.tertiary[100],
			"tertiary-container": colors.tertiary[90],
			"on-tertiary-container": colors.tertiary[10],
			"tertiary-fixed": colors.tertiary[90],
			"tertiary-fixed-dim": colors.tertiary[80],
			"on-tertiary-fixed": colors.tertiary[10],
			"on-tertiary-fixed-variant": colors.tertiary[30],
			error: colors.error[40],
			"on-error": colors.error[100],
			"error-container": colors.error[90],
			"on-error-container": colors.error[10],
			surface: colors.neutral[98],
			"surface-dim": colors.neutral[87],
			"surface-bright": colors.neutral[98],
			"surface-tint": colors.neutral[40],
			"surface-container-lowest": colors.neutral[100],
			"surface-container-low": colors.neutral[96],
			"surface-container": colors.neutral[94],
			"surface-container-high": colors.neutral[92],
			"surface-container-highest": colors.neutral[90],
			"on-surface": colors.neutral[10],
			"surface-variant": colors["neutral-variant"][90],
			"on-surface-variant": colors["neutral-variant"][30],
			outline: colors["neutral-variant"][50],
			"outline-variant": colors["neutral-variant"][80],
			"inverse-surface": colors.neutral[20],
			"inverse-on-surface": colors.neutral[95],
			"inverse-primary": colors.primary[80],
			scrim: colors.neutral[0],
			shadow: colors.neutral[0],
			"state-layers": {
				primary: {
					"08": hexToRgba(colors.primary[40], 0.08),
					"12": hexToRgba(colors.primary[40], 0.12),
					"16": hexToRgba(colors.primary[40], 0.16),
				},
				"on-primary": {
					"08": hexToRgba(colors.primary[100], 0.08),
					"12": hexToRgba(colors.primary[100], 0.12),
					"16": hexToRgba(colors.primary[100], 0.16),
				},
				"primary-container": {
					"08": hexToRgba(colors.primary[90], 0.08),
					"12": hexToRgba(colors.primary[90], 0.12),
					"16": hexToRgba(colors.primary[90], 0.16),
				},
				"on-primary-container": {
					"08": hexToRgba(colors.primary[10], 0.08),
					"12": hexToRgba(colors.primary[10], 0.12),
					"16": hexToRgba(colors.primary[10], 0.16),
				},
				"primary-fixed": {
					"08": hexToRgba(colors.primary[90], 0.08),
					"12": hexToRgba(colors.primary[90], 0.12),
					"16": hexToRgba(colors.primary[90], 0.16),
				},
				"on-primary-fixed": {
					"08": hexToRgba(colors.primary[10], 0.08),
					"12": hexToRgba(colors.primary[10], 0.12),
					"16": hexToRgba(colors.primary[10], 0.16),
				},
				"primary-fixed-dim": {
					"08": hexToRgba(colors.primary[80], 0.08),
					"12": hexToRgba(colors.primary[80], 0.12),
					"16": hexToRgba(colors.primary[80], 0.16),
				},
				"on-primary-fixed-variant": {
					"08": hexToRgba(colors.primary[30], 0.08),
					"12": hexToRgba(colors.primary[30], 0.12),
					"16": hexToRgba(colors.primary[30], 0.16),
				},
				secondary: {
					"08": hexToRgba(colors.secondary[40], 0.08),
					"12": hexToRgba(colors.secondary[40], 0.12),
					"16": hexToRgba(colors.secondary[40], 0.16),
				},
				"on-secondary": {
					"08": hexToRgba(colors.secondary[100], 0.08),
					"12": hexToRgba(colors.secondary[100], 0.12),
					"16": hexToRgba(colors.secondary[100], 0.16),
				},
				"secondary-container": {
					"08": hexToRgba(colors.secondary[90], 0.08),
					"12": hexToRgba(colors.secondary[90], 0.12),
					"16": hexToRgba(colors.secondary[90], 0.16),
				},
				"on-secondary-container": {
					"08": hexToRgba(colors.secondary[10], 0.08),
					"12": hexToRgba(colors.secondary[10], 0.12),
					"16": hexToRgba(colors.secondary[10], 0.16),
				},
				"secondary-fixed": {
					"08": hexToRgba(colors.secondary[90], 0.08),
					"12": hexToRgba(colors.secondary[90], 0.12),
					"16": hexToRgba(colors.secondary[90], 0.16),
				},
				"on-secondary-fixed": {
					"08": hexToRgba(colors.secondary[10], 0.08),
					"12": hexToRgba(colors.secondary[10], 0.12),
					"16": hexToRgba(colors.secondary[10], 0.16),
				},
				"secondary-fixed-dim": {
					"08": hexToRgba(colors.secondary[80], 0.08),
					"12": hexToRgba(colors.secondary[80], 0.12),
					"16": hexToRgba(colors.secondary[80], 0.16),
				},
				"on-secondary-fixed-variant": {
					"08": hexToRgba(colors.secondary[30], 0.08),
					"12": hexToRgba(colors.secondary[30], 0.12),
					"16": hexToRgba(colors.secondary[30], 0.16),
				},
				tertiary: {
					"08": hexToRgba(colors.tertiary[40], 0.08),
					"12": hexToRgba(colors.tertiary[40], 0.12),
					"16": hexToRgba(colors.tertiary[40], 0.16),
				},
				"on-tertiary": {
					"08": hexToRgba(colors.tertiary[100], 0.08),
					"12": hexToRgba(colors.tertiary[100], 0.12),
					"16": hexToRgba(colors.tertiary[100], 0.16),
				},
				"tertiary-container": {
					"08": hexToRgba(colors.tertiary[90], 0.08),
					"12": hexToRgba(colors.tertiary[90], 0.12),
					"16": hexToRgba(colors.tertiary[90], 0.16),
				},
				"on-tertiary-container": {
					"08": hexToRgba(colors.tertiary[10], 0.08),
					"12": hexToRgba(colors.tertiary[10], 0.12),
					"16": hexToRgba(colors.tertiary[10], 0.16),
				},
				"tertiary-fixed": {
					"08": hexToRgba(colors.tertiary[90], 0.08),
					"12": hexToRgba(colors.tertiary[90], 0.12),
					"16": hexToRgba(colors.tertiary[90], 0.16),
				},
				"on-tertiary-fixed": {
					"08": hexToRgba(colors.tertiary[10], 0.08),
					"12": hexToRgba(colors.tertiary[10], 0.12),
					"16": hexToRgba(colors.tertiary[10], 0.16),
				},
				"tertiary-fixed-dim": {
					"08": hexToRgba(colors.tertiary[80], 0.08),
					"12": hexToRgba(colors.tertiary[80], 0.12),
					"16": hexToRgba(colors.tertiary[80], 0.16),
				},
				"on-tertiary-fixed-variant": {
					"08": hexToRgba(colors.tertiary[30], 0.08),
					"12": hexToRgba(colors.tertiary[30], 0.12),
					"16": hexToRgba(colors.tertiary[30], 0.16),
				},
				error: {
					"08": hexToRgba(colors.error[40], 0.08),
					"12": hexToRgba(colors.error[40], 0.12),
					"16": hexToRgba(colors.error[40], 0.16),
				},
				"on-error": {
					"08": hexToRgba(colors.error[100], 0.08),
					"12": hexToRgba(colors.error[100], 0.12),
					"16": hexToRgba(colors.error[100], 0.16),
				},
				"error-container": {
					"08": hexToRgba(colors.error[90], 0.08),
					"12": hexToRgba(colors.error[90], 0.12),
					"16": hexToRgba(colors.error[90], 0.16),
				},
				"on-error-container": {
					"08": hexToRgba(colors.error[10], 0.08),
					"12": hexToRgba(colors.error[10], 0.12),
					"16": hexToRgba(colors.error[10], 0.16),
				},
				outline: {
					"08": hexToRgba(colors["neutral-variant"][50], 0.08),
					"12": hexToRgba(colors["neutral-variant"][50], 0.12),
					"16": hexToRgba(colors["neutral-variant"][50], 0.16),
				},
				"outline-variant": {
					"08": hexToRgba(colors["neutral-variant"][80], 0.08),
					"12": hexToRgba(colors["neutral-variant"][80], 0.12),
					"16": hexToRgba(colors["neutral-variant"][80], 0.16),
				},
				surface: {
					"08": hexToRgba(colors["neutral"][98], 0.08),
					"12": hexToRgba(colors["neutral"][98], 0.12),
					"16": hexToRgba(colors["neutral"][98], 0.16),
				},
				"on-surface": {
					"08": hexToRgba(colors["neutral"][10], 0.08),
					"12": hexToRgba(colors["neutral"][10], 0.12),
					"16": hexToRgba(colors["neutral"][10], 0.16),
				},
				"surface-variant": {
					"08": hexToRgba(colors["neutral-variant"][90], 0.08),
					"12": hexToRgba(colors["neutral-variant"][90], 0.12),
					"16": hexToRgba(colors["neutral-variant"][90], 0.16),
				},
				"on-surface-variant": {
					"08": hexToRgba(colors["neutral-variant"][30], 0.08),
					"12": hexToRgba(colors["neutral-variant"][30], 0.12),
					"16": hexToRgba(colors["neutral-variant"][30], 0.16),
				},
				"inverse-surface": {
					"08": hexToRgba(colors.neutral[20], 0.08),
					"12": hexToRgba(colors.neutral[20], 0.12),
					"16": hexToRgba(colors.neutral[20], 0.16),
				},
				"inverse-on-surface": {
					"08": hexToRgba(colors.neutral[95], 0.08),
					"12": hexToRgba(colors.neutral[95], 0.12),
					"16": hexToRgba(colors.neutral[95], 0.16),
				},
				"inverse-primary": {
					"08": hexToRgba(colors.primary[80], 0.08),
					"12": hexToRgba(colors.primary[80], 0.12),
					"16": hexToRgba(colors.primary[80], 0.16),
				},
				shadow: {
					"08": hexToRgba(colors.neutral[0], 0.08),
					"12": hexToRgba(colors.neutral[0], 0.12),
					"16": hexToRgba(colors.neutral[0], 0.16),
				},
				scrim: {
					"08": hexToRgba(colors.neutral[0], 0.08),
					"12": hexToRgba(colors.neutral[0], 0.12),
					"16": hexToRgba(colors.neutral[0], 0.16),
				},
				"surface-tint": {
					"08": hexToRgba(colors.neutral[40], 0.08),
					"12": hexToRgba(colors.neutral[40], 0.12),
					"16": hexToRgba(colors.neutral[40], 0.16),
				},
				"surface-container-highest": {
					"08": hexToRgba(colors.neutral[90], 0.08),
					"12": hexToRgba(colors.neutral[90], 0.12),
					"16": hexToRgba(colors.neutral[90], 0.16),
				},
				"surface-container-high": {
					"08": hexToRgba(colors.neutral[92], 0.08),
					"12": hexToRgba(colors.neutral[92], 0.12),
					"16": hexToRgba(colors.neutral[92], 0.16),
				},
				"surface-container": {
					"08": hexToRgba(colors.neutral[94], 0.08),
					"12": hexToRgba(colors.neutral[94], 0.12),
					"16": hexToRgba(colors.neutral[94], 0.16),
				},
				"surface-container-low": {
					"08": hexToRgba(colors.neutral[96], 0.08),
					"12": hexToRgba(colors.neutral[96], 0.12),
					"16": hexToRgba(colors.neutral[96], 0.16),
				},
				"surface-container-lowest": {
					"08": hexToRgba(colors.neutral[100], 0.08),
					"12": hexToRgba(colors.neutral[100], 0.12),
					"16,": hexToRgba(colors.neutral[100], 0.16),
				},
				"surface-bright": {
					"08": hexToRgba(colors.neutral[98], 0.08),
					"12": hexToRgba(colors.neutral[98], 0.12),
					"16": hexToRgba(colors.neutral[98], 0.16),
				},
				"surface-dim": {
					"08": hexToRgba(colors.neutral[87], 0.08),
					"12": hexToRgba(colors.neutral[87], 0.12),
					"16": hexToRgba(colors.neutral[87], 0.16),
				},
			},
			elevation: {
				1: ` 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 
        			0px 1px 3px 1px rgba(0, 0, 0, 0.15)`,
				2: ` 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
					0px 2px 6px 2px rgba(0, 0, 0, 0.15)
					`,
				3: ` 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
					0px 1px 3px 0px rgba(0, 0, 0, 0.3)
					`,
				4: ` 0px 6px 10px 4px rgba(0, 0, 0, 0.15),
                    0px 2px 3px 0px rgba(0, 0, 0, 0.3)
                    `,
				5: ` 0px 4px 4px 0px rgba(0, 0, 0, 0.3),
					0px 8px 12px 6px rgba(0, 0, 0, 0.15)
					`,
			},
		},
		dark: {
			primary: colors.primary[80],
			"on-primary": colors.primary[20],
			"primary-container": colors.primary[30],
			"on-primary-container": colors.primary[90],
			"primary-fixed": colors.primary[90],
			"primary-fixed-dim": colors.primary[80],
			"on-primary-fixed": colors.primary[10],
			"on-primary-fixed-variant": colors.primary[30],
			secondary: colors.secondary[80],
			"on-secondary": colors.secondary[20],
			"secondary-container": colors.secondary[30],
			"on-secondary-container": colors.secondary[90],
			"secondary-fixed": colors.secondary[90],
			"secondary-fixed-dim": colors.secondary[80],
			"on-secondary-fixed": colors.secondary[10],
			"on-secondary-fixed-variant": colors.secondary[30],
			tertiary: colors.tertiary[80],
			"on-tertiary": colors.tertiary[20],
			"tertiary-container": colors.tertiary[30],
			"on-tertiary-container": colors.tertiary[90],
			"tertiary-fixed": colors.tertiary[90],
			"tertiary-fixed-dim": colors.tertiary[80],
			"on-tertiary-fixed": colors.tertiary[10],
			"on-tertiary-fixed-variant": colors.tertiary[30],
			error: colors.error[80],
			"on-error": colors.error[20],
			"error-container": colors.error[30],
			"on-error-container": colors.error[90],
			surface: colors.neutral[6],
			"surface-dim": colors.neutral[6],
			"surface-bright": colors.neutral[24],
			"surface-tint": colors.neutral[80],
			"surface-container-lowest": colors.neutral[4],
			"surface-container-low": colors.neutral[10],
			"surface-container": colors.neutral[12],
			"surface-container-high": colors.neutral[17],
			"surface-container-highest": colors.neutral[22],
			"on-surface": colors.neutral[90],
			"surface-variant": colors["neutral-variant"][20],
			"on-surface-variant": colors["neutral-variant"][80],
			outline: colors["neutral-variant"][60],
			"outline-variant": colors["neutral-variant"][30],
			"inverse-surface": colors.neutral[90],
			"inverse-on-surface": colors.neutral[20],
			"inverse-primary": colors.primary[40],
			scrim: colors.neutral[0],
			shadow: colors.neutral[0],
			"state-layers": {
				primary: {
					"08": hexToRgba(colors.primary[80], 0.08),
					"12": hexToRgba(colors.primary[80], 0.12),
					"16": hexToRgba(colors.primary[80], 0.16),
				},
				"on-primary": {
					"08": hexToRgba(colors.primary[20], 0.08),
					"12": hexToRgba(colors.primary[20], 0.12),
					"16": hexToRgba(colors.primary[20], 0.16),
				},
				"primary-container": {
					"08": hexToRgba(colors.primary[30], 0.08),
					"12": hexToRgba(colors.primary[30], 0.12),
					"16": hexToRgba(colors.primary[30], 0.16),
				},
				"on-primary-container": {
					"08": hexToRgba(colors.primary[90], 0.08),
					"12": hexToRgba(colors.primary[90], 0.12),
					"16": hexToRgba(colors.primary[90], 0.16),
				},
				"primary-fixed": {
					"08": hexToRgba(colors.primary[90], 0.08),
					"12": hexToRgba(colors.primary[90], 0.12),
					"16": hexToRgba(colors.primary[90], 0.16),
				},
				"on-primary-fixed": {
					"08": hexToRgba(colors.primary[10], 0.08),
					"12": hexToRgba(colors.primary[10], 0.12),
					"16": hexToRgba(colors.primary[10], 0.16),
				},
				"primary-fixed-dim": {
					"08": hexToRgba(colors.primary[80], 0.08),
					"12": hexToRgba(colors.primary[80], 0.12),
					"16": hexToRgba(colors.primary[80], 0.16),
				},
				"on-primary-fixed-variant": {
					"08": hexToRgba(colors.primary[30], 0.08),
					"12": hexToRgba(colors.primary[30], 0.12),
					"16": hexToRgba(colors.primary[30], 0.16),
				},
				secondary: {
					"08": hexToRgba(colors.secondary[80], 0.08),
					"12": hexToRgba(colors.secondary[80], 0.12),
					"16": hexToRgba(colors.secondary[80], 0.16),
				},
				"on-secondary": {
					"08": hexToRgba(colors.secondary[20], 0.08),
					"12": hexToRgba(colors.secondary[20], 0.12),
					"16": hexToRgba(colors.secondary[20], 0.16),
				},
				"secondary-container": {
					"08": hexToRgba(colors.secondary[30], 0.08),
					"12": hexToRgba(colors.secondary[30], 0.12),
					"16": hexToRgba(colors.secondary[30], 0.16),
				},
				"on-secondary-container": {
					"08": hexToRgba(colors.secondary[90], 0.08),
					"12": hexToRgba(colors.secondary[90], 0.12),
					"16": hexToRgba(colors.secondary[90], 0.16),
				},
				"secondary-fixed": {
					"08": hexToRgba(colors.secondary[90], 0.08),
					"12": hexToRgba(colors.secondary[90], 0.12),
					"16": hexToRgba(colors.secondary[90], 0.16),
				},
				"on-secondary-fixed": {
					"08": hexToRgba(colors.secondary[10], 0.08),
					"12": hexToRgba(colors.secondary[10], 0.12),
					"16": hexToRgba(colors.secondary[10], 0.16),
				},
				"secondary-fixed-dim": {
					"08": hexToRgba(colors.secondary[80], 0.08),
					"12": hexToRgba(colors.secondary[80], 0.12),
					"16": hexToRgba(colors.secondary[80], 0.16),
				},
				"on-secondary-fixed-variant": {
					"08": hexToRgba(colors.secondary[30], 0.08),
					"12": hexToRgba(colors.secondary[30], 0.12),
					"16": hexToRgba(colors.secondary[30], 0.16),
				},
				tertiary: {
					"08": hexToRgba(colors.tertiary[80], 0.08),
					"12": hexToRgba(colors.tertiary[80], 0.12),
					"16": hexToRgba(colors.tertiary[80], 0.16),
				},
				"on-tertiary": {
					"08": hexToRgba(colors.tertiary[20], 0.08),
					"12": hexToRgba(colors.tertiary[20], 0.12),
					"16": hexToRgba(colors.tertiary[20], 0.16),
				},
				"tertiary-container": {
					"08": hexToRgba(colors.tertiary[30], 0.08),
					"12": hexToRgba(colors.tertiary[30], 0.12),
					"16": hexToRgba(colors.tertiary[30], 0.16),
				},
				"on-tertiary-container": {
					"08": hexToRgba(colors.tertiary[90], 0.08),
					"12": hexToRgba(colors.tertiary[90], 0.12),
					"16": hexToRgba(colors.tertiary[90], 0.16),
				},
				"tertiary-fixed": {
					"08": hexToRgba(colors.tertiary[90], 0.08),
					"12": hexToRgba(colors.tertiary[90], 0.12),
					"16": hexToRgba(colors.tertiary[90], 0.16),
				},
				"on-tertiary-fixed": {
					"08": hexToRgba(colors.tertiary[10], 0.08),
					"12": hexToRgba(colors.tertiary[10], 0.12),
					"16": hexToRgba(colors.tertiary[10], 0.16),
				},
				"tertiary-fixed-dim": {
					"08": hexToRgba(colors.tertiary[80], 0.08),
					"12": hexToRgba(colors.tertiary[80], 0.12),
					"16": hexToRgba(colors.tertiary[80], 0.16),
				},
				"on-tertiary-fixed-variant": {
					"08": hexToRgba(colors.tertiary[30], 0.08),
					"12": hexToRgba(colors.tertiary[30], 0.12),
					"16": hexToRgba(colors.tertiary[30], 0.16),
				},
				error: {
					"08": hexToRgba(colors.error[80], 0.08),
					"12": hexToRgba(colors.error[80], 0.12),
					"16": hexToRgba(colors.error[80], 0.16),
				},
				"on-error": {
					"08": hexToRgba(colors.error[20], 0.08),
					"12": hexToRgba(colors.error[20], 0.12),
					"16": hexToRgba(colors.error[20], 0.16),
				},
				"error-container": {
					"08": hexToRgba(colors.error[30], 0.08),
					"12": hexToRgba(colors.error[30], 0.12),
					"16": hexToRgba(colors.error[30], 0.16),
				},
				"on-error-container": {
					"08": hexToRgba(colors.error[90], 0.08),
					"12": hexToRgba(colors.error[90], 0.12),
					"16": hexToRgba(colors.error[90], 0.16),
				},
				outline: {
					"08": hexToRgba(colors["neutral-variant"][60], 0.08),
					"12": hexToRgba(colors["neutral-variant"][60], 0.12),
					"16": hexToRgba(colors["neutral-variant"][60], 0.16),
				},
				"outline-variant": {
					"08": hexToRgba(colors["neutral-variant"][30], 0.08),
					"12": hexToRgba(colors["neutral-variant"][30], 0.12),
					"16": hexToRgba(colors["neutral-variant"][30], 0.16),
				},
				surface: {
					"08": hexToRgba(colors["neutral"][6], 0.08),
					"12": hexToRgba(colors["neutral"][6], 0.12),
					"16": hexToRgba(colors["neutral"][6], 0.16),
				},
				"on-surface": {
					"08": hexToRgba(colors["neutral"][90], 0.08),
					"12": hexToRgba(colors["neutral"][90], 0.12),
					"16": hexToRgba(colors["neutral"][90], 0.16),
				},
				"surface-variant": {
					"08": hexToRgba(colors["neutral-variant"][20], 0.08),
					"12": hexToRgba(colors["neutral-variant"][20], 0.12),
					"16": hexToRgba(colors["neutral-variant"][20], 0.16),
				},
				"on-surface-variant": {
					"08": hexToRgba(colors["neutral-variant"][80], 0.08),
					"12": hexToRgba(colors["neutral-variant"][80], 0.12),
					"16": hexToRgba(colors["neutral-variant"][80], 0.16),
				},
				"inverse-surface": {
					"08": hexToRgba(colors.neutral[90], 0.08),
					"12": hexToRgba(colors.neutral[90], 0.12),
					"16": hexToRgba(colors.neutral[90], 0.16),
				},
				"inverse-on-surface": {
					"08": hexToRgba(colors.neutral[20], 0.08),
					"12": hexToRgba(colors.neutral[20], 0.12),
					"16": hexToRgba(colors.neutral[20], 0.16),
				},
				"inverse-primary": {
					"08": hexToRgba(colors.primary[40], 0.08),
					"12": hexToRgba(colors.primary[40], 0.12),
					"16": hexToRgba(colors.primary[40], 0.16),
				},
				shadow: {
					"08": hexToRgba(colors.neutral[0], 0.08),
					"12": hexToRgba(colors.neutral[0], 0.12),
					"16": hexToRgba(colors.neutral[0], 0.16),
				},
				scrim: {
					"08": hexToRgba(colors.neutral[0], 0.08),
					"12": hexToRgba(colors.neutral[0], 0.12),
					"16": hexToRgba(colors.neutral[0], 0.16),
				},
				"surface-tint": {
					"08": hexToRgba(colors.neutral[80], 0.08),
					"12": hexToRgba(colors.neutral[80], 0.12),
					"16": hexToRgba(colors.neutral[80], 0.16),
				},
				"surface-container-highest": {
					"08": hexToRgba(colors.neutral[90], 0.08),
					"12": hexToRgba(colors.neutral[90], 0.12),
					"16": hexToRgba(colors.neutral[90], 0.16),
				},
				"surface-container-high": {
					"08": hexToRgba(colors.neutral[22], 0.08),
					"12": hexToRgba(colors.neutral[22], 0.12),
					"16": hexToRgba(colors.neutral[22], 0.16),
				},
				"surface-container": {
					"08": hexToRgba(colors.neutral[17], 0.08),
					"12": hexToRgba(colors.neutral[17], 0.12),
					"16": hexToRgba(colors.neutral[17], 0.16),
				},
				"surface-container-low": {
					"08": hexToRgba(colors.neutral[10], 0.08),
					"12": hexToRgba(colors.neutral[10], 0.12),
					"16": hexToRgba(colors.neutral[10], 0.16),
				},
				"surface-container-lowest": {
					"08": hexToRgba(colors.neutral[4], 0.08),
					"12": hexToRgba(colors.neutral[4], 0.12),
					"16,": hexToRgba(colors.neutral[4], 0.16),
				},
				"surface-bright": {
					"08": hexToRgba(colors.neutral[24], 0.08),
					"12": hexToRgba(colors.neutral[24], 0.12),
					"16": hexToRgba(colors.neutral[24], 0.16),
				},
				"surface-dim": {
					"08": hexToRgba(colors.neutral[6], 0.08),
					"12": hexToRgba(colors.neutral[6], 0.12),
					"16": hexToRgba(colors.neutral[6], 0.16),
				},
			},
			elevation: {
				1: ` 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 
        			0px 1px 3px 1px rgba(0, 0, 0, 0.15)`,
				2: ` 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
					0px 2px 6px 2px rgba(0, 0, 0, 0.15)
					`,
				3: ` 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
					0px 1px 3px 0px rgba(0, 0, 0, 0.3)
					`,
				4: ` 0px 6px 10px 4px rgba(0, 0, 0, 0.15),
                    0px 2px 3px 0px rgba(0, 0, 0, 0.3)
                    `,
				5: ` 0px 4px 4px 0px rgba(0, 0, 0, 0.3),
					0px 8px 12px 6px rgba(0, 0, 0, 0.15)
					`,
			},
		},
	},
	ref: {
		...colors,
	},
	source: {
		seed: colors.primary[40],
	},
	typography: {
		display: {
			large: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "57px",
				lineHeight: "64px",
				fontWeight: 400,
				letterSpacing: "-0.25px",
			},
			medium: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "45px",
				lineHeight: "52px",
				fontWeight: 400,
				letterSpacing: "0px",
			},
			small: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "36px",
				lineHeight: "44px",
				fontWeight: 400,
				letterSpacing: "0px",
			},
		},
		headline: {
			large: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "32px",
				lineHeight: "40px",
				fontWeight: 400,
				letterSpacing: "0px",
			},
			medium: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "28px",
				lineHeight: "36px",
				fontWeight: 400,
				letterSpacing: "0px",
			},
			small: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "24px",
				lineHeight: "32px",
				fontWeight: 400,
				letterSpacing: "0px",
			},
		},
		title: {
			large: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "22px",
				lineHeight: "28px",
				fontWeight: 400,
				letterSpacing: "0px",
			},
			medium: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "16px",
				lineHeight: "24px",
				fontWeight: 500,
				letterSpacing: "0.15px",
			},
			small: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "14px",
				lineHeight: "20px",
				fontWeight: 500,
				letterSpacing: "0.1px",
			},
		},
		body: {
			large: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "16px",
				lineHeight: "24px",
				fontWeight: 400,
				letterSpacing: "0.5px",
			},
			medium: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "14px",
				lineHeight: "20px",
				fontWeight: 400,
				letterSpacing: "0.25px",
			},
			small: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "12px",
				lineHeight: "16px",
				fontWeight: 400,
				letterSpacing: "0.4px",
			},
		},
		label: {
			"large-prominent": {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "14px",
				lineHeight: "20px",
				fontWeight: 700,
				letterSpacing: "0.1px",
			},
			large: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "14px",
				lineHeight: "20px",
				fontWeight: 500,
				letterSpacing: "0.1px",
			},
			"medium-prominent": {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "12px",
				lineHeight: "16px",
				fontWeight: 600,
				letterSpacing: "0.5px",
			},
			medium: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "12px",
				lineHeight: "16px",
				fontWeight: 500,
				letterSpacing: "0.5px",
			},
			small: {
				fontFamily:
					"var(--font-jost),  system-ui,-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
				fontSize: "11px",
				lineHeight: "16px",
				fontWeight: 500,
				letterSpacing: "0.5px",
			},
		},
	},
};

export default theme;
