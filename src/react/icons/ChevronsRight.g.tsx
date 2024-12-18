import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChevronsRight = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12.5303 12.5303C12.8232 12.2374 12.8232 11.7626 12.5303 11.4697L7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197Z" /><path d="M11.2197 16.7197C10.9268 17.0126 10.9268 17.4874 11.2197 17.7803C11.5126 18.0732 11.9874 18.0732 12.2803 17.7803L17.5303 12.5303C17.8232 12.2374 17.8232 11.7626 17.5303 11.4697L12.2803 6.21967C11.9874 5.92678 11.5126 5.92678 11.2197 6.21967C10.9268 6.51256 10.9268 6.98744 11.2197 7.28033L15.9393 12L11.2197 16.7197Z" />
		</svg>
	);
};

ChevronsRight.iconName = "chevrons-right";

export default ChevronsRight;