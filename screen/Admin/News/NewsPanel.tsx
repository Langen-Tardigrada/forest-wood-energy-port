"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "@emotion/styled";
import Loading from "../../Loading/Loading";
import { typography } from "@/app/css/typography";
import useSWR from "swr";
import {
	faArrowRightFromBracket,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";

import { FAB } from "../../../components/FAB";
import HighlightCard from "./HighlightCard";
import NewsCard from "./NewsCard";
import { Session } from "next-auth";
import { News } from "./types/news";
import { signOut } from "next-auth/react";

const StyledContainer = styled.div<{ width: number; height: number }>`
	background-color: ${({ theme }) => theme.sys.light.surface};
	display: flex;
	flex-direction: column;
	align-items: center;
	width: ${({ width }) => width}px;
	min-height: ${({ height }) => height}px;
	scrollbar-width: none; /* สำหรับ Firefox */
	padding: 56px 200px;

	&::-webkit-scrollbar {
		display: none; /* ซ่อน scrollbar ใน Chrome, Safari และ Edge */
	}

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 40px;
		padding: 56px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 56px;
		padding: 56px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		gap: 64px;
		padding: 56px 24px;
	}
`;

const ContentCover = styled.div`
	display: flex;
	position: relative;
	flex-direction: column;
	width: calc(100vw - 400px);
	gap: 80px;
	@media (min-width: 0px) and (max-width: 599px) {
		width: 100%;
		gap: 40px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: 100%;
		gap: 56px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		width: 100%;
		gap: 64px;
	}
`;
const HeadingPage = styled.div`
	display: flex;
	width: 100%;
	padding-top: 72px;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.display.small}
`;

const GroupContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 16px;
`;

const Heading = styled.div`
	display: flex;
	width: 100%;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.headline.medium}
`;

const HilightNewsContainerList = styled.div<{ height: number }>`
	display: flex;
	flex-direction: row;
	gap: 24px;
	width: inherit;
	overflow-x: auto;
	white-space: nowrap;
	padding-bottom: 16px;
	box-sizing: content-box;

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) =>
			theme.sys.light["state-layers"]["outline-variant"]["16"]};
	}

	&::-webkit-scrollbar-thumb:hover {
		background: ${({ theme }) =>
			theme.sys.light["state-layers"]["outline-variant"]["16"]};
	}

	scrollbar-width: thin;
	scrollbar-color: ${({ theme }) =>
			theme.sys.light["state-layers"]["outline-variant"][16]}
		transparent;

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
	}
`;

const NewsContainerList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	width: inherit;
	min-height: 240px;
	height: auto;
	max-height: calc(100vh - 160px);
	overflow-y: auto;
	white-space: nowrap;
	padding-right: 8px;
	box-sizing: border-box;

	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) =>
			theme.sys.light["state-layers"]["outline-variant"]["16"]};
	}

	&::-webkit-scrollbar-thumb:hover {
		background: ${({ theme }) =>
			theme.sys.light["state-layers"]["outline-variant"]["16"]};
	}

	scrollbar-width: thin;
	scrollbar-color: ${({ theme }) =>
			theme.sys.light["state-layers"]["outline-variant"][16]}
		transparent;

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
	}
`;

const FABList = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 200px;
	position: fixed;
	top: 50%;
	right: 0px;
	gap: 24px;
	z-index: 3;
`;

interface Props {
	session: Session;
	initialAll: News[]; // ✅ เอามา .map() ได้เลย
	initialHilight: News[];
}
const NewsPanel: React.FC<Props> = ({
	session,
	initialAll,
	initialHilight,
}) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	const fetcher = (url: string) => fetch(url).then((res) => res.json());

	const { data: allNews, mutate: refreshAll } = useSWR("/api/news", fetcher, {
		fallbackData: initialAll,
	});

	const { data: hilightNews, mutate: refreshHilight } = useSWR(
		"/api/news?hilight=true",
		fetcher,
		{
			fallbackData: initialHilight,
		}
	);

	const refreshData = async () => {
		await Promise.all([refreshAll(), refreshHilight()]);
	};

	const handleLogout = () => {
		signOut({
			callbackUrl: "/",
		});
	};

	useLayoutEffect(() => {
		const viewportHeight = window.visualViewport?.height || window.innerHeight;
		const viewportWidth = window.visualViewport?.width || window.innerWidth;
		setHeight(viewportHeight);
		setWidth(viewportWidth);

		const handleResize = () => {
			const viewportHeight =
				window.visualViewport?.height || window.innerHeight;
			const viewportWidth = window.visualViewport?.width || window.innerWidth;
			setHeight(viewportHeight);
			setWidth(viewportWidth);
		};

		window.visualViewport?.addEventListener("resize", handleResize);

		return () => {
			window.visualViewport?.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const handlePageLoad = () => {
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
			<FABList>
				<FAB
					style="tertiary"
					IconName={faPlus}
					onClick={() => {
						"add";
					}}
					size="large"
					feature="link"
					link="/admin/management/news/add"
					ariaLabel="Click to add new news"
				/>
				<FAB
					style="surface"
					IconName={faArrowRightFromBracket}
					onClick={handleLogout}
					size="fab"
					ariaLabel="Click to log out"
				/>
			</FABList>
			<ContentCover>
				<HeadingPage>News Management</HeadingPage>
				<GroupContainer>
					<Heading>Highlight News Management</Heading>
					<HilightNewsContainerList height={height}>
						{hilightNews.length != 0 ? (
							hilightNews.map((item: News) => (
								<HighlightCard
									_id={item.id}
									heading={item.heading}
									date={item.date}
									key={item.id}
									imgUrl={item.imageURL}
									onRefresh={refreshData}
								/>
							))
						) : (
							<></>
						)}
					</HilightNewsContainerList>
				</GroupContainer>
				<GroupContainer>
					<Heading>All News Management</Heading>
					<NewsContainerList>
						{allNews.length != 0 ? (
							allNews.map((item: News) => (
								<NewsCard
									_id={item.id}
									heading={item.heading}
									date={item.date}
									key={item.id}
									imgUrl={item.imageURL}
									onRefresh={refreshData}
								/>
							))
						) : (
							<></>
						)}
					</NewsContainerList>
				</GroupContainer>
			</ContentCover>
		</StyledContainer>
	);
};

export default NewsPanel;
