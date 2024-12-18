import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChevronUp = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M16.7803 14.7803C16.4874 15.0732 16.0126 15.0732 15.7197 14.7803L12 11.0607L8.28033 14.7803C7.98744 15.0732 7.51256 15.0732 7.21967 14.7803C6.92678 14.4874 6.92678 14.0126 7.21967 13.7197L11.4697 9.46967C11.7626 9.17678 12.2374 9.17678 12.5303 9.46967L16.7803 13.7197C17.0732 14.0126 17.0732 14.4874 16.7803 14.7803Z" />
		</svg>
	);
};

ChevronUp.iconName = "chevron-up";

export default ChevronUp;