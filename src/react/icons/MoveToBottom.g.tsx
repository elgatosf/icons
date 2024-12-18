import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MoveToBottom = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.28033 7.21967C7.98744 6.92678 7.51256 6.92678 7.21967 7.21967C6.92678 7.51256 6.92678 7.98744 7.21967 8.28033L11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L16.7803 8.28033C17.0732 7.98744 17.0732 7.51256 16.7803 7.21967C16.4874 6.92678 16.0126 6.92678 15.7197 7.21967L12 10.9393L8.28033 7.21967Z" /><path d="M21 16.25C21 16.6642 20.6642 17 20.25 17L3.75 17C3.33579 17 3 16.6642 3 16.25C3 15.8358 3.33579 15.5 3.75 15.5L20.25 15.5C20.6642 15.5 21 15.8358 21 16.25Z" />
		</svg>
	);
};

MoveToBottom.iconName = "move-to-bottom";

export default MoveToBottom;