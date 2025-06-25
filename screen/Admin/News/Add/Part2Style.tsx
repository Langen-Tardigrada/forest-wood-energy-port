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
	disabled: boolean;
}

const Part2Style: React.FC<Props> = ({
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

			setValue("information.second.image", file, { shouldValidate: true });
		}
	};
	return (
		<StyledPart2Content>
			<ImageContainerColumn>
				{previewURL && !disabled && (
					<CancelButton
						onClick={() => {
							setPreviewURL(null);
							setValue("information.second.image", null);
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
				<PictureBox onClick={handleClick} backgroundImage={previewURL || ""}>
					{!previewURL} <FontAwesomeIcon icon={faFileImage} size="4x" />
				</PictureBox>
				<ErrorMesseege
					error={errors.information?.second?.image as FieldError}
				/>
			</ImageContainerColumn>

			<InfoPart2Container>
				<DetailContainer
					placeholder={"Enter a paragraph of the content"}
					{...register(`information.second.info.${0}`)}
					disabled={disabled}
				/>
				<ErrorMesseege error={errors?.information?.second?.info?.[0]} />
				<HeaderPart2Container
					placeholder={"Enter a paragraph of the main content"}
					{...register("information.second.hilight")}
					disabled={disabled}
				/>
				<ErrorMesseege error={errors?.information?.second?.hilight} />
				<DetailContainer
					placeholder={"Enter a paragraph of the content"}
					{...register(`information.second.info2.${0}`)}
					disabled={disabled}
				/>
				<ErrorMesseege error={errors?.information?.second?.info2?.[0]} />
			</InfoPart2Container>
		</StyledPart2Content>
	);
};

export default Part2Style;
