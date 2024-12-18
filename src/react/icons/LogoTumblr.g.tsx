import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoTumblr = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M17.3333 22H14C11.0083 22 8.75 20.45 8.75 16.75V10.8167H6V7.6C7.2404 7.26545 8.33993 6.54 9.13551 5.53126C9.9311 4.52252 10.3804 3.28421 10.4167 2H13.55V7.1H17.1833V10.8167H13.55V15.9833C13.55 17.5333 14.3333 18.0583 15.5667 18.0583H17.3333V22Z" />
		</svg>
	);
};

LogoTumblr.iconName = "logo-tumblr";

export default LogoTumblr;