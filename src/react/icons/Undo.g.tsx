import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Undo = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.28033 3.28033C8.57322 2.98744 8.57322 2.51256 8.28033 2.21967C7.98744 1.92678 7.51256 1.92678 7.21967 2.21967L3.21967 6.21967C2.92678 6.51256 2.92678 6.98744 3.21967 7.28033L7.21967 11.2803C7.51256 11.5732 7.98744 11.5732 8.28033 11.2803C8.57322 10.9874 8.57322 10.5126 8.28033 10.2197L5.56066 7.5H14C17.0376 7.5 19.5 9.96243 19.5 13C19.5 16.0376 17.0376 18.5 14 18.5H9.75C9.33579 18.5 9 18.8358 9 19.25C9 19.6642 9.33579 20 9.75 20H14C17.866 20 21 16.866 21 13C21 9.13401 17.866 6 14 6H5.56066L8.28033 3.28033Z" />
		</svg>
	);
};

Undo.iconName = "undo";

export default Undo;