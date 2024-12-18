import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleSites = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8 11H16V12.5H8V11Z" /><path d="M16 14H14.5V18H16V14Z" /><path d="M8 14H13V18H8V14Z" /><path fillRule="evenodd" d="M6.00098 1.99988H14.001L20.001 7.99988V19.9999C20.001 21.0999 19.101 21.9999 18.001 21.9999H5.99098C4.89098 21.9999 4.00098 21.0999 4.00098 19.9999L4.01098 3.99988C4.01098 2.89988 4.90098 1.99988 6.00098 1.99988ZM6.00098 3.99988V19.9999H18.001V8.99988H13.001V3.99988H6.00098Z" clipRule="evenodd" />
		</svg>
	);
};

LogoGoogleSites.iconName = "logo-google-sites";

export default LogoGoogleSites;