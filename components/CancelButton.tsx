import React from "react";
import styled from "@emotion/styled";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CancelContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-end;
`;

const CancelBT = styled.button`
	all: unset;
	display: flex;
	color: ${({ theme }) => theme.sys.light.primary};
	padding: 8px;
	border-radius: 100px;
	font-size: 16px;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:disabled {
		color: ${({ theme }) => theme.sys.light["state-layers"].outline[16]};
	}
`;

interface Props {
	onClick: () => void;
	disabled: boolean;
}
const CancelButton: React.FC<Props> = ({ onClick, disabled }) => {
	return (
		<CancelContainer>
			<CancelBT
				type="button"
				onClick={onClick}
				disabled={disabled}
				aria-label="Click to cancel upload an image"
			>
				<FontAwesomeIcon icon={faXmark} />
			</CancelBT>
		</CancelContainer>
	);
};

export default CancelButton;
