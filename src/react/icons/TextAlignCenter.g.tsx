import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TextAlignCenter = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75C3 4.16421 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.16421 21 3.75C21 3.33579 20.6642 3 20.25 3H3.75Z" /><path d="M7.75 8.5C7.33579 8.5 7 8.83579 7 9.25C7 9.66421 7.33579 10 7.75 10H16.25C16.6642 10 17 9.66421 17 9.25C17 8.83579 16.6642 8.5 16.25 8.5H7.75Z" /><path d="M3 14.75C3 14.3358 3.33579 14 3.75 14H20.25C20.6642 14 21 14.3358 21 14.75C21 15.1642 20.6642 15.5 20.25 15.5H3.75C3.33579 15.5 3 15.1642 3 14.75Z" /><path d="M7.75 19.5C7.33579 19.5 7 19.8358 7 20.25C7 20.6642 7.33579 21 7.75 21H16.25C16.6642 21 17 20.6642 17 20.25C17 19.8358 16.6642 19.5 16.25 19.5H7.75Z" />
		</svg>
	);
};

TextAlignCenter.iconName = "text-align-center";

export default TextAlignCenter;