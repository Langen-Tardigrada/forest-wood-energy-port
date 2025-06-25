"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "../../components";
import { useTheme } from "@emotion/react";
import { typography } from "../../src/app/css/typography";

const StyledPart = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: start;
	position: relative;
	width: 100%;
	height: auto;
	box-sizing: border-box;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	padding: 120px 40px;
	gap: 40px;
	@media (min-width: 0px) and (max-width: 599px) {
		gap: 32px;
		flex-direction: column;
		padding: 72px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 32px;
		flex-direction: column;
		padding: 64px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		gap: 40px;
		padding: 40px 24px;
	}
`;
const ContactContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 0 0;
	height: -webkit-fill-available;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	gap: 16px;
	@media (min-width: 0px) and (max-width: 599px) {
		height: auto;
		width: inherit;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		height: auto;
		width: inherit;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		height: auto;
		width: inherit;
	}
`;
const ContactFillInfoBox = styled.form`
	display: flex;
	flex-direction: column;
	flex: 1 0 0;
	height: auto;
	gap: 64px;

	.submit {
		width: 100%;
	}

	@media (min-width: 0px) and (max-width: 599px) {
		height: auto;
		width: inherit;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		height: auto;
		width: inherit;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		height: auto;
		width: inherit;
	}
`;
const ContactHeadline = styled.div`
	display: flex;
	position: relative;
	align-self: stretch;
	${typography.display.large}
	@media (min-width: 0px) and (max-width: 599px) {
		${typography.headline.medium}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.headline.large}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.headline.small}
	}
`;
const ContactSubhead = styled.div`
	display: flex;
	position: relative;
	align-self: stretch;
	${typography.body.large}
`;
const ContactIMGContainer = styled.div<{ $url: string; height: number }>`
	display: flex;
	width: 100%;
	height: ${({ height }) => height}px;
	background-image: url(${({ $url }) => $url});
	background-position: 50% 50%;
	background-size: contain;
	background-repeat: no-repeat;
`;
const FillContainer = styled.div`
	display: flex;
	width: 100%;
	height: auto;
	flex-direction: column;
	gap: 8px;
	align-items: flex-start;
	align-self: stretch;
`;
const PhoneNoFillContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
	align-items: flex-start;
	align-self: stretch;
	gap: 16px;
	.code {
		width: auto;
	}
`;
const FillInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: -webkit-fill-available;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 4px;

	.code {
		width: 50px;
	}
`;
const LabelHeadline = styled.label`
	opacity: 0;
	transition: opacity 0.3s;

	${FillInputContainer}:hover & {
		opacity: 1;
	}
	${typography.label.large}
	color: ${({ theme }) => theme.sys.light.outline};
`;
const LabelNotify = styled.label<{ color: string; $show: boolean }>`
	${typography.label.small}
	color: ${({ color }) => color};
	opacity: ${({ $show }) => ($show ? 1 : 0)};
	transition: opacity 0.3s;
`;
const FillInputBox = styled.input`
	display: inline-flex;
	padding: 8px 16px;
	width: -webkit-fill-available;
	align-items: center;
	${typography.body.large}
	background: none;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.sys.light.outline};
	border-radius: 4px 4px 0px 0px;
	color: ${({ theme }) => theme.sys.light["on-surface"]};

	&:focus {
		border-bottom: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border-bottom: 1px solid ${({ theme }) => theme.sys.light.primary};
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
`;
const FillTextAreaBox = styled.textarea`
	display: inline-flex;
	padding: 8px 16px;
	width: -webkit-fill-available;
	align-items: center;
	${typography.body.large}
	background: none;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.sys.light.outline};
	border-radius: 4px 4px 0px 0px;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	min-height: 256px;

	&:focus {
		border-bottom: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border-bottom: 1px solid ${({ theme }) => theme.sys.light.primary};
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
`;

const validationSchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	email: Yup.string()
		.matches(
			/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			"Invalid email address"
		)
		.required("Email is required"),
	code: Yup.string()
		.matches(/^\+\d{1,3}$/, "Invalid code country")
		.required("Country code is required"),
	phone: Yup.string()
		.matches(/^\d{1,3}([-.\s]?\d{2,4}){1,4}$/, "Invalid phone number")
		.required("Phone number is required"),
	subject: Yup.string().required("Subject is required"),
	message: Yup.string().required("Message is required"),
});

type FormData = {
	name: string;
	email: string;
	code: string;
	phone: string;
	subject: string;
	message: string;
};
interface InputProps {
	name: "Name" | "Email" | "Code" | "Phone No." | "Subject" | "Message";
	placeHolder: string;
	type: string;
	errorMes?: string;
	register: any;
	as?: string;
	onChange?: (e: any) => void;
}
const InputBox: React.FC<InputProps> = ({
	name,
	placeHolder,
	type,
	errorMes,
	register,
	as,
	onChange,
}) => {
	const theme = useTheme();
	return (
		<FillInputContainer className={name === "Code" ? "code" : ""}>
			<LabelHeadline>{name}</LabelHeadline>
			{as === "textarea" ? (
				<FillTextAreaBox type={type} {...register} placeholder={placeHolder} />
			) : (
				<FillInputBox
					type={type}
					{...register}
					placeholder={placeHolder}
					onChange={onChange}
					className={name === "Code" ? "code" : ""}
				/>
			)}
			<LabelNotify
				$show={errorMes != undefined ? true : false}
				color={theme.sys.light.error}
			>
				{errorMes}
			</LabelNotify>
		</FillInputContainer>
	);
};

interface Props {
	width: number;
	height: number;
	url: string;
	ref: React.MutableRefObject<HTMLDivElement | null>;
}
const ContactPart = React.forwardRef<HTMLDivElement, Props>(
	({ width, height, url }, ref) => {
		const {
			register,
			handleSubmit,
			formState: { errors },
			setValue,
		} = useForm<FormData>({
			resolver: yupResolver(validationSchema),
		});

		const contactFilledBoxRef = useRef<HTMLFormElement | null>(null);
		const [filledBoxHeight, setFilledBoxHeight] = useState<number>(0);

		const sendContactEmail = async (info: FormData) => {
			const response = await fetch("/api/sendEmail", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: info.name,
					userEmail: info.email,
					phone: info.code + " " + info.phone,
					subject: info.subject,
					message: info.message,
				}),
			});

			const data = await response.json();
			if (response.ok) {
				console.log("Email sent:", data);
				alert("Send text successfully!");
			} else {
				console.error("Error sending email:", data);
				alert(
					"Unable to send text. Something went wrong. Please try again, or contact us through another channel."
				);
			}
		};

		const onSubmit = (data: FormData) => {
			console.log("Form data:", data);
			sendContactEmail(data);
		};

		const formatPhoneNumber = (value: string) => {
			// ลบตัวอักษรที่ไม่ใช่ตัวเลข
			let cleanedValue = value.replace(/\D/g, "");

			// จำกัดความยาวของเบอร์โทรศัพท์ให้อยู่ระหว่าง 7-11 หลัก
			if (cleanedValue.length > 11) {
				cleanedValue = cleanedValue.slice(0, 11);
			}

			let formattedValue = "";

			// จัดรูปแบบตามความยาวของหมายเลขโทรศัพท์
			if (cleanedValue.length === 7) {
				formattedValue = `${cleanedValue.slice(0, 2)}-${cleanedValue.slice(
					2,
					4
				)}-${cleanedValue.slice(4)}`;
			} else if (cleanedValue.length === 8) {
				formattedValue = `${cleanedValue.slice(0, 1)}-${cleanedValue.slice(
					1,
					3
				)}-${cleanedValue.slice(3, 5)}-${cleanedValue.slice(5)}`;
			} else if (cleanedValue.length === 9) {
				formattedValue = `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(
					3,
					5
				)}-${cleanedValue.slice(5)}`;
			} else if (cleanedValue.length === 10) {
				formattedValue = `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(
					3,
					6
				)}-${cleanedValue.slice(6)}`;
			} else if (cleanedValue.length === 11) {
				formattedValue = `${cleanedValue.slice(0, 3)}-${cleanedValue.slice(
					3,
					6
				)}-${cleanedValue.slice(6)}`;
			} else {
				formattedValue = cleanedValue;
			}

			// อัปเดตฟิลด์ phone ในฟอร์ม
			setValue("phone", formattedValue);
		};

		const handleCountryCodeChange = (e: any) => {
			let value = e.target.value;

			// ถ้าเริ่มต้นด้วย + ให้รักษาไว้ และตัดตัวเลขให้เหลือไม่เกิน 3 หลัก
			if (value.startsWith("+")) {
				value = "+" + value.slice(1).replace(/\D/g, "").slice(0, 3);
			} else {
				// ถ้าไม่มี + ให้เพิ่มและเอาตัวเลขสูงสุด 3 หลัก
				value = "+" + value.replace(/\D/g, "").slice(0, 3);
			}

			setValue("code", value); // ใช้ setValue จาก react-hook-form เพื่ออัปเดตฟอร์ม
		};

		useLayoutEffect(() => {
			if (contactFilledBoxRef.current) {
				setFilledBoxHeight(contactFilledBoxRef.current.offsetHeight);
			}
		}, []);

		return (
			<StyledPart ref={ref}>
				<ContactContainer>
					<ContactHeadline>Contact Us</ContactHeadline>
					<ContactSubhead>
						Contact us for more information or any inquiries about our products.
					</ContactSubhead>
					<ContactIMGContainer $url={"/image.png"} height={filledBoxHeight} />
				</ContactContainer>
				<ContactFillInfoBox
					onSubmit={handleSubmit(onSubmit)}
					ref={contactFilledBoxRef}
				>
					<FillContainer>
						<InputBox
							name="Name"
							register={register("name")}
							placeHolder={"Your Name"}
							type={"text"}
							errorMes={errors.name?.message}
						/>
						<PhoneNoFillContainer>
							<InputBox
								name="Code"
								register={register("code")}
								placeHolder={"+65"}
								type={"tel"}
								errorMes={errors.code?.message}
								onChange={handleCountryCodeChange}
							/>
							<InputBox
								name={"Phone No."}
								register={register("phone")}
								placeHolder={"Your Phone Number"}
								type={"tel"}
								errorMes={errors.phone?.message}
								onChange={(e) => formatPhoneNumber(e.target.value)}
							/>
						</PhoneNoFillContainer>
						<InputBox
							name={"Email"}
							placeHolder={"Your Email"}
							register={register("email")}
							type={"text"}
							errorMes={errors.email?.message}
						/>
						<InputBox
							name={"Subject"}
							placeHolder={"Topic"}
							register={register("subject")}
							type={"text"}
							errorMes={errors.subject?.message}
						/>
						<InputBox
							name={"Message"}
							placeHolder={
								"Hi! If you have any questions or would like assistance, feel free to send a message here."
							}
							register={register("message")}
							type={"text"}
							errorMes={errors.message?.message}
							as="textarea"
						/>
					</FillContainer>
					<Button
						labelText={"SEND"}
						style={"filled"}
						stateProp={"enabled"}
						showIcon={"none"}
						className={"submit"}
						labelTextClassName={undefined}
						IconName={undefined}
						feature={"other"}
						type="submit"
						ariaLabel="Click to sead an email"
					/>
				</ContactFillInfoBox>
			</StyledPart>
		);
	}
);

export default ContactPart;
