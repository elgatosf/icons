import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ExitFullscreen = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M10 3.75C10 3.33579 9.66421 3 9.25 3C8.83579 3 8.5 3.33579 8.5 3.75V8C8.5 8.27614 8.27614 8.5 8 8.5H3.75C3.33579 8.5 3 8.83579 3 9.25C3 9.66421 3.33579 10 3.75 10H8C9.10457 10 10 9.10457 10 8V3.75Z" /><path d="M14 20.25C14 20.6642 14.3358 21 14.75 21C15.1642 21 15.5 20.6642 15.5 20.25V16C15.5 15.7239 15.7239 15.5 16 15.5H20.25C20.6642 15.5 21 15.1642 21 14.75C21 14.3358 20.6642 14 20.25 14H16C14.8954 14 14 14.8954 14 16V20.25Z" /><path d="M21 9.25C21 9.66421 20.6642 10 20.25 10H16C14.8954 10 14 9.10457 14 8V3.75C14 3.33579 14.3358 3 14.75 3C15.1642 3 15.5 3.33579 15.5 3.75V8C15.5 8.27614 15.7239 8.5 16 8.5H20.25C20.6642 8.5 21 8.83579 21 9.25Z" /><path d="M3.75 14C3.33579 14 3 14.3358 3 14.75C3 15.1642 3.33579 15.5 3.75 15.5L8 15.5C8.27614 15.5 8.5 15.7239 8.5 16L8.5 20.25C8.5 20.6642 8.83579 21 9.25 21C9.66421 21 10 20.6642 10 20.25L10 16C10 14.8954 9.10457 14 8 14L3.75 14Z" />
		</svg>
	);
};

ExitFullscreen.iconName = "exit-fullscreen";

export default ExitFullscreen;