"use client";
import React, { useRef, useState } from "react";
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
	disabled: boolean;
}

const Part3Style: React.FC<Props> = ({
	width,
	register,
	errors,
	setValue,
	disabled,
}) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [previewURL, setPreviewURL] = useState<string | null>(null);

	const handleClick = () => {
		inputRef.current?.click();
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const url = URL.createObjectURL(file);
			setPreviewURL(url);

			setValue("information.third.image", file, { shouldValidate: true });
		}
	};

	return (
		<StyledPart3Content>
			<HeaderPart3Container
				placeholder={"Enter the new headline"}
				{...register(`information.third.heading`)}
				disabled={disabled}
			/>
			<ErrorMesseege error={errors?.information?.third?.heading} />
			<DetailContainer
				placeholder={"Enter a paragraph of the content"}
				{...register(`information.third.info.${0}`)}
				disabled={disabled}
			/>
			<ErrorMesseege error={errors?.information?.third?.info?.[0]} />
			<HilightTextPart3
				width={width}
				placeholder={"Enter a quote related to this news"}
				{...register(`information.third.hilight`)}
				disabled={disabled}
			/>
			<ErrorMesseege error={errors?.information?.third?.hilight} />
			<DetailContainer
				placeholder={"Enter a paragraph of the content"}
				{...register(`information.third.info2.${0}`)}
				disabled={disabled}
			/>
			<ErrorMesseege error={errors?.information?.third?.info2?.[0]} />
			<ImagePart3ContainerColumn>
				{previewURL && !disabled && (
					<CancelButton
						onClick={() => {
							setPreviewURL(null);
							setValue("image", null);
						}}
						disabled={disabled}
					/>
				)}
				<HiddenInput
					ref={inputRef}
					type="file"
					accept="image/*"
					onChange={handleChange}
					disabled={disabled}
				/>
				<PicturePart3Box
					onClick={handleClick}
					backgroundImage={previewURL || ""}
				>
					{!previewURL} <FontAwesomeIcon icon={faFileImage} size="4x" />
				</PicturePart3Box>
				<ErrorMesseege error={errors.information?.third?.image as FieldError} />
			</ImagePart3ContainerColumn>

			<DetailContainer
				placeholder={"Enter a paragraph of the content"}
				{...register(`information.third.info3.${0}`)}
				disabled={disabled}
			/>
			<ErrorMesseege error={errors?.information?.third?.info3?.[1]} />
		</StyledPart3Content>
	);
};

export default Part3Style;
