"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "@emotion/styled";
import Loading from "../Loading/Loading";
import Image from "next/image";
import { typography } from "@/app/css/typography";
import { Button } from "../../components";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { signIn } from "next-auth/react";

const StyledContainer = styled.div<{ width: number; height: number }>`
	background-color: ${({ theme }) => theme.sys.light.surface};
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	position: relative;
	scrollbar-width: none; /* สำหรับ Firefox */
	overflow: hidden;
	gap: 24px;

	@media (min-width: 0px) and (max-width: 599px) {
		grid-template-columns: repeat(4, 1fr);
		gap: 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		grid-template-columns: repeat(8, 1fr);
		gap: 16px;
	}

	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ใน Chrome, Safari และ Edge */
	}
`;

const SignInBackgroundContainer = styled.div`
	display: flex;
	grid-column: 8 / 13;
	padding: 40px;
	height: 100%;
	z-index: 1;
	background-color: rgb(249, 249, 249, 0.6);
	position: relative;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		filter: blur(4px);
		pointer-events: none; /* ทำให้สามารถคลิกผ่าน overlay ได้ */
	}

	@media (min-width: 0px) and (max-width: 599px) {
		grid-template-columns: repeat(4, 1fr);
		padding: 56px 16px;
		gap: 40px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		grid-template-columns: repeat(8, 1fr);
		padding: 56px 32px;
		gap: 40px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 48px 24px;
		gap: 48px;
	}
`;

const SignInContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	justify-content: center;
	gap: 48px;
	position: relative;
	.sign-in-button {
		width: fit-content;
	}
`;

const HeadingContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
`;
const Heading = styled.div`
	display: flex;
	width: 100;
	${typography.headline.large}

	@media (min-width: 0px) and (max-width: 599px) {
		${typography.headline.small}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.headline.medium}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.headline.large}
	}
`;
const Subheading = styled.div`
	display: flex;
	width: 100%;
	${typography.body.large}
`;

const SignInPage: React.FC = () => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useLayoutEffect(() => {
		const viewportHeight = window.visualViewport?.height || window.innerHeight;
		const viewportWidth = window.visualViewport?.width || window.innerWidth;
		setHeight(viewportHeight); // อัปเดตค่า height ของหน้า
		setWidth(viewportWidth); // อัปเดตค่า width ของหน้า

		const handleResize = () => {
			const viewportHeight =
				window.visualViewport?.height || window.innerHeight;
			const viewportWidth = window.visualViewport?.width || window.innerWidth;
			setHeight(viewportHeight); // อัปเดตค่า height ของหน้า
			setWidth(viewportWidth); // อัปเดตค่า width ของหน้า
		};

		window.visualViewport?.addEventListener("resize", handleResize);

		return () => {
			window.visualViewport?.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const handlePageLoad = () => {
			// เมื่อหน้าทั้งหมดโหลดเสร็จ ให้ซ่อน loading screen
			setIsLoading(false);
		};

		if (document.readyState === "complete") {
			handlePageLoad();
		} else {
			window.addEventListener("load", handlePageLoad);
		}

		return () => {
			window.removeEventListener("load", handlePageLoad);
		};
	}, []);

	if (isLoading) {
		return <Loading width={width} height={height} />;
	}

	return (
		<StyledContainer width={width} height={height}>
			<Image
				src={
					"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/login/fog.png"
				}
				fill
				alt="foggy forest"
				style={{
					objectFit: "cover",
					zIndex: 0,
				}}
			/>
			<SignInBackgroundContainer>
				<SignInContainer>
					<HeadingContainer>
						<Heading>Administrator Access Required</Heading>
						<Subheading>
							This section is reserved for system administrators.
						</Subheading>
					</HeadingContainer>
					<Button
						labelText="SIGN IN WITH GOOGLE ACCOUNT"
						showIcon="pre"
						className="sign-in-button"
						IconName={faGoogle}
						onClick={() => {
							signIn("google", { callbackUrl: "/admin/management/news" });
						}}
						ariaLabel="Click to sign in"
					/>
				</SignInContainer>
			</SignInBackgroundContainer>
		</StyledContainer>
	);
};

export default SignInPage;
