"use client";
import React from "react";
import styled from "@emotion/styled";
import { ButtonMedia } from "./ButtonMedia";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from ".";

const StyledContent = styled.div`
	align-items: center;
	display: flex;
	position: relative;
	flex-direction: row;
	align-self: stretch;
	gap: 24px;
	justify-content: space-between;
	padding: 24px 40px;
	max-width: 100%;
	box-sizing: border-box;

	& .page {
		align-items: center !important;
	}
	& .next {
		align-items: flex-end !important;
	}

	@media (min-width: 0px) and (max-width: 599px) {
		padding: 24px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		padding: 24px 36px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		padding: 24px;
	}
`;

interface Props {
	prev: { slug: string; headline: string; state: "disabled" | "enabled" };
	next: { slug: string; headline: string; state: "disabled" | "enabled" };
	curr: string;
	width: number;
	pageName: string;
	pageLink: string;
}

const ControlPart: React.FC<Props> = ({
	prev,
	next,
	curr,
	width,
	pageLink,
	pageName,
}) => {
	return (
		//TODO: Adjust a label text to fit in the box which device width 840 - 1199 dp
		<StyledContent>
			{width < 1200 ? (
				<>
					<Button
						style="text"
						showIcon="pre"
						labelText="PREV"
						IconName={faChevronLeft}
						feature="link"
						link={prev.slug}
						stateProp={prev.state}
						ariaLabel="Read the previous news"
					/>
					<Button
						style="text"
						labelText={pageName}
						feature="link"
						link={pageLink}
						ariaLabel="Return to all news"
					/>
					<Button
						style="text"
						showIcon="trailing"
						labelText="NEXT"
						IconName={faChevronRight}
						feature="link"
						link={next.slug}
						stateProp={next.state}
						ariaLabel="Read the next news"
					/>
				</>
			) : (
				<>
					<ButtonMedia
						style="text"
						showIcon="pre"
						labelText={prev.headline}
						headline="PREV"
						IconName={faChevronLeft}
						feature="link"
						link={prev.slug}
						stateProp={prev.state}
						className="news-button-control"
						ariaLabel="Read the previous news"
					/>
					<ButtonMedia
						style="text"
						labelText={curr}
						headline={pageName}
						boxClassName="page"
						feature="link"
						link={pageLink}
						ariaLabel="Return to all news"
					/>
					<ButtonMedia
						style="text"
						showIcon="trailing"
						labelText={next.headline}
						headline="NEXT"
						IconName={faChevronRight}
						boxClassName="next"
						feature="link"
						link={next.slug}
						stateProp={next.state}
						className="news-button-control"
						ariaLabel="Read the next news"
					/>
				</>
			)}
		</StyledContent>
	);
};

export default ControlPart;
