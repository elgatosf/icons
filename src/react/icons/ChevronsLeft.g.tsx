import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChevronsLeft = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033Z" /><path d="M12.7803 7.28033C13.0732 6.98744 13.0732 6.51256 12.7803 6.21967C12.4874 5.92678 12.0126 5.92678 11.7197 6.21967L6.46967 11.4697C6.17678 11.7626 6.17678 12.2374 6.46967 12.5303L11.7197 17.7803C12.0126 18.0732 12.4874 18.0732 12.7803 17.7803C13.0732 17.4874 13.0732 17.0126 12.7803 16.7197L8.06066 12L12.7803 7.28033Z" />
		</svg>
	);
};

ChevronsLeft.iconName = "chevrons-left";

export default ChevronsLeft;