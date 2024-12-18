import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Chapter = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M14 3.75C14 3.33579 14.3358 3 14.75 3H20.25C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5H14.75C14.3358 4.5 14 4.16421 14 3.75Z" /><path d="M14 9.25C14 8.83579 14.3358 8.5 14.75 8.5H20.25C20.6642 8.5 21 8.83579 21 9.25C21 9.66421 20.6642 10 20.25 10H14.75C14.3358 10 14 9.66421 14 9.25Z" /><path d="M3 14.75C3 14.3358 3.33579 14 3.75 14H20.25C20.6642 14 21 14.3358 21 14.75C21 15.1642 20.6642 15.5 20.25 15.5H3.75C3.33579 15.5 3 15.1642 3 14.75Z" /><path d="M3 20.25C3 19.8358 3.33579 19.5 3.75 19.5H11.25C11.6642 19.5 12 19.8358 12 20.25C12 20.6642 11.6642 21 11.25 21H3.75C3.33579 21 3 20.6642 3 20.25Z" /><path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H8C9.10457 3 10 3.89543 10 5V8C10 9.10457 9.10457 10 8 10H5C3.89543 10 3 9.10457 3 8V5ZM5 4.5H8C8.27614 4.5 8.5 4.72386 8.5 5V8C8.5 8.27614 8.27614 8.5 8 8.5H5C4.72386 8.5 4.5 8.27614 4.5 8V5C4.5 4.72386 4.72386 4.5 5 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Chapter.iconName = "chapter";

export default Chapter;