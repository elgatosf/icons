import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TextAlignRight = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.75 3C3.33579 3 3 3.33579 3 3.75C3 4.16421 3.33579 4.5 3.75 4.5H20.25C20.6642 4.5 21 4.16421 21 3.75C21 3.33579 20.6642 3 20.25 3H3.75Z" /><path d="M11.75 8.5C11.3358 8.5 11 8.83579 11 9.25C11 9.66421 11.3358 10 11.75 10H20.25C20.6642 10 21 9.66421 21 9.25C21 8.83579 20.6642 8.5 20.25 8.5H11.75Z" /><path d="M3 14.75C3 14.3358 3.33579 14 3.75 14H20.25C20.6642 14 21 14.3358 21 14.75C21 15.1642 20.6642 15.5 20.25 15.5H3.75C3.33579 15.5 3 15.1642 3 14.75Z" /><path d="M11.75 19.5C11.3358 19.5 11 19.8358 11 20.25C11 20.6642 11.3358 21 11.75 21H20.25C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H11.75Z" />
		</svg>
	);
};

TextAlignRight.iconName = "text-align-right";

export default TextAlignRight;