import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PaddingYFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21 3.75C21 4.16421 20.6642 4.5 20.25 4.5L3.75 4.5C3.33579 4.5 3 4.16421 3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75Z" /><path d="M7 9C7 7.89543 7.89543 7 9 7H15C16.1046 7 17 7.89543 17 9V15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V9Z" /><path d="M20.25 21C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25Z" />
		</svg>
	);
};

PaddingYFilled.iconName = "padding-y--filled";

export default PaddingYFilled;