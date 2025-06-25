"use client";
import styled from "@emotion/styled";
import React, { useEffect, useRef } from "react";
import { usePositionContext } from "./ContextPosition";
import Link from "next/link";
import { typography } from "../src/app/css/typography";

const BarContainer = styled.div`
	display: flex;
	width: 100%;
	background-color: ${({ theme }) => theme.sys.light.surface};
	flex-flow: row wrap;
	flex-direction: row;
	justify-content: space-between;
	font-family: "Jost", Helvetica;
	align-items: center;
	align-content: center;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	gap: 2.5rem;
`;
const ListContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	flex-direction: row;
	justify-content: flex-start;
	gap: 2.5rem;
	align-items: center;
	align-content: center;
	width: fit-content;
`;
const TextLabel = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	${typography.label.large}
	cursor: pointer;

	&:enabled {
		color: ${({ theme }) => theme.sys.light["on-surface"]};
	}
	&:hover {
		color: ${({ theme }) => theme.sys.light.outline};
	}
	&:active {
		color: ${({ theme }) => theme.sys.light.outline};
	}
	&:disabled {
		color: ${({ theme }) => theme.sys.light["outline-variant"]};
		cursor: default;
	}
`;
const LeftContainer = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 5rem;
`;
const FWEContainer = styled.button`
	display: flex;
	flex-flow: row nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: center;
	gap: 0.75rem;
	background-color: transparent;
	border: none;
	cursor: pointer;
	&:enabled {
		color: ${({ theme }) => theme.sys.light["on-surface"]};
	}
	&:hover {
		color: ${({ theme }) => theme.sys.light.outline};
	}
	&:active {
		color: ${({ theme }) => theme.sys.light.outline};
	}
	&:disabled {
		color: ${({ theme }) => theme.sys.light["outline-variant"]};
		cursor: default;
	}
`;
const FWELabel = styled.div`
	font-size: 0.875rem;
	font-weight: 700;
	line-height: 1.25rem;
	letter-spacing: 0.006rem;
`;

interface BarProps {
	onMouseEnter: (section: string) => void;
}
const Bar: React.FC<BarProps> = ({ onMouseEnter }) => {
	const aboutUsRef = useRef<HTMLButtonElement>(null);
	const productRef = useRef<HTMLButtonElement>(null);
	const sustainabilityRef = useRef<HTMLButtonElement>(null);
	const mediaRef = useRef<HTMLButtonElement>(null);
	const { positions, setPosition } = usePositionContext(); // Get the setter from context

	// Mutable objects to store the bounding rectangles
	const aboutUsRect = useRef<DOMRect | null>(null);
	const productRect = useRef<DOMRect | null>(null);
	const sustainabilityRect = useRef<DOMRect | null>(null);
	const mediaRect = useRef<DOMRect | null>(null);

	// let aboutUsRect: DOMRect, productRect: DOMRect, sustainabilityRect: DOMRect;

	useEffect(() => {
		if (aboutUsRef.current) {
			aboutUsRect.current = aboutUsRef.current.getBoundingClientRect();
		}

		if (productRef.current) {
			productRect.current = productRef.current.getBoundingClientRect();
		}

		if (sustainabilityRef.current) {
			sustainabilityRect.current =
				sustainabilityRef.current.getBoundingClientRect();
		}

		if (mediaRef.current) {
			mediaRect.current = mediaRef.current.getBoundingClientRect();
		}

		// Set positions outside useEffect
		if (
			aboutUsRect.current &&
			positions.aboutUs?.left !== aboutUsRect.current.left
		) {
			setPosition("aboutUs", aboutUsRect.current);
		}

		if (
			productRect.current &&
			positions.product?.left !== productRect.current.left
		) {
			setPosition("product", productRect.current);
		}

		if (
			sustainabilityRect.current &&
			positions.sustainability?.left !== sustainabilityRect.current.left
		) {
			setPosition("sustainability", sustainabilityRect.current);
		}

		if (mediaRect.current && positions.media?.left !== mediaRect.current.left) {
			setPosition("media", mediaRect.current);
		}
	}, [positions, setPosition]);

	return (
		<BarContainer>
			<LeftContainer>
				<Link href={"/"} style={{ textDecoration: "none" }}>
					<FWEContainer>
						<svg
							width="46.72"
							height="24"
							viewBox="0 0 47 24"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="xMidYMid meet"
						>
							<image href="/logo.svg" width="46.72" height="24" />
						</svg>

						<FWELabel> Forest Wood Energy </FWELabel>
					</FWEContainer>
				</Link>
				<ListContainer>
					<Link href={"/about_us/our_mission"}>
						<TextLabel
							ref={aboutUsRef}
							onMouseEnter={() => onMouseEnter("About Us")}
						>
							About Us
						</TextLabel>
					</Link>
					<Link href={"/product"}>
						<TextLabel
							ref={productRef}
							onMouseEnter={() => onMouseEnter("Product")}
						>
							Product
						</TextLabel>
					</Link>
					<Link href={"/sustainability/climate_change"}>
						<TextLabel
							ref={sustainabilityRef}
							onMouseEnter={() => onMouseEnter("Sustainability")}
						>
							Sustainability
						</TextLabel>
					</Link>
					<Link href={"/media/gallery"}>
						<TextLabel
							ref={mediaRef}
							onMouseEnter={() => onMouseEnter("Media")}
						>
							Media
						</TextLabel>
					</Link>
				</ListContainer>
			</LeftContainer>
			<Link href={"/contact_us"}>
				<TextLabel> Contact Us </TextLabel>
			</Link>
		</BarContainer>
	);
};

export default Bar;
