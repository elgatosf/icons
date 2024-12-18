import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PluginFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M4 8C4 6.89543 4.89543 6 6 6H8.5C8.77614 6 9 5.77614 9 5.5V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V5.5C15 5.77614 15.2239 6 15.5 6H18C19.1046 6 20 6.89543 20 8V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19L4 17.5C4 16.3954 4.89543 15.5 6 15.5H6.5C7.60457 15.5 8.5 14.6046 8.5 13.5C8.5 12.3954 7.60457 11.5 6.5 11.5H6C4.89543 11.5 4 10.6046 4 9.5L4 8Z" />
		</svg>
	);
};

PluginFilled.iconName = "plugin--filled";

export default PluginFilled;