import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoStripe = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12.245 9.12C11.605 9.12 11.22 9.305 11.22 9.775C11.22 10.2905 11.8866 10.5173 12.7136 10.7986C14.0604 11.2567 15.8326 11.8596 15.845 14.09C15.845 16.255 14.115 17.5 11.6 17.5C10.56 17.5 9.42504 17.295 8.30004 16.81V13.935C9.31504 14.49 10.595 14.9 11.6 14.9C12.275 14.9 12.76 14.72 12.76 14.165C12.76 13.594 12.0375 13.3327 11.1655 13.0174C9.83839 12.5376 8.16504 11.9325 8.16504 9.92C8.16504 7.78 9.79504 6.5 12.25 6.5C13.25 6.5 14.24 6.655 15.245 7.055V9.895C14.325 9.4 13.165 9.12 12.245 9.12Z" clipRule="evenodd" />
		</svg>
	);
};

LogoStripe.iconName = "logo-stripe";

export default LogoStripe;