import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ArrowRight = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25L18.1893 11.25L13.2197 6.28033C12.9268 5.98744 12.9268 5.51256 13.2197 5.21967C13.5126 4.92678 13.9874 4.92678 14.2803 5.21967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.2803 18.7803C13.9874 19.0732 13.5126 19.0732 13.2197 18.7803C12.9268 18.4874 12.9268 18.0126 13.2197 17.7197L18.1893 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12Z" />
		</svg>
	);
};

ArrowRight.iconName = "arrow-right";

export default ArrowRight;