import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AlignRightFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M19.5 3.75C19.5 3.33579 19.8358 3 20.25 3C20.6642 3 21 3.33579 21 3.75V20.25C21 20.6642 20.6642 21 20.25 21C19.8358 21 19.5 20.6642 19.5 20.25V3.75Z" /><path d="M18 15C18 13.8954 17.1046 13 16 13H10C8.89543 13 8 13.8954 8 15V16C8 17.1046 8.89543 18 10 18H16C17.1046 18 18 17.1046 18 16V15Z" /><path d="M16 6C17.1046 6 18 6.89543 18 8V9C18 10.1046 17.1046 11 16 11H5C3.89543 11 3 10.1046 3 9V8C3 6.89543 3.89543 6 5 6H16Z" />
		</svg>
	);
};

AlignRightFilled.iconName = "align-right--filled";

export default AlignRightFilled;