import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Redo = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M15.7197 3.28033C15.4268 2.98744 15.4268 2.51256 15.7197 2.21967C16.0126 1.92678 16.4874 1.92678 16.7803 2.21967L20.7803 6.21967C21.0732 6.51256 21.0732 6.98744 20.7803 7.28033L16.7803 11.2803C16.4874 11.5732 16.0126 11.5732 15.7197 11.2803C15.4268 10.9874 15.4268 10.5126 15.7197 10.2197L18.4393 7.5H10C6.96243 7.5 4.5 9.96243 4.5 13C4.5 16.0376 6.96243 18.5 10 18.5H14.25C14.6642 18.5 15 18.8358 15 19.25C15 19.6642 14.6642 20 14.25 20H10C6.13401 20 3 16.866 3 13C3 9.13401 6.13401 6 10 6H18.4393L15.7197 3.28033Z" />
		</svg>
	);
};

Redo.iconName = "redo";

export default Redo;