import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogle = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M15.8273 7.47273C14.7818 6.49091 13.4728 5.98182 12 5.98182C9.40003 5.98182 7.19094 7.73636 6.40003 10.1C6.20003 10.7 6.08182 11.3364 6.08182 12C6.08182 12.6636 6.2 13.3 6.4 13.9L6.38817 13.9091H6.40003C7.19094 16.2727 9.40003 18.0272 12 18.0272C13.3455 18.0272 14.4818 17.6636 15.3727 17.0636C16.4364 16.3545 17.1455 15.2999 17.3818 14.0545H12V10.1818H21.4182C21.5364 10.8363 21.6 11.5181 21.6 12.2272C21.6 15.2727 20.5091 17.8363 18.6182 19.5818C16.9636 21.109 14.7 22 12 22C8.09094 22 4.71821 19.7545 3.07275 16.4909V16.4818C2.39094 15.1363 2 13.6182 2 12C2 10.3818 2.39091 8.86364 3.07273 7.51819C4.71818 4.24546 8.09094 2 12 2C14.7 2 16.9546 2.99091 18.6909 4.60909L15.8273 7.47273Z" />
		</svg>
	);
};

LogoGoogle.iconName = "logo-google";

export default LogoGoogle;