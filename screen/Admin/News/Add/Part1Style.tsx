"use client";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { NewsFormValues } from "../yupNewsSchema";
import { ErrorMesseege } from "../../../../components/NewsAdmin";
import {
	DetailContainer,
	HeaderContainer,
	HilightText,
	InfoContainer,
	StyledPartContent,
} from "../../../../components/AddEditComponent";

interface Props {
	register: UseFormRegister<NewsFormValues>;
	errors: FieldErrors<NewsFormValues>;
	disabled: boolean;
}

const Part1Style: React.FC<Props> = ({ register, errors, disabled }) => {
	return (
		<StyledPartContent>
			<InfoContainer>
				<HeaderContainer
					{...register("information.first.info.heading")}
					placeholder={
						"Enter the headline (e.g., “Company Launches New Product”)"
					}
					disabled={disabled}
				/>
				<ErrorMesseege error={errors.information?.first?.info?.heading} />
				<DetailContainer
					placeholder={"Enter a paragraph of the content"}
					{...register(`information.first.info.description.${0}`)}
					disabled={disabled}
				/>
				<ErrorMesseege
					error={errors?.information?.first?.info?.description?.[0]}
				/>
				<DetailContainer
					placeholder={"Enter a paragraph of the content"}
					{...register(`information.first.info.description.${1}`)}
					disabled={disabled}
				/>
				<ErrorMesseege
					error={errors?.information?.first?.info?.description?.[1]}
				/>
			</InfoContainer>
			<HilightText
				placeholder={"Enter a quote related to this news"}
				{...register(`information.first.quote`)}
				disabled={disabled}
			/>
			<ErrorMesseege error={errors.information?.first?.quote} />
		</StyledPartContent>
	);
};

export default Part1Style;
