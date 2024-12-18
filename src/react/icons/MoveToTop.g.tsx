import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MoveToTop = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3 7.75C3 7.33579 3.33579 7 3.75 7L20.25 7C20.6642 7 21 7.33579 21 7.75C21 8.16422 20.6642 8.5 20.25 8.5L3.75 8.5C3.33579 8.5 3 8.16421 3 7.75Z" /><path d="M15.7197 16.7803C16.0126 17.0732 16.4874 17.0732 16.7803 16.7803C17.0732 16.4874 17.0732 16.0126 16.7803 15.7197L12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697L7.21967 15.7197C6.92678 16.0126 6.92678 16.4874 7.21967 16.7803C7.51256 17.0732 7.98744 17.0732 8.28033 16.7803L12 13.0607L15.7197 16.7803Z" />
		</svg>
	);
};

MoveToTop.iconName = "move-to-top";

export default MoveToTop;