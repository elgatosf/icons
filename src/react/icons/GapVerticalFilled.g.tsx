import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const GapVerticalFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9 3C7.89543 3 7 3.89543 7 5V7C7 8.10457 7.89543 9 9 9H15C16.1046 9 17 8.10457 17 7V5C17 3.89543 16.1046 3 15 3H9Z" /><path d="M21 12C21 12.4142 20.6642 12.75 20.25 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12Z" /><path d="M7 17C7 15.8954 7.89543 15 9 15H15C16.1046 15 17 15.8954 17 17V19C17 20.1046 16.1046 21 15 21H9C7.89543 21 7 20.1046 7 19V17Z" />
		</svg>
	);
};

GapVerticalFilled.iconName = "gap-vertical--filled";

export default GapVerticalFilled;