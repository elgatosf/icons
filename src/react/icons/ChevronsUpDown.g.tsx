import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChevronsUpDown = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9.28033 8.78033C8.98744 9.07322 8.51256 9.07322 8.21967 8.78033C7.92678 8.48744 7.92678 8.01256 8.21967 7.71967L11.4697 4.46967C11.7626 4.17678 12.2374 4.17678 12.5303 4.46967L15.7803 7.71967C16.0732 8.01256 16.0732 8.48744 15.7803 8.78033C15.4874 9.07322 15.0126 9.07322 14.7197 8.78033L12 6.06066L9.28033 8.78033Z" /><path d="M9.28033 15.2197C8.98744 14.9268 8.51256 14.9268 8.21967 15.2197C7.92678 15.5126 7.92678 15.9874 8.21967 16.2803L11.4697 19.5303C11.7626 19.8232 12.2374 19.8232 12.5303 19.5303L15.7803 16.2803C16.0732 15.9874 16.0732 15.5126 15.7803 15.2197C15.4874 14.9268 15.0126 14.9268 14.7197 15.2197L12 17.9393L9.28033 15.2197Z" />
		</svg>
	);
};

ChevronsUpDown.iconName = "chevrons-up-down";

export default ChevronsUpDown;