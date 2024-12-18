import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleMeet = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M2 8.75L7 3.75H16.2437C17.1409 3.75 17.875 4.4914 17.875 5.39755V7.97488L20.9674 5.52523C21.3804 5.17863 22 5.46978 22 6.01048V17.7395C22 18.2802 21.3667 18.5714 20.9536 18.2248L17.875 15.747V18.6049C17.875 19.5097 17.1409 20.25 16.2437 20.25H3.66668C2.75 20.25 2 19.5 2 18.5833V8.75ZM4 18.25V9.57843L7.82843 5.75H15.875V18.25H4Z" clipRule="evenodd" />
		</svg>
	);
};

LogoGoogleMeet.iconName = "logo-google-meet";

export default LogoGoogleMeet;