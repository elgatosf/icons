import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CopyFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M6.5 8H5C3.89543 8 3 8.89543 3 10V19C3 20.1046 3.89543 21 5 21H14C15.1046 21 16 20.1046 16 19V17.5H10C8.067 17.5 6.5 15.933 6.5 14V8Z" /><path d="M21 5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5V14C8 15.1046 8.89543 16 10 16H19C20.1046 16 21 15.1046 21 14V5Z" />
		</svg>
	);
};

CopyFilled.iconName = "copy--filled";

export default CopyFilled;