import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Plugin = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M5.5 8V10C5.5 10.2761 5.72386 10.5 6 10.5H6.5C8.15685 10.5 9.5 11.8431 9.5 13.5C9.5 15.1569 8.15685 16.5 6.5 16.5H6C5.72386 16.5 5.5 16.7239 5.5 17V19C5.5 19.2761 5.72386 19.5 6 19.5H18C18.2761 19.5 18.5 19.2761 18.5 19V8C18.5 7.72386 18.2761 7.5 18 7.5H15.5C14.3954 7.5 13.5 6.60457 13.5 5.5V5C13.5 4.17157 12.8284 3.5 12 3.5C11.1716 3.5 10.5 4.17157 10.5 5V5.5C10.5 6.60457 9.60457 7.5 8.5 7.5H6C5.72386 7.5 5.5 7.72386 5.5 8ZM6 6C4.89543 6 4 6.89543 4 8V10C4 11.1046 4.89543 12 6 12H6.5C7.32843 12 8 12.6716 8 13.5C8 14.3284 7.32843 15 6.5 15H6C4.89543 15 4 15.8954 4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V8C20 6.89543 19.1046 6 18 6H15.5C15.2239 6 15 5.77614 15 5.5V5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V5.5C9 5.77614 8.77614 6 8.5 6H6Z" clipRule="evenodd" />
		</svg>
	);
};

Plugin.iconName = "plugin";

export default Plugin;