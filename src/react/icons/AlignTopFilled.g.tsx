import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AlignTopFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.75 4.5C3.33579 4.5 3 4.16421 3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5L3.75 4.5Z" /><path d="M8 6C6.89543 6 6 6.89543 6 8L6 19C6 20.1046 6.89543 21 8 21H9C10.1046 21 11 20.1046 11 19L11 8C11 6.89543 10.1046 6 9 6L8 6Z" /><path d="M13 8C13 6.89543 13.8954 6 15 6H16C17.1046 6 18 6.89543 18 8L18 14C18 15.1046 17.1046 16 16 16H15C13.8954 16 13 15.1046 13 14V8Z" />
		</svg>
	);
};

AlignTopFilled.iconName = "align-top--filled";

export default AlignTopFilled;