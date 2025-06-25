"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import Loading from "../../../Loading/Loading";
import ContentContainer from "./ContentContainer";
import FABSide from "../../../../components/FABSide";
import { signOut } from "next-auth/react";
import { StyledContainer } from "../../../../components/AddEditComponent";

//TODO: Refactor css and component again  with edit news container
const AddContentPage: React.FC = () => {
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

	const handleLogout = () => {
		signOut({
			callbackUrl: "/",
		});
	};

	return (
		<StyledContainer width={width}>
			<FABSide
				buttonUpUrl="/admin/management/news"
				onClickSignOut={handleLogout}
			/>
			<ContentContainer width={width} height={height} />
		</StyledContainer>
	);
};

export default AddContentPage;
