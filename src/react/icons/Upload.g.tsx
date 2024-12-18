import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Upload = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M17.7803 9.53033C17.4874 9.82322 17.0126 9.82322 16.7197 9.53033L12.75 5.56066L12.75 17C12.75 17.4142 12.4142 17.75 12 17.75C11.5858 17.75 11.25 17.4142 11.25 17L11.25 5.56066L7.28033 9.53033C6.98744 9.82322 6.51256 9.82322 6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967L11.4697 3.21967C11.7626 2.92678 12.2374 2.92678 12.5303 3.21967L17.7803 8.46967C18.0732 8.76256 18.0732 9.23744 17.7803 9.53033Z" /><path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75Z" />
		</svg>
	);
};

Upload.iconName = "upload";

export default Upload;