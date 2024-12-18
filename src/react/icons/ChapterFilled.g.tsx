import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ChapterFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M14.75 3C14.3358 3 14 3.33579 14 3.75C14 4.16421 14.3358 4.5 14.75 4.5H20.25C20.6642 4.5 21 4.16421 21 3.75C21 3.33579 20.6642 3 20.25 3H14.75Z" /><path d="M14.75 8.5C14.3358 8.5 14 8.83579 14 9.25C14 9.66421 14.3358 10 14.75 10H20.25C20.6642 10 21 9.66421 21 9.25C21 8.83579 20.6642 8.5 20.25 8.5H14.75Z" /><path d="M3 14.75C3 14.3358 3.33579 14 3.75 14H20.25C20.6642 14 21 14.3358 21 14.75C21 15.1642 20.6642 15.5 20.25 15.5H3.75C3.33579 15.5 3 15.1642 3 14.75Z" /><path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H3.75Z" /><path d="M3 5C3 3.89543 3.89543 3 5 3H8C9.10457 3 10 3.89543 10 5V8C10 9.10457 9.10457 10 8 10H5C3.89543 10 3 9.10457 3 8V5Z" />
		</svg>
	);
};

ChapterFilled.iconName = "chapter--filled";

export default ChapterFilled;