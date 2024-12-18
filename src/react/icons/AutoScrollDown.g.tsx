import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AutoScrollDown = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7.21967 13.2197C7.51256 12.9268 7.98744 12.9268 8.28033 13.2197L12 16.9393L15.7197 13.2197C16.0126 12.9268 16.4874 12.9268 16.7803 13.2197C17.0732 13.5126 17.0732 13.9874 16.7803 14.2803L12.5303 18.5303C12.2374 18.8232 11.7626 18.8232 11.4697 18.5303L7.21967 14.2803C6.92678 13.9874 6.92678 13.5126 7.21967 13.2197Z" /><path fillRule="evenodd" d="M15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12C13.6569 12 15 10.6569 15 9ZM13.5 9C13.5 8.17157 12.8284 7.5 12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5C12.8284 10.5 13.5 9.82843 13.5 9Z" clipRule="evenodd" />
		</svg>
	);
};

AutoScrollDown.iconName = "auto-scroll-down";

export default AutoScrollDown;