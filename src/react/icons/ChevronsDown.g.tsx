import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChevronsDown = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z" /><path d="M7.28033 11.2197C6.98744 10.9268 6.51256 10.9268 6.21967 11.2197C5.92678 11.5126 5.92678 11.9874 6.21967 12.2803L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L17.7803 12.2803C18.0732 11.9874 18.0732 11.5126 17.7803 11.2197C17.4874 10.9268 17.0126 10.9268 16.7197 11.2197L12 15.9393L7.28033 11.2197Z" />
		</svg>
	);
};

ChevronsDown.iconName = "chevrons-down";

export default ChevronsDown;