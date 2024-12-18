import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AutoScrollFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7.21967 7.78033C7.51256 8.07322 7.98744 8.07322 8.28033 7.78033L12 4.06066L15.7197 7.78033C16.0126 8.07322 16.4874 8.07322 16.7803 7.78033C17.0732 7.48744 17.0732 7.01256 16.7803 6.71967L12.5303 2.46967C12.2374 2.17678 11.7626 2.17678 11.4697 2.46967L7.21967 6.71967C6.92678 7.01256 6.92678 7.48744 7.21967 7.78033Z" /><path d="M7.21967 16.2197C7.51256 15.9268 7.98744 15.9268 8.28033 16.2197L12 19.9393L15.7197 16.2197C16.0126 15.9268 16.4874 15.9268 16.7803 16.2197C17.0732 16.5126 17.0732 16.9874 16.7803 17.2803L12.5303 21.5303C12.2374 21.8232 11.7626 21.8232 11.4697 21.5303L7.21967 17.2803C6.92678 16.9874 6.92678 16.5126 7.21967 16.2197Z" /><path fillRule="evenodd" d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" clipRule="evenodd" />
		</svg>
	);
};

AutoScrollFilled.iconName = "auto-scroll--filled";

export default AutoScrollFilled;