import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChevronsDownDecrease = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z" /><path d="M7.28033 11.2197C6.98744 10.9268 6.51256 10.9268 6.21967 11.2197C5.92678 11.5126 5.92678 11.9874 6.21967 12.2803L11.0137 17.0744C11.0534 16.461 11.1781 15.8708 11.3762 15.3155L7.28033 11.2197Z" /><path fillRule="evenodd" d="M23 17.5C23 20.5376 20.5376 23 17.5 23C14.4624 23 12 20.5376 12 17.5C12 14.4624 14.4624 12 17.5 12C20.5376 12 23 14.4624 23 17.5ZM14.0001 17.5C14.0001 17.2239 14.2239 17 14.5001 17H20.5001C20.7762 17 21.0001 17.2239 21.0001 17.5C21.0001 17.7761 20.7762 18 20.5001 18H14.5001C14.2239 18 14.0001 17.7761 14.0001 17.5Z" clipRule="evenodd" />
		</svg>
	);
};

ChevronsDownDecrease.iconName = "chevrons-down-decrease";

export default ChevronsDownDecrease;