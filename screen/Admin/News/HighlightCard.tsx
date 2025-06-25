"use client";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { typography } from "@/app/css/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { faThumbTackSlash } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../../components";

const UnmarkContianer = styled.div`
	display: flex;
	flex-direction: column;
	height: 0px;
	opacity: 0;
	visibility: hidden;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 1;
	width: 100%;
	color: ${({ theme }) => theme.sys.light["inverse-on-surface"]};
	gap: 8px;
`;

const TextCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 16px;
`;
const HilightCardHeading = styled.div`
	display: flex;
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	${typography.title.medium};
	color: ${({ theme }) => theme.sys.light["on-surface"]};
`;
const HilightCardDate = styled.div`
	display: flex;
	width: 100%;
	${typography.body.medium};
	color: ${({ theme }) => theme.sys.light["on-surface-variant"]};
`;

const HilightNewsCardContainer = styled.button`
	all: unset;
	display: flex;
	flex-direction: column;
	width: calc(((100vw - 400px) - (24px * 4)) / 5);
	height: calc(((100vw - 400px) - (24px * 4)) / 5);
	position: relative;
	flex-shrink: 0;
	border-radius: 16px;
	background-color: ${({ theme }) => theme.sys.light["surface-container-low"]};

	@media (min-width: 0px) and (max-width: 599px) {
		width: 100%;
		height: calc((100vw - 32px) * 0.6);
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: calc((100vw - (16 * 3px)) / 2);
		height: calc((100vw - (16 * 3px)) / 2 * 0.8);
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		width: calc(((100vw) - (24px * 3)) / 4);
		height: calc(((100vw) - (24px * 3)) / 4 * 0.8);
	}

	@media (min-width: 1200px) and (max-width: 1599px) {
		width: calc(((100vw - 400px) - (24px * 3)) / 4);
		height: calc(((100vw - 400px) - (24px * 3)) / 4 * 0.8);
	}
	&:enabled {
		box-shadow: none;
	}
	&:hover {
		cursor: pointer;
	}
	&:focus-visible {
		outline: none;
	}
	&:disabled {
		cursor: default;
	}

	&:hover:disabled {
		cursor: default;
		box-shadow: none;
	}

	&:hover ${TextCardContainer} {
		padding: 0;
		height: 0;
		opacity: 0;
		overflow: hidden;
		transition: all 0.3s ease;
	}
	&:hover ${UnmarkContianer} {
		height: auto;
		visibility: visible;
		opacity: 1;
		transition: all 0.3s ease;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 100%;
	height: -webkit-fill-available;
	border-radius: 16px;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(4px);
		opacity: 0;
		transition: 0.3s ease;
		pointer-events: none;
		z-index: 1;
	}

	${HilightNewsCardContainer}:hover &::before {
		opacity: 1;
	}

	${HilightNewsCardContainer}:active &::before {
		opacity: 1;
		background: rgba(0, 0, 0, 0.38);
	}
	${HilightNewsCardContainer}:focus-visible &::before {
		opacity: 1;
		background: rgba(0, 0, 0, 0.38);
	}
`;

const UnmarkLabel = styled.div`
	display: flex;
	${typography.title.medium}
`;

interface Props {
	_id: string;
	heading: string;
	date: Date;
	imgUrl: string;
	onRefresh: () => void;
}
const HighlightCard: React.FC<Props> = ({
	_id,
	heading,
	date,
	imgUrl,
	onRefresh,
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const DEFAULT_IMAGE =
		"https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/login/fog.png";

	async function handleUnPin() {
		const res = await fetch("/api/news", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				id: _id,
				update: {
					isHilight: false, // หรือ false
				},
			}),
		});

		if (res.ok) {
			onRefresh();
		} else {
			const result = await res.json();
			alert(`❌ Error: ${result.error}`);
		}
	}

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
		return <p> Highlight Card is loading...</p>;
	}

	return (
		<HilightNewsCardContainer type="button" onClick={handleUnPin}>
			<ImageContainer>
				<Image
					src={imgUrl != null && imgUrl !== "" ? imgUrl : DEFAULT_IMAGE}
					alt={"hilight"}
					fill
					style={{
						objectFit: "cover",
						zIndex: 0,
					}}
				/>
				<UnmarkContianer>
					<FontAwesomeIcon icon={faThumbTackSlash} size="2x" />
					<UnmarkLabel>Unpin</UnmarkLabel>
				</UnmarkContianer>
			</ImageContainer>
			<TextCardContainer>
				<HilightCardHeading>{heading}</HilightCardHeading>
				<HilightCardDate>{formatDate(date)}</HilightCardDate>
			</TextCardContainer>
		</HilightNewsCardContainer>
	);
};

export default HighlightCard;
