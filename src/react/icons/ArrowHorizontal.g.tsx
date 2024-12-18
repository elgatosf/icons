import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ArrowHorizontal = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.78033 5.21967C9.07322 5.51256 9.07322 5.98744 8.78033 6.28033L3.81066 11.25H20.1893L15.2197 6.28033C14.9268 5.98744 14.9268 5.51256 15.2197 5.21967C15.5126 4.92678 15.9874 4.92678 16.2803 5.21967L22.5303 11.4697C22.8232 11.7626 22.8232 12.2374 22.5303 12.5303L16.2803 18.7803C15.9874 19.0732 15.5126 19.0732 15.2197 18.7803C14.9268 18.4874 14.9268 18.0126 15.2197 17.7197L20.1893 12.75H3.81066L8.78033 17.7197C9.07322 18.0126 9.07322 18.4874 8.78033 18.7803C8.48744 19.0732 8.01256 19.0732 7.71967 18.7803L1.46967 12.5303C1.17678 12.2374 1.17678 11.7626 1.46967 11.4697L7.71967 5.21967C8.01256 4.92678 8.48744 4.92678 8.78033 5.21967Z" />
		</svg>
	);
};

ArrowHorizontal.iconName = "arrow-horizontal";

export default ArrowHorizontal;