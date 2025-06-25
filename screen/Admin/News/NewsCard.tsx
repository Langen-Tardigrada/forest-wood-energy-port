"use client";
import React from "react";
import styled from "@emotion/styled";
import { typography } from "@/app/css/typography";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { Button } from "../../../components/Button";
import { faPencil, faThumbTack } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "../../../components";
import { useRouter } from "next/navigation";

const InfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	align-items: center;
	gap: 16px;
`;

const ButtonListContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	gap: 8px;
	width: 100%;
	align-items: center;
	height: 0;
	visibility: hidden;
	margin: -2px;
	padding: 2px;
	opacity: 0;

	.button-delete {
		color: ${({ theme }) => theme.sys.light.error};
	}

	.button-delete:hover {
		background-color: ${({ theme }) =>
			theme.sys.light["state-layers"].error["08"]};
	}
`;

const NewsCardContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 210px;
	position: relative;
	flex-shrink: 0;
	border-radius: 16px;
	background-color: ${({ theme }) => theme.sys.light["surface-container-low"]};

	@media (min-width: 0px) and (max-width: 599px) {
		height: calc((100vw - 32px) * 0.6);
	}

	@media (min-width: 600px) and (max-width: 839px) {
		height: calc((100vw - (16 * 3px)) / 2 * 0.8);
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		height: calc(((100vw) - (24px * 3)) / 4 * 0.8);
	}

	@media (min-width: 1200px) and (max-width: 1599px) {
		height: calc(((100vw - 400px) - (24px * 3)) / 4 * 0.8);
	}

	&:hover ${ButtonListContainer} {
		height: auto;
		visibility: visible;
		opacity: 1;
		overflow: hidden;
		transition: all ease 0.3s;
	}
`;

const NewsTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0px;
	padding: 16px;
	${NewsCardContainer}:hover & {
		gap: 16px;
		transition: all ease 0.3s;
	}
`;

const NewsImageContainer = styled.div`
	display: flex;
	flex-direction: column;
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

	${NewsCardContainer}:hover &::before {
		opacity: 1;
		transition: all ease 0.3s;
	}

	${NewsCardContainer}:hover & {
		border-radius: 16px 16px 0 0;
		transition: all ease 0.3s;
	}
`;

const NewsHeading = styled.div`
	display: flex;
	width: 100%;
	${typography.title.medium}
`;
const NewsDate = styled.div`
	display: flex;
	${typography.body.large}
`;

interface Props {
	_id: string;
	heading: string;
	date: Date;
	imgUrl: string;
	onRefresh: () => void;
}

const NewsCard: React.FC<Props> = ({
	_id,
	heading,
	date,
	imgUrl,
	onRefresh,
}) => {
	async function handlePin() {
		const res = await fetch("/api/news", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				id: _id,
				update: {
					isHilight: true, // หรือ false
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

	const router = useRouter();

	const handleEdit = () => {
		router.push(`/admin/management/news/edit?id=${_id}`);
	};

	const handleDelete = async () => {
		if (!confirm("Are you sure you want to delete this news item?")) return;

		const res = await fetch(`/api/news?id=${_id}`, {
			method: "DELETE",
		});

		if (res.ok) {
			alert("✅ Deleted successfully");
			router.push("/admin/management/news");
			onRefresh();
		} else {
			const { error } = await res.json();
			alert(`❌ Failed to delete: ${error}`);
		}
	};

	return (
		<NewsCardContainer>
			<NewsImageContainer>
				<Image
					src={
						imgUrl != null && imgUrl !== ""
							? imgUrl
							: "https://fwe-medias.sgp1.cdn.digitaloceanspaces.com/fwe/login/fog.png"
					}
					alt={"news"}
					fill
					style={{
						objectFit: "cover",
						zIndex: 0,
					}}
				/>
			</NewsImageContainer>
			<NewsTextContainer>
				<InfoContainer>
					<NewsHeading>{heading}</NewsHeading>
					<NewsDate>{formatDate(date)}</NewsDate>
				</InfoContainer>
				<ButtonListContainer>
					<Button
						style="text"
						showIcon="pre"
						className="button-delete"
						labelText="Delete"
						onClick={handleDelete}
						IconName={faTrashCan}
						ariaLabel="Click to delete this news"
					/>
					<Button
						style="outlined"
						showIcon="pre"
						labelText="Edit"
						onClick={handleEdit}
						IconName={faPencil}
						ariaLabel="Click to edit this news"
					/>
					<Button
						style="tonal"
						showIcon="pre"
						labelText="Pin"
						onClick={handlePin}
						IconName={faThumbTack}
						ariaLabel="Click to highlight this news"
					/>
				</ButtonListContainer>
			</NewsTextContainer>
		</NewsCardContainer>
	);
};

export default NewsCard;
