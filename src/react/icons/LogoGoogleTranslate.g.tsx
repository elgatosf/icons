import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleTranslate = ({ size = "m", label = "Icon", ...props }: IconProps) => {
	const iconSize = sizeMap[size];
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={iconSize}
			height={iconSize}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M12 22L11 19H4C3.45 19 2.97917 18.8042 2.5875 18.4125C2.19583 18.0208 2 17.55 2 17V4C2 3.45 2.19583 2.97917 2.5875 2.5875C2.97917 2.19583 3.45 2 4 2H10L10.875 5H20C20.5833 5 21.0625 5.1875 21.4375 5.5625C21.8125 5.9375 22 6.41667 22 7V20C22 20.55 21.8125 21.0208 21.4375 21.4125C21.0625 21.8042 20.5833 22 20 22H12ZM7.15 14.6C8.3 14.6 9.24583 14.2292 9.9875 13.4875C10.7292 12.7458 11.1 11.7833 11.1 10.6C11.1 10.4667 11.0958 10.3458 11.0875 10.2375C11.0792 10.1292 11.0583 10.0167 11.025 9.9H7.075V11.45H9.3C9.16667 11.9167 8.9125 12.2792 8.5375 12.5375C8.1625 12.7958 7.70833 12.925 7.175 12.925C6.525 12.925 5.96667 12.6917 5.5 12.225C5.03333 11.7583 4.8 11.1833 4.8 10.5C4.8 9.81667 5.03333 9.24167 5.5 8.775C5.96667 8.30833 6.525 8.075 7.175 8.075C7.475 8.075 7.75833 8.12917 8.025 8.2375C8.29167 8.34583 8.53333 8.50833 8.75 8.725L9.975 7.55C9.625 7.18333 9.20417 6.9 8.7125 6.7C8.22083 6.5 7.7 6.4 7.15 6.4C6.03333 6.4 5.07917 6.79583 4.2875 7.5875C3.49583 8.37917 3.1 9.35 3.1 10.5C3.1 11.65 3.49583 12.6208 4.2875 13.4125C5.07917 14.2042 6.03333 14.6 7.15 14.6ZM13.85 15.1L14.4 14.575C14.1667 14.2917 13.9542 14.0167 13.7625 13.75C13.5708 13.4833 13.3833 13.2 13.2 12.9L13.85 15.1ZM15.1 13.825C15.5667 13.275 15.9208 12.75 16.1625 12.25C16.4042 11.75 16.5667 11.3583 16.65 11.075H12.675L12.975 12.125H13.975C14.1083 12.375 14.2667 12.6458 14.45 12.9375C14.6333 13.2292 14.85 13.525 15.1 13.825ZM13 21H20C20.3 21 20.5417 20.9042 20.725 20.7125C20.9083 20.5208 21 20.2833 21 20V7C21 6.7 20.9083 6.45833 20.725 6.275C20.5417 6.09167 20.3 6 20 6H11.175L12.35 10.05H14.325V9H15.35V10.05H19V11.075H17.725C17.5583 11.7083 17.3083 12.325 16.975 12.925C16.6417 13.525 16.25 14.0833 15.8 14.6L18.525 17.275L17.8 18L15.1 15.3L14.2 16.225L15 19L13 21Z" />
		</svg>
	);
};

LogoGoogleTranslate.iconName = "logo-google-translate";

export default LogoGoogleTranslate;