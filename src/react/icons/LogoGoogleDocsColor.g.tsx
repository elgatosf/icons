import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleDocsColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="white" d="M16.75 12.25H7.25V14H16.75V12.25Z" /><path fill="white" d="M14.25 15.25H7.25V17H14.25V15.25Z" /><path fill="#0066DA" d="M14.5 6.5L17.0775 6.625L20 6.5L14.5 1L14.375 4.3575L14.5 6.5Z" /><path fill="white" d="M16.75 9.25H7.25V11H16.75V9.25Z" /><path fill="#2684FC" d="M14.5 6.5V1H5.5C4.67125 1 4 1.67125 4 2.5V21.5C4 22.3288 4.67125 23 5.5 23H18.5C19.3287 23 20 22.3288 20 21.5V6.5H14.5ZM14 16.75H7.5V15.5H14V16.75ZM16.5 13.75H7.5V12.5H16.5V13.75ZM16.5 10.75H7.5V9.5H16.5V10.75Z" />
		</svg>
	);
};

LogoGoogleDocsColor.iconName = "logo-google-docs--color";

export default LogoGoogleDocsColor;