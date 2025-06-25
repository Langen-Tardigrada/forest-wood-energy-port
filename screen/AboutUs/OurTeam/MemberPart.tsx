"use client";
import React from "react";
import styled from "@emotion/styled";
import StackedCard from "../../../components/StackedCard";
import { Member } from "../../../public/information/about/ourteam";
import { typography } from "../../../src/app/css/typography";

const StyledTeam = styled.div<{ width: number; height: number }>`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 80px;
	padding: 128px 40px;
	position: relative;
	width: ${({ width }) => width}px;
	box-sizing: border-box;

	@media (min-width: 0px) and (max-width: 599px) {
		padding: 64px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 72px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 96px 32px;
	}
`;
const CardContainerWrapper = styled.div`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	gap: 80px;
	position: relative;
	width: 100%;

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 48px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 64px;
	}
`;

const TextWrapper = styled.div`
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.display.medium}
	position: relative;

	@media (min-width: 0px) and (max-width: 839px) {
		${typography.display.small}
	}
`;

const TeamMemberWrapper = styled.div<{ width: number }>`
	align-self: stretch;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	gap: 24px;
	height: ${({ width }) => ((width - 80) / 12) * 3}px;
	position: relative;
	width: 100%;
	box-sizing: border-box;

	@media (min-width: 0px) and (max-width: 599px) {
		height: max-content;
		gap: 16px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		height: max-content;
		gap: 16px;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		height: ${({ width }) => ((width - 48) / 12) * 3 * 1.2}px;
	}
`;

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
const Line = styled.div`
	border-top: 1px solid ${({ theme }) => theme.sys.light["surface-variant"]};
	position: relative;
	width: 100%;
`;
const Label = styled.div`
	color: ${({ theme }) => theme.sys.light["outline-variant"]};
	${typography.body.small}
	position: relative;
	text-align: right;
	white-space: nowrap;
	width: fit-content;
`;

interface Props {
	width: number;
	height: number;
	member: Array<Member>;
}

const Department: React.FC<Props> = ({ width, height, member }) => {
	return (
		<>
			{member.map((item, i) => (
				<CardContainerWrapper key={item.department}>
					<TextWrapper>{item.department}</TextWrapper>
					<TeamMemberWrapper width={width}>
						{item.member.map((member) => (
							<StackedCard
								position={member.position}
								name={member.name}
								width={width}
								height={height}
								cardWidth={member.width}
								image={member.image}
								key={member.name}
							/>
						))}
					</TeamMemberWrapper>
					{i == member.length - 1 ? (
						<></>
					) : (
						<LineSection>
							<Line />
							<Label>FOREST WOOD ENERGY 2024</Label>
						</LineSection>
					)}
				</CardContainerWrapper>
			))}
		</>
	);
};

const MemberPart: React.FC<Props> = ({ width, height, member }) => {
	return (
		<StyledTeam width={width} height={height}>
			<Department width={width} height={height} member={member} />
		</StyledTeam>
	);
};

export default MemberPart;
