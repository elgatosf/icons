import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChevronRight = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M10.2197 16.7803C9.92678 16.4874 9.92678 16.0126 10.2197 15.7197L13.9393 12L10.2197 8.28033C9.92678 7.98744 9.92678 7.51256 10.2197 7.21967C10.5126 6.92678 10.9874 6.92678 11.2803 7.21967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L11.2803 16.7803C10.9874 17.0732 10.5126 17.0732 10.2197 16.7803Z" />
		</svg>
	);
};

ChevronRight.iconName = "chevron-right";

export default ChevronRight;