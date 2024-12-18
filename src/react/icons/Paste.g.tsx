import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Paste = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M6.06301 3C6.28503 2.13739 7.06808 1.5 8 1.5H11C11.9319 1.5 12.715 2.13739 12.937 3H14C15.1046 3 16 3.89543 16 5V5.75C16 6.16421 15.6642 6.5 15.25 6.5C14.8358 6.5 14.5 6.16421 14.5 5.75V5C14.5 4.72386 14.2761 4.5 14 4.5H12.937C12.715 5.36261 11.9319 6 11 6H8C7.06808 6 6.28503 5.36261 6.06301 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V14C4.5 14.2761 4.72386 14.5 5 14.5H5.75C6.16421 14.5 6.5 14.8358 6.5 15.25C6.5 15.6642 6.16421 16 5.75 16H5C3.89543 16 3 15.1046 3 14V5C3 3.89543 3.89543 3 5 3H6.06301ZM8 3H11C11.2761 3 11.5 3.22386 11.5 3.5V4C11.5 4.27614 11.2761 4.5 11 4.5H8C7.72386 4.5 7.5 4.27614 7.5 4V3.5C7.5 3.22386 7.72386 3 8 3Z" clipRule="evenodd" /><path fillRule="evenodd" d="M10 8C8.89543 8 8 8.89543 8 10V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V10C21 8.89543 20.1046 8 19 8H10ZM10 9.5C9.72386 9.5 9.5 9.72386 9.5 10V19C9.5 19.2761 9.72386 19.5 10 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V10C19.5 9.72386 19.2761 9.5 19 9.5H10Z" clipRule="evenodd" />
		</svg>
	);
};

Paste.iconName = "paste";

export default Paste;