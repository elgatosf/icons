import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AlignTop = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.75 4.5C3.33579 4.5 3 4.16421 3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75C21 4.16421 20.6642 4.5 20.25 4.5L3.75 4.5Z" /><path fillRule="evenodd" d="M6 8C6 6.89543 6.89543 6 8 6L9 6C10.1046 6 11 6.89543 11 8L11 19C11 20.1046 10.1046 21 9 21H8C6.89543 21 6 20.1046 6 19L6 8ZM7.5 19L7.5 8C7.5 7.72386 7.72386 7.5 8 7.5H9C9.27614 7.5 9.5 7.72386 9.5 8L9.5 19C9.5 19.2761 9.27614 19.5 9 19.5H8C7.72386 19.5 7.5 19.2761 7.5 19Z" clipRule="evenodd" /><path fillRule="evenodd" d="M15 6C13.8954 6 13 6.89543 13 8V14C13 15.1046 13.8954 16 15 16H16C17.1046 16 18 15.1046 18 14V8C18 6.89543 17.1046 6 16 6L15 6ZM14.5 8V14C14.5 14.2761 14.7239 14.5 15 14.5H16C16.2761 14.5 16.5 14.2761 16.5 14V8C16.5 7.72386 16.2761 7.5 16 7.5H15C14.7239 7.5 14.5 7.72386 14.5 8Z" clipRule="evenodd" />
		</svg>
	);
};

AlignTop.iconName = "align-top";

export default AlignTop;