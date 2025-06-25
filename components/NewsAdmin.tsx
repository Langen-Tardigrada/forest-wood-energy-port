"use-client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "@/app/css/typography";
import { FieldError } from "react-hook-form";

const ErrorContainer = styled.div`
	display: flex;
	width: 100%;
	${typography.label.small}
	color: ${({ theme }) => theme.sys.light.error};
`;

interface Props {
	error?: FieldError;
}
export const ErrorMesseege: React.FC<Props> = ({ error }) => {
	if (!error) return null;
	return <ErrorContainer>{error.message}</ErrorContainer>;
};
