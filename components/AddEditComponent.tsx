import { typography } from "@/app/css/typography";
import styled from "@emotion/styled";

export const StyledContainer = styled.div<{ width: number }>`
	background-color: ${({ theme }) => theme.sys.light.surface};
	display: flex;
	flex-direction: column;
	align-items: center;
	width: ${({ width }) => width}px;
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

export const StyledContent = styled.form`
	align-items: flex-start;
	display: flex;
	position: relative;
	width: 100%;
	flex-direction: column;
	background-color: ${({ theme }) => theme.sys.light.surface};
	gap: 24px;

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 40px;
	}
`;

export const ContentPartContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;

	@media (min-width: 0px) and (max-width: 599px) {
		gap: 96px;
		padding: 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		gap: 96px;
		padding: 36px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		gap: 40px;
		padding: 24px;
	}
`;

export const FillInputBox = styled.input`
	display: inline-flex;
	padding: 8px 16px;
	width: -webkit-fill-available;
	align-items: center;
	${typography.body.large}
	background: none;
	border: 1px dashed ${({ theme }) => theme.sys.light.outline};
	border-radius: 8px;
	color: ${({ theme }) => theme.sys.light["on-surface"]};

	&:focus {
		border: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border: 1cap.5 dashed ${({ theme }) => theme.sys.light.primary};
		background-color: ${({ theme }) =>
			theme.sys.light["surface-container-low"]};
		color: ${({ theme }) => theme.sys.light.primary};
		transition: opacity 0.3s;
	}
	&:disabled {
		color: ${({ theme }) => theme.sys.light["outline-variant"]};
		border: 1px dashed ${({ theme }) => theme.sys.light["outline-variant"]};
	}
`;

export const FillTextAreaBox = styled.textarea`
	display: inline-flex;
	padding: 8px 16px;
	width: -webkit-fill-available;
	align-items: center;
	${typography.body.large}
	background: none;
	border: 1px dashed ${({ theme }) => theme.sys.light.outline};
	border-radius: 8px;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	min-height: 80px;
	height: auto;
	overflow-y: hidden;

	&:focus {
		border: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border: 1cap.5 dashed ${({ theme }) => theme.sys.light.primary};
		background-color: ${({ theme }) =>
			theme.sys.light["surface-container-low"]};
		color: ${({ theme }) => theme.sys.light.primary};
		transition: opacity 0.3s;
	}
	&:disabled {
		color: ${({ theme }) => theme.sys.light["outline-variant"]};
		border: 1px dashed ${({ theme }) => theme.sys.light["outline-variant"]};
	}
`;

export const HeadingPage = styled.div`
	display: flex;
	width: 100%;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.display.small}
`;

export const HeadingContainer = styled.div`
	display: flex;
	width: 100%;
	padding-top: 72px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
`;

export const ButtonController = styled.div`
	display: flex;
	flex-direction: row;
	gap: 8px;
	justify-content: center;
	align-items: center;
`;

export const StyledPartContent = styled.div`
	align-items: flex-start;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	position: relative;
	align-self: stretch;
	gap: 24px;
	@media (min-width: 0px) and (max-width: 599px) {
		display: flex;
		flex-direction: column;
		gap: 96px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		display: flex;
		flex-direction: column;
		gap: 96px;
	}
`;
export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: 1 / span 7;
	gap: 24px;
`;
export const HeaderContainer = styled.textarea`
	display: flex;
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	font-size: 40px;
	font-style: normal;
	font-weight: 400;
	line-height: 40px;
	word-break: break-word;
	white-space: normal;
	padding: 16px;
	border: 1px dashed ${({ theme }) => theme.sys.light.outline};
	border-radius: 8px;
	border-style: dashed;
	background-color: transparent;

	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: 40px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 28px;
		font-style: normal;
		font-weight: 500;
		line-height: 40px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 36px;
		font-style: normal;
		font-weight: 400;
		line-height: 40px;
	}

	&:focus {
		border: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border: 1cap.5 dashed ${({ theme }) => theme.sys.light.primary};
		background-color: ${({ theme }) =>
			theme.sys.light["surface-container-low"]};
		color: ${({ theme }) => theme.sys.light.primary};
		transition: opacity 0.3s;
	}
	&:disabled {
		color: ${({ theme }) => theme.sys.light["outline-variant"]};
		border: 1px dashed ${({ theme }) => theme.sys.light["outline-variant"]};
	}
`;

export const DetailContainer = styled.textarea`
	display: flex;
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	${typography.body.large}
	text-align: justify;
	word-break: break-word;
	white-space: normal;
	height: auto;
	overflow-y: hidden;
	min-height: 150px;
	border: 1px dashed ${({ theme }) => theme.sys.light.outline};
	border-radius: 8px;
	padding: 16px;
	background-color: transparent;

	&:focus {
		border: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border: 1cap.5 dashed ${({ theme }) => theme.sys.light.primary};
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

export const HilightText = styled.textarea`
	display: flex;
	flex-direction: column;
	flex: 1;
	grid-column: 8 / span 5;
	padding: 40px;
	justify-content: center;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	font-size: 64px;
	font-style: normal;
	font-weight: 400;
	line-height: 72px;
	min-height: -webkit-fill-available;
	background-color: transparent;
	padding: 16px;
	border: 1px dashed ${({ theme }) => theme.sys.light.outline};
	border-radius: 8px;
	border-style: dashed;
	height: auto;
	overflow-y: hidden;
	word-break: break-word;
	white-space: normal;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		line-height: 48px; /* 100% */
		padding: 16px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 48px;
		font-style: normal;
		font-weight: 400;
		line-height: 56px; /* 100% */
		padding: 32px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 56px;
		font-style: normal;
		font-weight: 400;
		line-height: 64px; /* 100% */
		padding: 24px;
	}

	&:focus {
		border: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border: 1cap.5 dashed ${({ theme }) => theme.sys.light.primary};
		background-color: ${({ theme }) =>
			theme.sys.light["surface-container-low"]};
		color: ${({ theme }) => theme.sys.light.primary};
		transition: opacity 0.3s;
	}
	&:disabled {
		color: ${({ theme }) => theme.sys.light["outline-variant"]};
		border: 1px dashed ${({ theme }) => theme.sys.light["outline-variant"]};
	}
`;

export const StyledPart2Content = styled.div`
	align-items: flex-start;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	position: relative;
	flex-direction: row;
	align-self: stretch;
	gap: 24px;
	@media (min-width: 0px) and (max-width: 599px) {
		display: flex;
		flex-direction: column-reverse;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		display: flex;
		flex-direction: column-reverse;
	}
`;
export const InfoPart2Container = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: 8 / span 5;
	gap: 24px;
	text-align: justify;

	@media (min-width: 0px) and (max-width: 599px) {
		width: inherit;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: inherit;
	}
`;
export const PictureBox = styled.div<{ backgroundImage?: string }>`
	display: flex;
	grid-column: 1 / span 7;
	border-radius: 16px;
	height: 100%;
	position: relative;
	box-sizing: border-box;
	overflow: hidden;

	@media (min-width: 0px) and (max-width: 599px) {
		width: inherit;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		width: inherit;
	}

	background-image: ${({ backgroundImage }) =>
		backgroundImage ? `url(${backgroundImage})` : "none"};
	background-size: cover;
	background-position: center;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.sys.light["outline-variant"]};
	font-size: 16px;

	border: 1px dashed ${({ theme }) => theme.sys.light.outline};
	border-radius: 8px;
	padding: 16px;

	&:focus {
		border: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border: 1px dashed ${({ theme }) => theme.sys.light.primary};
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

export const HeaderPart2Container = styled.textarea`
	display: flex;
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px; /* 100% */
	letter-spacing: 0px;
	word-break: break-word;
	white-space: normal;
	padding: 16px;
	border: 1px dashed ${({ theme }) => theme.sys.light.outline};
	border-radius: 8px;
	border-style: dashed;
	height: auto;
	overflow-y: hidden;
	min-height: 150px;
	background-color: transparent;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 22px;
		font-weight: 500;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 22px;
		font-weight: 500;
	}

	&:focus {
		border: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border: 1cap.5 dashed ${({ theme }) => theme.sys.light.primary};
		background-color: ${({ theme }) =>
			theme.sys.light["surface-container-low"]};
		color: ${({ theme }) => theme.sys.light.primary};
		transition: opacity 0.3s;
	}
	&:disabled {
		color: ${({ theme }) => theme.sys.light["outline-variant"]};
		border: 1px dashed ${({ theme }) => theme.sys.light["outline-variant"]};
	}
`;
export const ImageContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
	grid-column: 1 / 8;
	height: -webkit-fill-available;
`;
export const HiddenInput = styled.input`
	display: none;
`;

export const StyledPart3Content = styled.div`
	align-items: center;
	display: flex;
	position: relative;
	flex-direction: column;
	align-self: stretch;
	gap: 24px;
	justify-content: flex-start;
	@media (min-width: 0px) and (max-width: 599px) {
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		display: flex;
		flex-direction: column;
	}
`;
export const PicturePart3Box = styled.div<{ backgroundImage?: string }>`
	display: flex;
	width: 100%;
	border-radius: 8px;
	position: relative;
	box-sizing: border-box;
	overflow: hidden;
	height: calc(100vw * 2 / 5);
	overflow: hidden;

	background-image: ${({ backgroundImage }) =>
		backgroundImage ? `url(${backgroundImage})` : "none"};
	background-size: cover;
	background-position: center;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.sys.light["outline-variant"]};
	font-size: 16px;

	border: 1px dashed ${({ theme }) => theme.sys.light.outline};
	border-radius: 8px;
	padding: 16px;

	&:focus {
		border: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border: 1cap.5 dashed ${({ theme }) => theme.sys.light.primary};
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

export const HeaderPart3Container = styled.textarea`
	background-color: transparent;
	display: flex;
	align-self: stretch;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	font-size: 32px;
	font-style: normal;
	font-weight: 400;
	line-height: 40px;
	letter-spacing: 0px;
	word-break: break-all;
	white-space: normal;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 22px;
		font-style: normal;
		font-weight: 500;
		line-height: 40px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 24px;
		font-style: normal;
		font-weight: 500;
		line-height: 40px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 28px;
		font-style: normal;
		font-weight: 400;
		line-height: 40px;
	}

	/* min-height: 80px; */
	border: 1px dashed ${({ theme }) => theme.sys.light.outline};
	border-radius: 8px;
	padding: 16px;
	height: auto;
	overflow-y: hidden;
	min-height: 80px;
	&:focus {
		border: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border: 1cap.5 dashed ${({ theme }) => theme.sys.light.primary};
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

export const HilightTextPart3 = styled.textarea<{ width: number }>`
	display: flex;
	flex-direction: column;
	width: ${({ width }) => width * 0.656}px;
	padding: 56px 0px;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.sys.light["on-surface"]};
	text-align: justify;
	word-break: break-word;
	white-space: normal;
	font-family: var(--font-lora), "Georgia", "Times New Roman", -apple-system,
		BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", serif;
	font-size: 24px;
	font-style: italic;
	font-weight: 400;
	line-height: 32px;
	text-align: center;
	background-color: transparent;
	@media (min-width: 0px) and (max-width: 599px) {
		font-size: 18px;
		font-style: italic;
		font-weight: 500;
		line-height: 32px; /* 100% */
		padding: 48px 0px;
	}

	@media (min-width: 600px) and (max-width: 839px) {
		font-size: 18px;
		font-style: italic;
		font-weight: 500;
		line-height: 32px; /* 100% */
		padding: 80px 0px;
	}

	@media (min-width: 840px) and (max-width: 1199px) {
		font-size: 22px;
		font-style: italic;
		font-weight: 400;
		line-height: 32px; /* 100% */
		padding: 72px 0px;
	}

	border: 1px dashed ${({ theme }) => theme.sys.light.outline};
	border-radius: 8px;
	padding: 16px;

	&:focus {
		border: 1px solid ${({ theme }) => theme.sys.light.primary};
		color: ${({ theme }) => theme.sys.light.primary};
		outline: none;
		background-color: ${({ theme }) => theme.sys.light["surface-container"]};
		transition: opacity 0.3s;
	}
	&:hover {
		border: 1px dashed ${({ theme }) => theme.sys.light.primary};
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

export const ImagePart3ContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
