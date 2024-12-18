import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#4285F4" d="M21.6 12.2272C21.6 11.5181 21.5364 10.8363 21.4182 10.1818H12V14.0545H17.3818C17.1455 15.2999 16.4364 16.3545 15.3727 17.0636V19.5818H18.6182C20.5091 17.8363 21.6 15.2727 21.6 12.2272Z" /><path fill="#34A853" d="M12 22C14.7 22 16.9637 21.1091 18.6182 19.5818L15.3728 17.0636C14.4818 17.6636 13.3455 18.0272 12 18.0272C9.40003 18.0272 7.19094 16.2727 6.40003 13.9091H3.07275V16.4909C4.71821 19.7545 8.09094 22 12 22Z" /><path fill="#FBBC05" d="M6.4 13.9C6.2 13.3 6.08182 12.6636 6.08182 12C6.08182 11.3364 6.2 10.7 6.4 10.1V7.51819H3.07273C2.39091 8.86364 2 10.3818 2 12C2 13.6182 2.39091 15.1364 3.07273 16.4818L5.66364 14.4636L6.4 13.9Z" /><path fill="#EA4335" d="M12 5.98182C13.4728 5.98182 14.7818 6.49091 15.8273 7.47273L18.6909 4.60909C16.9546 2.99091 14.7 2 12 2C8.09094 2 4.71821 4.24545 3.07275 7.51818L6.40003 10.1C7.19094 7.73636 9.40003 5.98182 12 5.98182Z" />
		</svg>
	);
};

LogoGoogleColor.iconName = "logo-google--color";

export default LogoGoogleColor;