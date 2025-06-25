"use client";
import React, { useState } from "react";
import PicturePart from "./PicturePart";
import Part1Style from "./Part1Style";
import Part2Style from "./Part2Style";
import Part3Style from "./Part3Style";
import { useForm } from "react-hook-form";
import { Button } from "../../../../components";
import { faTrashCan, faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { NewsFormValues, newsSchema } from "../yupNewsSchema";
import { ErrorMesseege } from "../../../../components/NewsAdmin";
import { yupResolver } from "@hookform/resolvers/yup";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
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
}

const ContentContainer: React.FC<Props> = ({ width, height }) => {
	const [isWriting, setIswriting] = useState<boolean>(false);

	const {
		register,
		handleSubmit,
		control,
		setValue,
		getValues,
		reset,
		formState,
	} = useForm<NewsFormValues>({
		resolver: yupResolver(newsSchema),
		defaultValues: {
			id: uuidv4(),
			date: new Date(),
			heading: "",
			introduction: "",
			image: null,
			isHilight: false,
			information: {
				first: {
					info: {
						heading: "",
						description: [],
					},
					quote: "",
				},
				second: {
					image: null,
					info: [],
					hilight: "",
					info2: [],
				},
				third: {
					heading: "",
					info: [],
					hilight: "",
					info2: [],
					image: null,
					info3: [],
				},
			},
		},
	});

	const router = useRouter();

	const handleDiscard = () => {
		const confirmed = confirm("Discard changes? This will clear all fields.");
		if (confirmed) {
			reset();
			setIswriting(false);
		}
	};

	const onSubmit = async (data: NewsFormValues) => {
		const form = new FormData();

		// ✅ รูปภาพ
		if (data.image instanceof File) {
			form.append("coverImage", data.image);
		}
		if (data.information.second.image instanceof File) {
			form.append("secondImage", data.information.second.image);
		}
		if (data.information.third.image instanceof File) {
			form.append("thirdImage", data.information.third.image);
		}

		form.append("date", new Date().toISOString());
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

		const res = await fetch("/api/news", {
			method: "POST",
			body: form,
		});

		if (res.ok) {
			alert("✅ News created successfully!");
			router.push("/admin/management/news");
		} else {
			const result = await res.json();
			alert(`❌ Error: ${result.error}`);
		}
	};

	return (
		<StyledContent
			onSubmit={handleSubmit(onSubmit)}
			className={`${lora.variable}`}
		>
			<HeadingContainer>
				<HeadingPage>Add News</HeadingPage>
				<ButtonController>
					{isWriting ? (
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
								showIcon="pre"
								labelText="Save"
								stateProp="enabled"
								IconName={faFloppyDisk}
								type="submit"
								ariaLabel="Click to save changes"
							/>
						</>
					) : (
						<Button
							style="filled"
							showIcon="pre"
							labelText="Write"
							stateProp="enabled"
							IconName={faPencil}
							type="button"
							onClick={() => {
								setIswriting(true);
							}}
							ariaLabel="Click to write news"
						/>
					)}
				</ButtonController>
			</HeadingContainer>
			<FillInputBox
				placeholder="Headline displayed in the stacked card layout"
				{...register("heading")}
				disabled={!isWriting}
			/>
			<ErrorMesseege error={formState.errors.heading} />
			<FillTextAreaBox
				placeholder={"Write a short intro — shown in the stacked card layout"}
				{...register("introduction")}
				disabled={!isWriting}
			/>
			<ErrorMesseege error={formState.errors.introduction} />
			<PicturePart
				height={height}
				errors={formState.errors}
				setValue={setValue}
				disabled={!isWriting}
			/>
			<ContentPartContainer>
				<Part1Style
					register={register}
					errors={formState.errors}
					disabled={!isWriting}
				/>
				<Part2Style
					register={register}
					errors={formState.errors}
					setValue={setValue}
					disabled={!isWriting}
				/>
				<Part3Style
					width={width}
					height={height}
					register={register}
					errors={formState.errors}
					setValue={setValue}
					disabled={!isWriting}
				/>
			</ContentPartContainer>
		</StyledContent>
	);
};
export default ContentContainer;
