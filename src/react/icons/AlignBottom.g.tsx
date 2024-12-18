import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AlignBottom = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M6 16C6 17.1046 6.89543 18 8 18H9C10.1046 18 11 17.1046 11 16L11 5C11 3.89543 10.1046 3 9 3H8C6.89543 3 6 3.89543 6 5L6 16ZM7.5 5L7.5 16C7.5 16.2761 7.72386 16.5 8 16.5H9C9.27614 16.5 9.5 16.2761 9.5 16L9.5 5C9.5 4.72386 9.27614 4.5 9 4.5H8C7.72386 4.5 7.5 4.72386 7.5 5Z" clipRule="evenodd" /><path d="M3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75Z" /><path fillRule="evenodd" d="M15 18C13.8954 18 13 17.1046 13 16V10C13 8.89543 13.8954 8 15 8H16C17.1046 8 18 8.89543 18 10V16C18 17.1046 17.1046 18 16 18H15ZM14.5 16V10C14.5 9.72386 14.7239 9.5 15 9.5H16C16.2761 9.5 16.5 9.72386 16.5 10V16C16.5 16.2761 16.2761 16.5 16 16.5H15C14.7239 16.5 14.5 16.2761 14.5 16Z" clipRule="evenodd" />
		</svg>
	);
};

AlignBottom.iconName = "align-bottom";

export default AlignBottom;