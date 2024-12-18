import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoStripeColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#635BFF" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" /><path fill="white" fillRule="evenodd" d="M11.22 9.775C11.22 9.305 11.605 9.12 12.245 9.12C13.165 9.12 14.325 9.4 15.245 9.895V7.055C14.24 6.655 13.25 6.5 12.25 6.5C9.79504 6.5 8.16504 7.78 8.16504 9.92C8.16504 13.255 12.76 12.725 12.76 14.165C12.76 14.72 12.275 14.9 11.6 14.9C10.595 14.9 9.31504 14.49 8.30004 13.935V16.81C9.42504 17.295 10.56 17.5 11.6 17.5C14.115 17.5 15.845 16.255 15.845 14.09C15.825 10.49 11.22 11.13 11.22 9.775Z" clipRule="evenodd" />
		</svg>
	);
};

LogoStripeColor.iconName = "logo-stripe--color";

export default LogoStripeColor;