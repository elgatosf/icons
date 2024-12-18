import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AppsFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3 5C3 3.89543 3.89543 3 5 3H6C7.10457 3 8 3.89543 8 5V6C8 7.10457 7.10457 8 6 8H5C3.89543 8 3 7.10457 3 6V5Z" /><path d="M3 18C3 16.8954 3.89543 16 5 16H6C7.10457 16 8 16.8954 8 18V19C8 20.1046 7.10457 21 6 21H5C3.89543 21 3 20.1046 3 19V18Z" /><path d="M5 9.5C3.89543 9.5 3 10.3954 3 11.5V12.5C3 13.6046 3.89543 14.5 5 14.5H6C7.10457 14.5 8 13.6046 8 12.5V11.5C8 10.3954 7.10457 9.5 6 9.5H5Z" /><path d="M16 5C16 3.89543 16.8954 3 18 3H19C20.1046 3 21 3.89543 21 5V6C21 7.10457 20.1046 8 19 8H18C16.8954 8 16 7.10457 16 6V5Z" /><path d="M18 16C16.8954 16 16 16.8954 16 18V19C16 20.1046 16.8954 21 18 21H19C20.1046 21 21 20.1046 21 19V18C21 16.8954 20.1046 16 19 16H18Z" /><path d="M16 11.5C16 10.3954 16.8954 9.5 18 9.5H19C20.1046 9.5 21 10.3954 21 11.5V12.5C21 13.6046 20.1046 14.5 19 14.5H18C16.8954 14.5 16 13.6046 16 12.5V11.5Z" /><path d="M11.5 3C10.3954 3 9.5 3.89543 9.5 5V6C9.5 7.10457 10.3954 8 11.5 8H12.5C13.6046 8 14.5 7.10457 14.5 6V5C14.5 3.89543 13.6046 3 12.5 3H11.5Z" /><path d="M9.5 18C9.5 16.8954 10.3954 16 11.5 16H12.5C13.6046 16 14.5 16.8954 14.5 18V19C14.5 20.1046 13.6046 21 12.5 21H11.5C10.3954 21 9.5 20.1046 9.5 19V18Z" /><path d="M11.5 9.5C10.3954 9.5 9.5 10.3954 9.5 11.5V12.5C9.5 13.6046 10.3954 14.5 11.5 14.5H12.5C13.6046 14.5 14.5 13.6046 14.5 12.5V11.5C14.5 10.3954 13.6046 9.5 12.5 9.5H11.5Z" />
		</svg>
	);
};

AppsFilled.iconName = "apps--filled";

export default AppsFilled;