"use client";
import styled from "@emotion/styled";
import { typography } from "../src/app/css/typography";

const LineSection = styled.div`
	align-items: flex-end;
	align-self: stretch;
	display: flex;
	flex: 0 0 auto;
	flex-direction: column;
	gap: 24px;
	justify-content: center;
	position: relative;
	width: 100%;
`;
const Line = styled.div<{ mode: string }>`
	border-top: 1px solid
		${({ mode, theme }) =>
			mode === "light" ? theme.sys.light.outline : theme.sys.dark.outline};
	position: relative;
	width: 100%;
`;
const Label = styled.div<{ mode: string }>`
	color: ${({ mode, theme }) =>
		mode === "light"
			? theme.sys.light["on-surface"]
			: theme.sys.dark["on-surface-variant"]};
	${typography.body.small}
	position: relative;
	text-align: right;
	white-space: nowrap;
	width: fit-content;

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.label.small}
	}
`;
interface Props {
	mode: "light" | "dark";
}

const LineSectionComponent: React.FC<Props> = ({ mode }) => {
	return (
		<LineSection>
			<Line mode={mode} />
			<Label mode={mode}>FOREST WOOD ENERGY 2024</Label>
		</LineSection>
	);
};

export default LineSectionComponent;
