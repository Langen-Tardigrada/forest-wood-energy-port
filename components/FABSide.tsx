"use client";
import React from "react";
import styled from "@emotion/styled";
import { FAB } from "./FAB";
import {
	faArrowLeft,
	faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const FABList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	position: fixed;
	top: 50%;
	right: 0px;
	gap: 24px;
	z-index: 3;
`;

interface Props {
	buttonUpUrl: string;
	onClickSignOut: () => void;
}
const FABSide: React.FC<Props> = ({ buttonUpUrl, onClickSignOut }) => {
	return (
		<FABList>
			<FAB
				style="tertiary"
				IconName={faArrowLeft}
				onClick={() => {
					"add";
				}}
				size="large"
				feature="link"
				link={buttonUpUrl}
				ariaLabel="Click to add new news"
			/>
			<FAB
				style="surface"
				IconName={faArrowRightFromBracket}
				onClick={onClickSignOut}
				size="fab"
				ariaLabel="Click to log out"
			/>
		</FABList>
	);
};

export default FABSide;
