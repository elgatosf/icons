import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleSitesColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#4758B5" d="M18.5 23H5.5C4.67125 23 4 22.3288 4 21.5V2.5C4 1.67125 4.67125 1 5.5 1H14.5L20 6.5V21.5C20 22.3288 19.3287 23 18.5 23Z" /><path fill="#354287" d="M14.5 1L20 6.5H14.5V1Z" /><path fill="white" d="M16.5 9.5H7.5V10.75H16.5V9.5Z" /><path fill="white" d="M16.5 12H15.25V16.25H16.5V12Z" /><path fill="white" d="M14 12H7.5V16.25H14V12Z" />
		</svg>
	);
};

LogoGoogleSitesColor.iconName = "logo-google-sites--color";

export default LogoGoogleSitesColor;