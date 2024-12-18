import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Fullscreen = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3 9.25C3 9.66421 3.33579 10 3.75 10C4.16421 10 4.5 9.66421 4.5 9.25L4.5 5C4.5 4.72386 4.72386 4.5 5 4.5L9.25 4.5C9.66421 4.5 10 4.16421 10 3.75C10 3.33579 9.66421 3 9.25 3H5C3.89543 3 3 3.89543 3 5V9.25Z" /><path d="M21 14.75C21 14.3358 20.6642 14 20.25 14C19.8358 14 19.5 14.3358 19.5 14.75V19C19.5 19.2761 19.2761 19.5 19 19.5H14.75C14.3358 19.5 14 19.8358 14 20.25C14 20.6642 14.3358 21 14.75 21H19C20.1046 21 21 20.1046 21 19V14.75Z" /><path d="M14 3.75C14 3.33579 14.3358 3 14.75 3H19C20.1046 3 21 3.89543 21 5V9.25C21 9.66421 20.6642 10 20.25 10C19.8358 10 19.5 9.66421 19.5 9.25V5C19.5 4.72386 19.2761 4.5 19 4.5H14.75C14.3358 4.5 14 4.16421 14 3.75Z" /><path d="M9.25 21C9.66421 21 10 20.6642 10 20.25C10 19.8358 9.66421 19.5 9.25 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19L4.5 14.75C4.5 14.3358 4.16421 14 3.75 14C3.33579 14 3 14.3358 3 14.75V19C3 20.1046 3.89543 21 5 21H9.25Z" />
		</svg>
	);
};

Fullscreen.iconName = "fullscreen";

export default Fullscreen;