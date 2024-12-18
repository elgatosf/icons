import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TextAlignLeft = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75C3 4.16421 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.16421 21 3.75C21 3.33579 20.6642 3 20.25 3H3.75Z" /><path d="M3.75 8.5C3.33579 8.5 3 8.83579 3 9.25C3 9.66421 3.33579 10 3.75 10H12.25C12.6642 10 13 9.66421 13 9.25C13 8.83579 12.6642 8.5 12.25 8.5H3.75Z" /><path d="M3 14.75C3 14.3358 3.33579 14 3.75 14H20.25C20.6642 14 21 14.3358 21 14.75C21 15.1642 20.6642 15.5 20.25 15.5H3.75C3.33579 15.5 3 15.1642 3 14.75Z" /><path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H12.25C12.6642 21 13 20.6642 13 20.25C13 19.8358 12.6642 19.5 12.25 19.5H3.75Z" />
		</svg>
	);
};

TextAlignLeft.iconName = "text-align-left";

export default TextAlignLeft;