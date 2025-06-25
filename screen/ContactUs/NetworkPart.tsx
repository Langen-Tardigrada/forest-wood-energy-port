"use client";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { typography } from "../../src/app/css/typography";

const StyledPart = styled.div<{ width: number; height: number }>`
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: start;
	position: relative;
	width: 100%;
	box-sizing: border-box;
	height: ${({ height }) => height}px;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
`;
const ContentContainer = styled.div<{ width: number }>`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	justify-content: center;
	align-items: start;
	position: relative;
	width: ${({ width }) => width}px;
	box-sizing: border-box;
	gap: 24px;
	padding: 120px 40px 56px 40px;
	@media (min-width: 0px) and (max-width: 599px) {
		align-self: stretch;
		gap: 32px;
		padding: 72px 16px 32px 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		align-self: stretch;
		gap: 48px;
		padding: 72px 32px 48px 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		align-self: stretch;
		gap: 40px;
		padding: 88px 24px 40px 24px;
	}
`;
const NetworkHeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	grid-column: 1 / span 4;
	justify-content: start;
	align-items: center;
	position: relative;
	color: ${({ theme }) => theme.sys.light["on-surface"]};

	@media (min-width: 0px) and (max-width: 599px) {
		grid-column: 1 / span 12;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		grid-column: 1 / span 12;
	}
`;
const NetworkHeadline = styled.div`
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
		${typography.display.small}
	}
`;
const NetworkSubHeadline = styled.div`
	display: flex;
	position: relative;
	align-self: stretch;
	${typography.body.large}
`;
const NetWorkLocationListBox = styled.div`
	display: flex;
	align-items: center;
	gap: 24px;
	grid-column: 5 / span 8;
	flex-direction: row;
	align-self: stretch;
	position: relative;

	@media (min-width: 0px) and (max-width: 599px) {
		grid-column: 1 / span 12;
		overflow-x: auto;
		padding: 6px;
		border-radius: 16px;
		scrollbar-width: none; /* ซ่อน scrollbar ดั้งเดิมใน Firefox */
		margin: -6px;

		&::-webkit-scrollbar {
			display: none; /* ซ่อน scrollbar ดั้งเดิมใน Chrome, Safari */
		}
	}

	@media (min-width: 600px) and (max-width: 839px) {
		grid-column: 1 / span 12;
		overflow-x: auto;
		padding: 6px;
		border-radius: 16px;
		scrollbar-width: none; /* ซ่อน scrollbar ดั้งเดิมใน Firefox */
		margin: -6px;

		&::-webkit-scrollbar {
			display: none; /* ซ่อน scrollbar ดั้งเดิมใน Chrome, Safari */
		}
	}
`;
const NetWorkLocationInnerListBoxMobile = styled.div`
	display: flex;

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 24px;
	}
`;
const NetworkLocationBox = styled.button<{ width: number }>`
	display: flex;
	flex: 1 0 0;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	justify-content: space-between;
	gap: 24px;
	padding: 24px;
	height: inherit;
	background-color: ${({ theme }) => theme.sys.light["surface-container-low"]};
	border-radius: 16px;
	border: none;
	text-align: start;

	&:enabled {
		box-shadow: none;
	}
	&:hover {
		//evalation light 2
		box-shadow: ${({ theme }) => theme.sys.light.elevation[2]};
		cursor: pointer;
	}
	&:active {
		//evalation light 4
		box-shadow: ${({ theme }) => theme.sys.light.elevation[4]};
	}
	&:focus-visible {
		// evalation light 3
		box-shadow: ${({ theme }) => theme.sys.light.elevation[3]};
		outline: none;
	}
	&:disabled {
		pointer-events: none;
	}
	&:hover:disabled {
		pointer-events: none;
		box-shadow: none;
	}

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 96px;
		padding: 16px;
		width: ${({ width }) => width - 32 - 12}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 96px;
		padding: 32px;
		width: ${({ width }) => (width * 6) / 8 - 64 - 12}px;
	}
`;
const NetworkLocationHeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 16px;
	align-self: stretch;
	width: 100%;
`;
const LocationIconContainer = styled.div<{ color: string }>`
	display: flex;
	width: 40px;
	height: 40px;
	justify-content: center;
	align-content: center;
	align-items: center;
	border-radius: 8px;
	background-color: ${({ color }) => color};
	color: ${({ theme }) => theme.sys.light["on-surface"]};
`;
const NetWorkLocationHeadline = styled.div`
	display: flex;
	flex: 1;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.title.large}
	position: relative;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 18px;
	}
`;
const NetWorkLocationDetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	gap: 16px;
`;
const NetWorkLocationDetail = styled.div<{ color: string }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	align-self: stretch;
	color: ${({ color }) => color};
	gap: 8px;
`;
const MapContainer = styled.div<{ height: number }>`
	width: 100%;
	height: ${({ height }) => (55 / 100) * height}px;
	overflow: hidden;
	@media (min-width: 0px) and (max-width: 599px) {
		height: ${({ height }) => 0.66 * height}px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		height: ${({ height }) => 0.557 * height}px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		height: ${({ height }) => 0.61 * height}px;
	}
`;

const locationInfo = [
	{
		bgcolor: "#FFDAD6",
		headline: "Forest Wood Energy (Corporate Office)",
		addr: "18 Sin Ming Lane, 07-24 Midview City, Singapore 573960",
		phoneNum: "+65 6019 0719",
		link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6965334874903!2d103.83125422496576!3d1.3587088986284281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1700686e7fa3%3A0xa4a1f4139bf92b15!2sMidview%20City!5e0!3m2!1sth!2sth!4v1730226878636!5m2!1sth!2sth",
	},
	{
		bgcolor: "#EAE5CC",
		headline: "Forest Wood Energy (Thailand)",
		addr: "24/2 Bangsaen Sai 4 Tai Road, Saen Suk, Muang, Chon Buri, Thailand 20130",
		phoneNum: "+66 9459 5466 3",
		link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.1348333271326!2d100.9309474!3d13.2795135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3102b59ce00e02e3%3A0x24eb4f108d913566!2sBuranapa%20Group%20Office!5e0!3m2!1sth!2sth!4v1731697353677!5m2!1sth!2sth",
	},
	{
		bgcolor: "#CCE8EA",
		headline: "Forest Wood Energy (Malaysia)",
		addr: "Taman Perindustrian, 32, Jalan Mega 1/4, Nusa Cemerlang Industrial Park, 81550 Gelang Patah, Johor, Malaysia",
		phoneNum: "-",
		link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.276014586237!2d103.60411983880216!3d1.443574980995261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da0b08d2617ec9%3A0xf425bcd9148b59ad!2sTaman%20Perindustrian%20Nusa%20Cemerlang!5e0!3m2!1sth!2sth!4v1730227540486!5m2!1sth!2sth",
	},
];
interface LocationProps {
	bgIcon: string;
	headline: string;
	addr: string;
	phoneNum: string;
	link: string;
	setLoc: React.Dispatch<React.SetStateAction<string>>;
	disabled: boolean;
	width: number;
}
const LocationBox: React.FC<LocationProps> = ({
	bgIcon,
	headline,
	addr,
	phoneNum,
	link,
	setLoc,
	disabled,
	width,
}) => {
	const theme = useTheme();
	return (
		<NetworkLocationBox
			onClick={() => {
				setLoc(link);
			}}
			disabled={disabled}
			width={width}
		>
			<NetworkLocationHeaderContainer>
				<LocationIconContainer color={bgIcon}>
					<FontAwesomeIcon
						icon={faLocationDot}
						size={"lg"}
						width={24}
						height={24}
					/>
				</LocationIconContainer>
				<NetWorkLocationHeadline>{headline}</NetWorkLocationHeadline>
			</NetworkLocationHeaderContainer>
			<NetWorkLocationDetailContainer>
				<NetWorkLocationDetail color={theme.sys.light["on-surface-variant"]}>
					{addr}
				</NetWorkLocationDetail>
				<NetWorkLocationDetail color={theme.sys.light["on-surface"]}>
					<FontAwesomeIcon
						icon={faPhone}
						size={"sm"}
						width={24}
						height={24}
						color={theme.sys.light["outline-variant"]}
					/>
					{phoneNum}
				</NetWorkLocationDetail>
			</NetWorkLocationDetailContainer>
		</NetworkLocationBox>
	);
};
interface Props {
	width: number;
	height: number;
	url: string;
	ref: React.MutableRefObject<HTMLDivElement | null>;
}
const NetWorkPart = React.forwardRef<HTMLDivElement, Props>(
	({ width, height, url }, ref) => {
		const [location, setLocation] = useState(locationInfo[0].link);

		return (
			<StyledPart width={width} height={height} ref={ref}>
				<ContentContainer width={width}>
					<NetworkHeaderContainer>
						<NetworkHeadline>We Are Here!</NetworkHeadline>
						<NetworkSubHeadline>
							Here’s where you can find us. Visit or contact the office nearest
							to your location.
						</NetworkSubHeadline>
					</NetworkHeaderContainer>
					{width < 840 ? (
						<NetWorkLocationListBox>
							<NetWorkLocationInnerListBoxMobile>
								{locationInfo.map((i, key) => (
									<LocationBox
										key={key}
										bgIcon={i.bgcolor}
										headline={i.headline}
										addr={i.addr}
										phoneNum={i.phoneNum}
										link={i.link}
										setLoc={setLocation}
										width={width}
										disabled={
											i.headline === "Forest Wood Energy (Malaysia)"
												? true
												: false
										}
									/>
								))}
							</NetWorkLocationInnerListBoxMobile>
						</NetWorkLocationListBox>
					) : (
						<NetWorkLocationListBox>
							{locationInfo.map((i, key) => (
								<LocationBox
									key={key}
									bgIcon={i.bgcolor}
									headline={i.headline}
									addr={i.addr}
									phoneNum={i.phoneNum}
									link={i.link}
									setLoc={setLocation}
									width={width}
									disabled={
										i.headline === "Forest Wood Energy (Malaysia)"
											? true
											: false
									}
								/>
							))}
						</NetWorkLocationListBox>
					)}
				</ContentContainer>
				<MapContainer height={height}>
					<iframe
						src={location}
						width="100%"
						height="100%"
						style={{ border: 0 }}
						allowFullScreen={true}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</MapContainer>
			</StyledPart>
		);
	}
);

export default NetWorkPart;
