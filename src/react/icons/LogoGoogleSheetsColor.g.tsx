import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LogoGoogleSheetsColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#00AC47" d="M18.5 23H5.5C4.67125 23 4 22.3288 4 21.5V2.5C4 1.67125 4.67125 1 5.5 1H14.5L20 6.5V21.5C20 22.3288 19.3287 23 18.5 23Z" /><path fill="#00832D" d="M14.5 1L20 6.5H14.5V1Z" /><path fill="white" d="M15.75 9.5H12.625H11.375H8.25H7V10.75V12.5V13.75V15.5V16.75H8.25H11.375H12.625H15.75H17V15.5V13.75V12.5V10.75V9.5H15.75ZM8.25 10.75H11.375V12.5H8.25V10.75ZM8.25 15.5V13.75H11.375V15.5H8.25ZM15.75 15.5H12.625V13.75H15.75V15.5ZM15.75 12.5H12.625V10.75H15.75V12.5Z" />
		</svg>
	);
};

LogoGoogleSheetsColor.iconName = "logo-google-sheets--color";

export default LogoGoogleSheetsColor;