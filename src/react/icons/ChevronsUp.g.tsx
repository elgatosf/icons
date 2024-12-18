import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChevronsUp = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L12.5303 11.4697C12.2374 11.1768 11.7626 11.1768 11.4697 11.4697L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803Z" /><path d="M16.7197 12.7803C17.0126 13.0732 17.4874 13.0732 17.7803 12.7803C18.0732 12.4874 18.0732 12.0126 17.7803 11.7197L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L12 8.06066L16.7197 12.7803Z" />
		</svg>
	);
};

ChevronsUp.iconName = "chevrons-up";

export default ChevronsUp;