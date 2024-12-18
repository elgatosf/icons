import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AlignBottomFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M6 16C6 17.1046 6.89543 18 8 18H9C10.1046 18 11 17.1046 11 16V5C11 3.89543 10.1046 3 9 3H8C6.89543 3 6 3.89543 6 5L6 16Z" /><path d="M15 18C13.8954 18 13 17.1046 13 16V10C13 8.89543 13.8954 8 15 8H16C17.1046 8 18 8.89543 18 10V16C18 17.1046 17.1046 18 16 18H15Z" /><path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75Z" />
		</svg>
	);
};

AlignBottomFilled.iconName = "align-bottom--filled";

export default AlignBottomFilled;