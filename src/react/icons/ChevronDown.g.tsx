import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChevronDown = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7.21967 10.2197C7.51256 9.92678 7.98744 9.92678 8.28033 10.2197L12 13.9393L15.7197 10.2197C16.0126 9.92678 16.4874 9.92678 16.7803 10.2197C17.0732 10.5126 17.0732 10.9874 16.7803 11.2803L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L7.21967 11.2803C6.92678 10.9874 6.92678 10.5126 7.21967 10.2197Z" />
		</svg>
	);
};

ChevronDown.iconName = "chevron-down";

export default ChevronDown;