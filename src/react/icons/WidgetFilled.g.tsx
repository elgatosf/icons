import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const WidgetFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3 17C3 15.8954 3.89543 15 5 15H9C10.1046 15 11 15.8954 11 17V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V17Z" /><path d="M13 13C13 11.8954 13.8954 11 15 11H19C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V13Z" /><path d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V11C11 12.1046 10.1046 13 9 13H5C3.89543 13 3 12.1046 3 11V5Z" /><path d="M13 5C13 3.89543 13.8954 3 15 3H19C20.1046 3 21 3.89543 21 5V7C21 8.10457 20.1046 9 19 9H15C13.8954 9 13 8.10457 13 7V5Z" />
		</svg>
	);
};

WidgetFilled.iconName = "widget--filled";

export default WidgetFilled;