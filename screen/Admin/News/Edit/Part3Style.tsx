"use client";
import React, { useRef } from "react";
import styled from "@emotion/styled";
import { typography } from "../../../../src/app/css/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-regular-svg-icons";
import {
	FieldError,
	FieldErrors,
	UseFormRegister,
	UseFormSetValue,
} from "react-hook-form";
import { NewsFormValues } from "../yupNewsSchema";
import { ErrorMesseege } from "../../../../components/NewsAdmin";
import CancelButton from "../../../../components/CancelButton";
import {
	DetailContainer,
	HeaderPart3Container,
	HiddenInput,
	HilightTextPart3,
	ImagePart3ContainerColumn,
	PicturePart3Box,
	StyledPart3Content,
} from "../../../../components/AddEditComponent";

interface Props {
	width: number;
	height: number;
	register: UseFormRegister<NewsFormValues>;
	errors: FieldErrors<NewsFormValues>;
	setValue: UseFormSetValue<NewsFormValues>;
	isEditing: boolean;
	previewImageUrl: string | null;
	setPreviewImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
	setRemoveImage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Part3Style: React.FC<Props> = ({
	width,
	register,
	errors,
	setValue,
	isEditing,
	previewImageUrl,
	setPreviewImageUrl,
	setRemoveImage,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		inputRef.current?.click();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setPreviewImageUrl(url);

			setValue("information.third.image", file, { shouldValidate: true });
		}
	};

	const handleCancle = () => {
		setRemoveImage(true);
		setPreviewImageUrl(null);
		setValue("information.third.image", null);
	};

	return (
		<StyledPart3Content>
			<HeaderPart3Container
				placeholder={"Enter the new headline"}
				{...register(`information.third.heading`)}
				disabled={!isEditing}
			/>
			<ErrorMesseege error={errors?.information?.third?.heading} />
			<DetailContainer
				placeholder={"Enter a paragraph of the content"}
				{...register(`information.third.info.${0}`)}
				disabled={!isEditing}
			/>
			<ErrorMesseege error={errors?.information?.third?.info?.[0]} />
			<HilightTextPart3
				width={width}
				placeholder={"Enter a quote related to this news"}
				{...register(`information.third.hilight`)}
				disabled={!isEditing}
			/>
			<ErrorMesseege error={errors?.information?.third?.hilight} />
			<DetailContainer
				placeholder={"Enter a paragraph of the content"}
				{...register(`information.third.info2.${0}`)}
				disabled={!isEditing}
			/>
			<ErrorMesseege error={errors?.information?.third?.info2?.[0]} />
			<ImagePart3ContainerColumn>
				{previewImageUrl && isEditing && (
					<CancelButton disabled={!isEditing} onClick={handleCancle} />
				)}
				<HiddenInput
					ref={inputRef}
					type="file"
					accept="image/*"
					onChange={handleChange}
					disabled={!isEditing}
				/>
				<PicturePart3Box
					onClick={handleClick}
					backgroundImage={previewImageUrl || ""}
				>
					{!previewImageUrl} <FontAwesomeIcon icon={faFileImage} size="4x" />
				</PicturePart3Box>
				<ErrorMesseege error={errors.information?.third?.image as FieldError} />
			</ImagePart3ContainerColumn>

			<DetailContainer
				placeholder={"Enter a paragraph of the content"}
				{...register(`information.third.info3.${0}`)}
				disabled={!isEditing}
			/>
			<ErrorMesseege error={errors?.information?.third?.info3?.[0]} />
		</StyledPart3Content>
	);
};

export default Part3Style;
