import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChevronsLeftRight = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.78033 14.7197C9.07322 15.0126 9.07322 15.4874 8.78033 15.7803C8.48744 16.0732 8.01256 16.0732 7.71967 15.7803L4.46967 12.5303C4.17678 12.2374 4.17678 11.7626 4.46967 11.4697L7.71967 8.21967C8.01256 7.92678 8.48744 7.92678 8.78033 8.21967C9.07322 8.51256 9.07322 8.98744 8.78033 9.28033L6.06066 12L8.78033 14.7197Z" /><path d="M15.2197 14.7197C14.9268 15.0126 14.9268 15.4874 15.2197 15.7803C15.5126 16.0732 15.9874 16.0732 16.2803 15.7803L19.5303 12.5303C19.8232 12.2374 19.8232 11.7626 19.5303 11.4697L16.2803 8.21967C15.9874 7.92678 15.5126 7.92678 15.2197 8.21967C14.9268 8.51256 14.9268 8.98744 15.2197 9.28033L17.9393 12L15.2197 14.7197Z" />
		</svg>
	);
};

ChevronsLeftRight.iconName = "chevrons-left-right";

export default ChevronsLeftRight;