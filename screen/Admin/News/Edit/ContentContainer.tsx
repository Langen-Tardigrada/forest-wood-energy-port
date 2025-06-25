"use client";
import React, { useEffect, useState } from "react";
import PicturePart from "./PicturePart";
import Part1Style from "./Part1Style";
import Part2Style from "./Part2Style";
import Part3Style from "./Part3Style";
import { useForm } from "react-hook-form";
import { Button } from "../../../../components";
import { faTrashCan, faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { NewsFormValues, newsSchema } from "../yupNewsSchema";
import { ErrorMesseege } from "../../../../components/NewsAdmin";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { News } from "../types/news";
import axios from "axios";
import {
	ButtonController,
	ContentPartContainer,
	FillInputBox,
	FillTextAreaBox,
	HeadingContainer,
	HeadingPage,
	StyledContent,
} from "../../../../components/AddEditComponent";
import { lora } from "../../../../src/app/css/fonts";

interface Props {
	width: number;
	height: number;
	news: News;
}

const ContentContainer: React.FC<Props> = ({ width, height, news }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(
		news.imageURL
	);
	const [previewSdImageUrl, setPreviewSdImageUrl] = useState<string | null>(
		news.information.second.imageURL
	);
	const [previewRdImageUrl, setPreviewRdImageUrl] = useState<string | null>(
		news.information.third.imageURL
	);
	const [removeCoverImg, setRemoveCoverImg] = useState<boolean>(false);
	const [removeSecondImg, setRemoveSecondImg] = useState<boolean>(false);
	const [removeThirdImg, setRemoveThirdImg] = useState<boolean>(false);

	const router = useRouter();

	const {
		register,
		handleSubmit,
		control,
		setValue,
		getValues,
		reset,
		formState: { errors },
	} = useForm<NewsFormValues>({
		resolver: yupResolver(newsSchema),
		defaultValues: {
			id: news.id,
			date: new Date(news.date),
			heading: news.heading,
			introduction: news.introduction,
			image: null,
			isHilight: news.isHilight,
			information: {
				first: {
					info: {
						heading: news.information.first.info.heading,
						description: news.information.first.info.description,
					},
					quote: news.information.first.quote,
				},
				second: {
					image: null,
					info: news.information.second.info,
					hilight: news.information.second.hilight,
					info2: news.information.second.info2,
				},
				third: {
					heading: news.information.third.heading,
					info: news.information.third.info,
					hilight: news.information.third.hilight,
					info2: news.information.third.info2,
					image: null,
					info3: news.information.third.info3,
				},
			},
		},
	});

	useEffect(() => {
		if (news) {
			setValue("heading", news.heading);
			setValue("introduction", news.introduction);
			setValue(
				"information.first.info.heading",
				news.information.first.info.heading
			);
			setValue(
				"information.first.info.description",
				news.information.first.info.description
			);
			setValue("information.first.quote", news.information.first.quote);

			setValue("information.second.info", news.information.second.info);
			setValue("information.second.hilight", news.information.second.hilight);
			setValue("information.second.info2", news.information.second.info2);

			setValue("information.third.heading", news.information.third.heading);
			setValue("information.third.info", news.information.third.info);
			setValue("information.third.hilight", news.information.third.hilight);
			setValue("information.third.info2", news.information.third.info2);
			setValue("information.third.info3", news.information.third.info3);
		}
	}, [news]);

	const onSubmit = async (data: NewsFormValues) => {
		const form = new FormData();

		if (data.image instanceof File) {
			form.append("coverImage", data.image);
		}

		if (data.information.second.image instanceof File) {
			form.append("secondImage", data.information.second.image);
		}

		if (data.information.third.image instanceof File) {
			form.append("thirdImage", data.information.third.image);
		}

		if (removeCoverImg && previewImageUrl != "") {
			form.append("removeCoverImage", "true");
		}
		if (removeSecondImg && previewSdImageUrl != "") {
			form.append("removeSecondImage", "true");
		}
		if (removeThirdImg && previewRdImageUrl != "") {
			form.append("removeThirdImage", "true");
		}

		form.append("id", news.id);
		form.append("heading", data.heading);
		form.append("introduction", data.introduction);
		form.append("hilight", data.isHilight ? "true" : "false");

		form.append("heading1", data.information.first.info.heading);
		data.information.first.info.description
			.filter((t): t is string => typeof t === "string" && t.trim() !== "")
			.forEach((t) => form.append("description1", t));
		form.append("quote", data.information.first.quote);

		data.information.second.info
			.filter((t): t is string => typeof t === "string" && t.trim() !== "")
			.forEach((t) => form.append("info2", t));
		data.information.second.info2
			.filter((t): t is string => typeof t === "string" && t.trim() !== "")
			.forEach((t) => form.append("info2_2", t));
		form.append("hilight2", data.information.second.hilight);

		form.append("heading3", data.information.third.heading);
		data.information.third.info
			.filter((t): t is string => typeof t === "string" && t.trim() !== "")
			.forEach((t) => form.append("info3", t));

		form.append("hilight3", data.information.third.hilight);
		data.information.third.info2
			.filter((t): t is string => typeof t === "string" && t.trim() !== "")
			.forEach((t) => form.append("info3_2", t));

		data.information.third.info3
			.filter((t): t is string => typeof t === "string" && t.trim() !== "")
			.forEach((t) => form.append("info3_3", t));

		console.log(form instanceof FormData, form);

		try {
			const _append = form.append.bind(form);
			form.append = function (key, val) {
				console.trace("form.append called with", key, val);
				return _append(key, val);
			};

			const res = await axios.put("/api/news", form, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			const result = res.data;

			if (res.status === 200) {
				alert("✅ News updated successfully!");
				router.push("/admin/management/news");
			} else {
				alert(`❌ Error: ${result.error}`);
			}
		} catch (err) {
			console.error("❌ PUT /api/news failed:", err);
			alert("❌ Failed to update news. Please try again.");
		}
	};

	const handleDiscard = () => {
		const confirmed = confirm("Discard changes?");
		if (confirmed) {
			reset(news);
			setPreviewImageUrl(news.imageURL);
			setIsEditing(false);
			setPreviewSdImageUrl(news.information.second.imageURL);
			setPreviewRdImageUrl(news.information.third.imageURL);
			if (news.imageURL !== "") {
				setValue("image", news.imageURL);
			} else {
				setValue("image", null);
			}

			alert("✅ Reverted to original data.");
		}
	};

	return (
		<StyledContent
			onSubmit={handleSubmit(onSubmit)}
			className={`${lora.variable}`}
		>
			<HeadingContainer>
				<HeadingPage>Edit News</HeadingPage>
				<ButtonController>
					{isEditing ? (
						<>
							<Button
								style="outlined"
								showIcon="pre"
								labelText="Discard"
								stateProp="enabled"
								IconName={faTrashCan}
								onClick={handleDiscard}
								ariaLabel="Click to discard changes"
							/>
							<Button
								style="filled"
								type="submit"
								showIcon="pre"
								labelText="Save"
								stateProp="enabled"
								ariaLabel="Click to save changes"
								IconName={faFloppyDisk}
							/>
						</>
					) : (
						<Button
							style="filled"
							showIcon="pre"
							labelText="Edit"
							stateProp="enabled"
							ariaLabel="Click to cancel editing"
							IconName={faPencil}
							onClick={() => {
								setIsEditing(true);
							}}
						/>
					)}
				</ButtonController>
			</HeadingContainer>
			<FillInputBox
				placeholder="Headline displayed in the stacked card layout"
				{...register("heading")}
				disabled={!isEditing}
			/>
			<ErrorMesseege error={errors.heading} />
			<FillTextAreaBox
				placeholder={"Write a short intro — shown in the stacked card layout"}
				{...register("introduction")}
				disabled={!isEditing}
			/>
			<ErrorMesseege error={errors.introduction} />
			<PicturePart
				isEditing={isEditing}
				height={height}
				imageUrl={news.imageURL}
				errors={errors}
				setValue={setValue}
				previewImageUrl={previewImageUrl}
				setPreviewImageUrl={setPreviewImageUrl}
				setRemoveImage={setRemoveCoverImg}
			/>
			<ContentPartContainer>
				<Part1Style register={register} errors={errors} isEditing={isEditing} />
				<Part2Style
					register={register}
					errors={errors}
					setValue={setValue}
					isEditing={isEditing}
					previewImageUrl={previewSdImageUrl}
					setPreviewImageUrl={setPreviewSdImageUrl}
					setRemoveImage={setRemoveSecondImg}
				/>
				<Part3Style
					width={width}
					height={height}
					register={register}
					errors={errors}
					setValue={setValue}
					isEditing={isEditing}
					previewImageUrl={previewRdImageUrl}
					setPreviewImageUrl={setPreviewRdImageUrl}
					setRemoveImage={setRemoveThirdImg}
				/>
			</ContentPartContainer>
		</StyledContent>
	);
};
export default ContentContainer;
