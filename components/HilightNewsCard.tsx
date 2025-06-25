"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Button, formatDate } from "../components";
import { News } from "../screen/Admin/News/types/news";
import Link from "next/link";
import Image from "next/image";
import { typography } from "../src/app/css/typography";

const HilightNewsCardContainer = styled.div<{ width: number; height: number }>`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	width: ${({ width }) => width - 80}px;
	height: ${({ height }) => height}px;
	align-items: center;
	flex-shrink: 0;
	border-radius: 16px;
	background-color: ${({ theme }) => theme.sys.light["surface-container-low"]};
	@media (min-width: 0px) and (max-width: 599px) {
		width: ${({ width }) => width - 32 - 12}px;
		display: flex;
		flex-direction: column;
		margin: 8px;

		&:enabled {
			box-shadow: none;
		}
		&:hover {
			//evalation light 2
			box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
				0px 2px 6px 2px rgba(0, 0, 0, 0.15);
			cursor: pointer;
		}
		&:active {
			//evalation light 4
			box-shadow: 0px 6px 10px 4px rgba(0, 0, 0, 0.15),
				0px 2px 3px 0px rgba(0, 0, 0, 0.3);
		}
		&:focus-visible {
			// evalation light 3
			box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
				0px 1px 3px 0px rgba(0, 0, 0, 0.3);
			outline: none;
		}
		&:disabled {
			cursor: none;
		}
		&:hover:disabled {
			cursor: none;
			box-shadow: none;
		}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: ${({ width }) => width - 64 - 12}px;
		display: flex;
		flex-direction: column;
		margin: 8px;

		&:enabled {
			box-shadow: none;
		}
		&:hover {
			//evalation light 2
			box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
				0px 2px 6px 2px rgba(0, 0, 0, 0.15);
			cursor: pointer;
		}
		&:active {
			//evalation light 4
			box-shadow: 0px 6px 10px 4px rgba(0, 0, 0, 0.15),
				0px 2px 3px 0px rgba(0, 0, 0, 0.3);
		}
		&:focus-visible {
			// evalation light 3
			box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
				0px 1px 3px 0px rgba(0, 0, 0, 0.3);
			outline: none;
		}
		&:disabled {
			cursor: none;
		}
		&:hover:disabled {
			cursor: none;
			box-shadow: none;
		}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		width: ${({ width }) => width - 48}px;
	}
`;
const ImageContainer = styled.div`
	display: flex;
	grid-column: 1 / span 6;
	height: -webkit-fill-available;
	position: relative;
	border-radius: 16px;
	overflow: hidden;

	@media (min-width: 0px) and (max-width: 599px) {
		width: 100%;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: 100%;
	}
`;
const ContentContainer = styled.div`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	gap: 24px;
	align-items: flex-start;
	padding: 40px;
	align-self: stretch;
	justify-content: space-between;
	grid-column: 7 / span 6;
	height: inherit;
	box-sizing: border-box;
	@media (min-width: 0px) and (max-width: 599px) {
		padding: 24px;
		gap: 16px;
		height: auto;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 16px;
		gap: 16px;
		height: auto;
	}
`;
const HeadlineLabel = styled.div`
	display: flex;
	align-items: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.headline.medium}
	align-self: stretch;
	white-space: normal;
	@media (min-width: 0px) and (max-width: 599px) {
		${typography.title.large}
		font-size: 18px
	}

	@media (min-width: 600px) and (max-width: 839px) {
		${typography.title.large}
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		${typography.headline.small}
	}
`;
const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	text-align: justify;
	word-break: break-word;
	align-content: stretch;
	@media (min-width: 0px) and (max-width: 599px) {
		gap: 8px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 16px;
	}
`;
const DateLabel = styled.div`
	display: flex;
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light.outline};
	${typography.label.medium}
`;
const ContentLabel = styled.div<{ $line: number }>`
	display: -webkit-box;
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.body.large}
	text-overflow: ellipsis;
	overflow: hidden;
	word-break: break-word;
	white-space: normal;
	height: auto;
	-webkit-line-clamp: ${({ $line }) => $line}; /* กำหนดจำนวนบรรทัด */
	-webkit-box-orient: vertical;
	@media (min-width: 0px) and (max-width: 839px) {
		${typography.body.medium}
	}
`;
const ButtonContainer = styled.div`
	display: flex;
	height: auto;
	flex-direction: column;
	justify-content: flex-end;
`;
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;
	text-align: justify;
	word-break: break-word;
	align-content: stretch;
	box-sizing: border-box;
	height: -webkit-fill-available;
	@media (min-width: 0px) and (max-width: 599px) {
		gap: 16px;
		height: auto;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 16px;
		height: auto;
	}
`;
interface Props {
	width: number;
	height: number;
	news: News;
}

const HilightNewsCard: React.FC<Props> = ({ width, height, news }) => {
	const contentRef = useRef<HTMLDivElement | null>(null);
	const headlineContainerRef = useRef<HTMLDivElement | null>(null);
	const newsContainerRef = useRef<HTMLDivElement | null>(null);
	const infoRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLDivElement | null>(null);
	const [lineClamp, setLineClamp] = useState(0);

	const newsHeight = () => {
		if (width < 600) {
			return height * 0.625;
		} else if (width < 840) {
			return height * 0.465;
		} else {
			return height * 0.38;
		}
	};

	useEffect(() => {
		if (
			contentRef.current &&
			headlineContainerRef.current &&
			newsContainerRef.current &&
			buttonRef.current &&
			infoRef.current
		) {
			const headlineCont = headlineContainerRef.current;
			const newsCont = newsContainerRef.current;
			const contentHeight =
				newsHeight() -
				parseFloat(getComputedStyle(newsCont).gap) -
				parseFloat(getComputedStyle(infoRef.current).gap) -
				headlineCont.clientHeight -
				buttonRef.current.clientHeight -
				parseFloat(getComputedStyle(newsCont).paddingTop) * 2;
			const lineHeight = parseFloat(
				getComputedStyle(contentRef.current).lineHeight
			);
			const calculatedLines = Math.round(contentHeight / lineHeight);
			if (width > 839) {
				setLineClamp(calculatedLines); // ตั้งค่า line clamp ตามจำนวนบรรทัดที่คำนวณได้
			} else {
				setLineClamp(2);
			}
		}
	}, [height, width]); // คำนวณใหม่เมื่อ height หรือ width เปลี่ยน

	return (
		<>
			{width < 840 ? (
				<Link
					href={`/media/news/${news.id}`}
					style={{ textDecoration: "none" }}
				>
					<HilightNewsCardContainer width={width} height={newsHeight()}>
						<ImageContainer>
							<Image
								src={news.imageURL}
								alt={"hilight news card image"}
								fill
								style={{
									objectFit: "cover",
									objectPosition: "center",
									zIndex: 0,
								}}
								priority
							/>
						</ImageContainer>
						<ContentContainer ref={newsContainerRef}>
							<InfoContainer ref={infoRef}>
								<HeaderContainer ref={headlineContainerRef}>
									<HeadlineLabel>{news.heading}</HeadlineLabel>
									<DateLabel>{formatDate(news.date)}</DateLabel>
								</HeaderContainer>
								<ContentLabel ref={contentRef} $line={lineClamp}>
									{lineClamp == 0 ? "" : news.introduction}
								</ContentLabel>
							</InfoContainer>
						</ContentContainer>
					</HilightNewsCardContainer>
				</Link>
			) : (
				<HilightNewsCardContainer width={width} height={newsHeight()}>
					<ImageContainer>
						<Image
							src={news.imageURL}
							alt={"hilight news card image"}
							fill
							style={{
								objectFit: "cover",
								objectPosition: "center",
								zIndex: 0,
							}}
							priority
							// placeholder="blur"
							// blurDataURL={""}
						/>
					</ImageContainer>
					<ContentContainer ref={newsContainerRef}>
						<InfoContainer ref={infoRef}>
							<HeaderContainer ref={headlineContainerRef}>
								<HeadlineLabel>{news.heading}</HeadlineLabel>
								<DateLabel>{formatDate(news.date)}</DateLabel>
							</HeaderContainer>
							<ContentLabel ref={contentRef} $line={lineClamp}>
								{lineClamp == 0 ? "" : news.introduction}
							</ContentLabel>
						</InfoContainer>
						<ButtonContainer ref={buttonRef}>
							<Button
								labelText={"Read More"}
								style="outlined"
								feature="link"
								link={`/media/news/${news.id}`}
								ariaLabel="Click to read more"
							/>
						</ButtonContainer>
					</ContentContainer>
				</HilightNewsCardContainer>
			)}
		</>
	);
};

export default HilightNewsCard;
