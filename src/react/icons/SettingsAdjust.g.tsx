import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const SettingsAdjust = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M16.5 7.625C16.5 8.03921 16.8358 8.375 17.25 8.375C17.6642 8.375 18 8.03921 18 7.625V6.5L20.25 6.5C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5L18 5V3.875C18 3.46079 17.6642 3.125 17.25 3.125C16.8358 3.125 16.5 3.46079 16.5 3.875V5L3.75 5C3.33579 5 3 5.33578 3 5.75C3 6.16421 3.33579 6.5 3.75 6.5L16.5 6.5V7.625Z" /><path d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H6L6 10.125C6 9.71079 6.33579 9.375 6.75 9.375C7.16421 9.375 7.5 9.71079 7.5 10.125V11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75L7.5 12.75V13.875C7.5 14.2892 7.16421 14.625 6.75 14.625C6.33579 14.625 6 14.2892 6 13.875L6 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z" /><path d="M21 18.25C21 18.6642 20.6642 19 20.25 19H18V20.125C18 20.5392 17.6642 20.875 17.25 20.875C16.8358 20.875 16.5 20.5392 16.5 20.125V19L3.75 19C3.33579 19 3 18.6642 3 18.25C3 17.8358 3.33579 17.5 3.75 17.5L16.5 17.5V16.375C16.5 15.9608 16.8358 15.625 17.25 15.625C17.6642 15.625 18 15.9608 18 16.375V17.5H20.25C20.6642 17.5 21 17.8358 21 18.25Z" />
		</svg>
	);
};

SettingsAdjust.iconName = "settings-adjust";

export default SettingsAdjust;