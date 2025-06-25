"use client";
import React, { useRef } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-regular-svg-icons";
import { FieldErrors, UseFormSetValue } from "react-hook-form";
import { NewsFormValues } from "../yupNewsSchema";
import { ErrorMesseege } from "../../../../components/NewsAdmin";
import { FieldError } from "react-hook-form";
import CancelButton from "../../../../components/CancelButton";

const PictureContainer = styled.div<{
	height: number;
	backgroundImage: string;
}>`
	background-color: ${({ theme }) => theme.sys.light.surface};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
	height: ${({ height }) => height * 0.7 + 50}px;
	position: relative;
	overflow: hidden;
	border-radius: 16px;

	background-image: ${({ backgroundImage }) =>
		backgroundImage ? `url(${backgroundImage})` : "none"};
	background-size: cover;
	background-position: center;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.sys.light["outline-variant"]};
	font-size: 16px;

	border: 1px dashed ${({ theme }) => theme.sys.light.outline};
	border-radius: 8px;
	padding: 16px;

	&:focus {
		border: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border: 1cap.5 dashed ${({ theme }) => theme.sys.light.primary};
		background-color: ${({ theme }) =>
			theme.sys.light["surface-container-low"]};
		color: ${({ theme }) => theme.sys.light.primary};
		transition: opacity 0.3s;
	}
	&:disabled {
		color: ${({ theme }) => theme.sys.light["outline-variant"]};
		border-bottom: 1px solid
			${({ theme }) => theme.sys.light["outline-variant"]};
	}

	@media (min-width: 0px) and (max-width: 599px) {
		height: ${({ height }) => height * 0.715 + 72}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		height: ${({ height }) => height * 0.51 + 72}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		height: ${({ height }) => height * 0.797 + 50}px;
	}
`;

const HiddenInput = styled.input`
	display: none;
`;
const ImageContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

interface Props {
	height: number;
	imageUrl: string;
	errors: FieldErrors<NewsFormValues>;
	setValue: UseFormSetValue<NewsFormValues>;
	isEditing: boolean;
	previewImageUrl: string | null;
	setPreviewImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
	setRemoveImage: React.Dispatch<React.SetStateAction<boolean>>;
}

const PicturePart: React.FC<Props> = ({
	height,
	imageUrl,
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

			setValue("image", file, { shouldValidate: true });
			console.log(url);
		}
	};

	const handleCancle = () => {
		setRemoveImage(true);
		setPreviewImageUrl(null);
		setValue("image", null);
	};
	return (
		<ImageContainerColumn>
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
			<PictureContainer
				height={height}
				onClick={handleClick}
				backgroundImage={previewImageUrl || ""}
			>
				{!previewImageUrl} <FontAwesomeIcon icon={faFileImage} size="4x" />
			</PictureContainer>
			<ErrorMesseege error={errors?.image as FieldError} />
		</ImageContainerColumn>
	);
};

export default PicturePart;
