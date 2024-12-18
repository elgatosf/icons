import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ArrowUp = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 21C12.4142 21 12.75 20.6642 12.75 20.25V5.81066L17.7197 10.7803C18.0126 11.0732 18.4874 11.0732 18.7803 10.7803C19.0732 10.4874 19.0732 10.0126 18.7803 9.71967L12.5303 3.46967C12.2374 3.17678 11.7626 3.17678 11.4697 3.46967L5.21967 9.71967C4.92678 10.0126 4.92678 10.4874 5.21967 10.7803C5.51256 11.0732 5.98744 11.0732 6.28033 10.7803L11.25 5.81066V20.25C11.25 20.6642 11.5858 21 12 21Z" />
		</svg>
	);
};

ArrowUp.iconName = "arrow-up";

export default ArrowUp;