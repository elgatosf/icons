import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Margin = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM19 4.5H17.5V6.5H19.5V5C19.5 4.72386 19.2761 4.5 19 4.5ZM19.5 8H17.5V16H19.5V8ZM16 6.5V4.5H8V6.5L16 6.5ZM8 8L16 8V16L8 16V8ZM6.5 6.5V4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V6.5H6.5ZM4.5 8H6.5V16H4.5V8ZM8 17.5L16 17.5V19.5H8V17.5ZM19 19.5H17.5V17.5H19.5V19C19.5 19.2761 19.2761 19.5 19 19.5ZM4.5 17.5H6.5V19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V17.5Z" clipRule="evenodd" />
		</svg>
	);
};

Margin.iconName = "margin";

export default Margin;