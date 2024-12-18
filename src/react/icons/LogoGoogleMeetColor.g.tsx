import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleMeetColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#00AC47" d="M17.25 15.244V14.6617V13.8576V10.0727V9.26856L17.8696 7.97918L20.9674 5.52523C21.3804 5.17863 22 5.46978 22 6.01048V17.7395C22 18.2802 21.3667 18.5714 20.9536 18.2248L17.25 15.244Z" /><path fill="#FE2C25" d="M7 3.75L2 8.75H7V3.75Z" /><path fill="#2684FC" d="M7 8.75H2V15.25H7V8.75Z" /><path fill="#0066DA" d="M2 15.25V18.5833C2 19.5 2.75 20.25 3.66668 20.25H7V15.25H2Z" /><path fill="#FFBA00" d="M17.875 5.39755C17.875 4.4914 17.1409 3.75 16.2437 3.75H12.9812H7V8.75H13.125V12L17.875 11.8504V5.39755Z" /><path fill="#00AC47" d="M13.125 15.25H7V20.25H12.9812H16.2437C17.1409 20.25 17.875 19.5097 17.875 18.6049V12H13.125V15.25Z" /><path fill="#00832D" d="M17.875 8V15.75L13.125 12L17.875 8Z" />
		</svg>
	);
};

LogoGoogleMeetColor.iconName = "logo-google-meet--color";

export default LogoGoogleMeetColor;