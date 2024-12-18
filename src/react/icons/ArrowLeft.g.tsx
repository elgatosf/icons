import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ArrowLeft = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21 12C21 12.4142 20.6642 12.75 20.25 12.75L5.81066 12.75L10.7803 17.7197C11.0732 18.0126 11.0732 18.4874 10.7803 18.7803C10.4874 19.0732 10.0126 19.0732 9.71967 18.7803L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.71967 5.21967C10.0126 4.92678 10.4874 4.92678 10.7803 5.21967C11.0732 5.51256 11.0732 5.98744 10.7803 6.28033L5.81066 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12Z" />
		</svg>
	);
};

ArrowLeft.iconName = "arrow-left";

export default ArrowLeft;