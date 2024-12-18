import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Scroll = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.21967 6.78033C8.51256 7.07322 8.98744 7.07322 9.28033 6.78033L12 4.06066L14.7197 6.78033C15.0126 7.07322 15.4874 7.07322 15.7803 6.78033C16.0732 6.48744 16.0732 6.01256 15.7803 5.71967L12.5303 2.46967C12.2374 2.17678 11.7626 2.17678 11.4697 2.46967L8.21967 5.71967C7.92678 6.01256 7.92678 6.48744 8.21967 6.78033Z" /><path d="M6.75 9C6.33579 9 6 9.33579 6 9.75C6 10.1642 6.33579 10.5 6.75 10.5H17.25C17.6642 10.5 18 10.1642 18 9.75C18 9.33579 17.6642 9 17.25 9H6.75Z" /><path d="M6.75 13.5C6.33579 13.5 6 13.8358 6 14.25C6 14.6642 6.33579 15 6.75 15H17.25C17.6642 15 18 14.6642 18 14.25C18 13.8358 17.6642 13.5 17.25 13.5H6.75Z" /><path d="M9.28033 17.2197C8.98744 16.9268 8.51256 16.9268 8.21967 17.2197C7.92678 17.5126 7.92678 17.9874 8.21967 18.2803L11.4697 21.5303C11.7626 21.8232 12.2374 21.8232 12.5303 21.5303L15.7803 18.2803C16.0732 17.9874 16.0732 17.5126 15.7803 17.2197C15.4874 16.9268 15.0126 16.9268 14.7197 17.2197L12 19.9393L9.28033 17.2197Z" />
		</svg>
	);
};

Scroll.iconName = "scroll";

export default Scroll;