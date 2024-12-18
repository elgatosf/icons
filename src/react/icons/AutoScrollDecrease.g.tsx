import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AutoScrollDecrease = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M6.28033 7.78033C5.98744 8.07322 5.51256 8.07322 5.21967 7.78033C4.92678 7.48744 4.92678 7.01256 5.21967 6.71967L9.46967 2.46967C9.76256 2.17678 10.2374 2.17678 10.5303 2.46967L14.7803 6.71967C15.0732 7.01256 15.0732 7.48744 14.7803 7.78033C14.4874 8.07322 14.0126 8.07322 13.7197 7.78033L10 4.06066L6.28033 7.78033Z" /><path d="M6.28033 16.2197C5.98744 15.9268 5.51256 15.9268 5.21967 16.2197C4.92678 16.5126 4.92678 16.9874 5.21967 17.2803L9.46967 21.5303C9.76256 21.8232 10.2374 21.8232 10.5303 21.5303L11.6744 20.3863C11.4292 19.8924 11.245 19.363 11.1316 18.8077L10 19.9393L6.28033 16.2197Z" /><path fillRule="evenodd" d="M13 12C13 12.3388 12.9439 12.6644 12.8404 12.9681C12.422 13.3982 12.0627 13.886 11.7754 14.4185C11.2783 14.784 10.6644 15 10 15C8.34315 15 7 13.6569 7 12C7 10.3431 8.34315 9 10 9C11.6569 9 13 10.3431 13 12ZM11.5 12C11.5 12.8284 10.8284 13.5 10 13.5C9.17157 13.5 8.5 12.8284 8.5 12C8.5 11.1716 9.17157 10.5 10 10.5C10.8284 10.5 11.5 11.1716 11.5 12Z" clipRule="evenodd" /><path fillRule="evenodd" d="M17.5 23C20.5376 23 23 20.5376 23 17.5C23 14.4624 20.5376 12 17.5 12C14.4624 12 12 14.4624 12 17.5C12 20.5376 14.4624 23 17.5 23ZM14.5001 17C14.2239 17 14.0001 17.2239 14.0001 17.5C14.0001 17.7761 14.2239 18 14.5001 18H20.5001C20.7762 18 21.0001 17.7761 21.0001 17.5C21.0001 17.2239 20.7762 17 20.5001 17H14.5001Z" clipRule="evenodd" />
		</svg>
	);
};

AutoScrollDecrease.iconName = "auto-scroll-decrease";

export default AutoScrollDecrease;