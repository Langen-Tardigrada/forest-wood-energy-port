"use client";
import React, { useRef } from "react";
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
	HeaderPart2Container,
	HiddenInput,
	ImageContainerColumn,
	InfoPart2Container,
	PictureBox,
	StyledPart2Content,
} from "../../../../components/AddEditComponent";

interface Props {
	register: UseFormRegister<NewsFormValues>;
	errors: FieldErrors<NewsFormValues>;
	setValue: UseFormSetValue<NewsFormValues>;
	isEditing: boolean;
	previewImageUrl: string | null;
	setPreviewImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
	setRemoveImage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Part2Style: React.FC<Props> = ({
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

			setValue("information.second.image", file, { shouldValidate: true });

			console.log(url);
		}
	};

	const handleCancle = () => {
		setRemoveImage(true);
		setPreviewImageUrl(null);
		setValue("information.second.image", null);
	};
	return (
		<StyledPart2Content>
			<ImageContainerColumn>
				{previewImageUrl && isEditing && (
					<CancelButton disabled={!isEditing} onClick={handleCancle} />
				)}
				<HiddenInput
					ref={inputRef}
					type="file"
					accept="image/*"
					disabled={!isEditing}
					onChange={handleChange}
				/>
				<PictureBox
					onClick={handleClick}
					backgroundImage={previewImageUrl || ""}
				>
					{!previewImageUrl} <FontAwesomeIcon icon={faFileImage} size="4x" />
				</PictureBox>
				<ErrorMesseege
					error={errors.information?.second?.image as FieldError}
				/>
			</ImageContainerColumn>

			<InfoPart2Container>
				<DetailContainer
					placeholder={"Enter a paragraph of the content"}
					{...register(`information.second.info.${0}`)}
					disabled={!isEditing}
				/>
				<ErrorMesseege error={errors?.information?.second?.info?.[0]} />
				<HeaderPart2Container
					placeholder={"Enter a paragraph of the main content"}
					{...register("information.second.hilight")}
					disabled={!isEditing}
				/>
				<ErrorMesseege error={errors?.information?.second?.hilight} />
				<DetailContainer
					placeholder={"Enter a paragraph of the content"}
					{...register(`information.second.info2.${0}`)}
					disabled={!isEditing}
				/>
				<ErrorMesseege error={errors?.information?.second?.info2?.[0]} />
			</InfoPart2Container>
		</StyledPart2Content>
	);
};

export default Part2Style;
