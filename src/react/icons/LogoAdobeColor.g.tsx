import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoAdobeColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#FA0C00" d="M9.40091 3H1.99976V20.7001L9.40091 3Z" /><path fill="#FA0C00" d="M14.6082 3H21.9997V20.7001L14.6082 3Z" /><path fill="#FA0C00" d="M16.7151 20.7002L12.0044 9.52369L8.76913 17.1418H12.2166L13.6245 20.7002H16.7151Z" />
		</svg>
	);
};

LogoAdobeColor.iconName = "logo-adobe--color";

export default LogoAdobeColor;