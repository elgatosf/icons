import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AlignLeft = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M4.5 3.75C4.5 3.33579 4.16421 3 3.75 3C3.33579 3 3 3.33579 3 3.75V20.25C3 20.6642 3.33579 21 3.75 21C4.16421 21 4.5 20.6642 4.5 20.25V3.75Z" /><path fillRule="evenodd" d="M8 6C6.89543 6 6 6.89543 6 8V9C6 10.1046 6.89543 11 8 11H19C20.1046 11 21 10.1046 21 9V8C21 6.89543 20.1046 6 19 6H8ZM19 7.5H8C7.72386 7.5 7.5 7.72386 7.5 8V9C7.5 9.27614 7.72386 9.5 8 9.5H19C19.2761 9.5 19.5 9.27614 19.5 9V8C19.5 7.72386 19.2761 7.5 19 7.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M6 15C6 13.8954 6.89543 13 8 13H14C15.1046 13 16 13.8954 16 15V16C16 17.1046 15.1046 18 14 18H8C6.89543 18 6 17.1046 6 16V15ZM8 14.5H14C14.2761 14.5 14.5 14.7239 14.5 15V16C14.5 16.2761 14.2761 16.5 14 16.5H8C7.72386 16.5 7.5 16.2761 7.5 16V15C7.5 14.7239 7.72386 14.5 8 14.5Z" clipRule="evenodd" />
		</svg>
	);
};

AlignLeft.iconName = "align-left";

export default AlignLeft;