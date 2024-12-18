import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PaddingBottom = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M7 9C7 7.89543 7.89543 7 9 7H15C16.1046 7 17 7.89543 17 9V15C17 16.1046 16.1046 17 15 17H9C7.89543 17 7 16.1046 7 15V9ZM9 8.5H15C15.2761 8.5 15.5 8.72386 15.5 9V15C15.5 15.2761 15.2761 15.5 15 15.5H9C8.72386 15.5 8.5 15.2761 8.5 15V9C8.5 8.72386 8.72386 8.5 9 8.5Z" clipRule="evenodd" /><path d="M20.25 21C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5L3.75 19.5C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21L20.25 21Z" />
		</svg>
	);
};

PaddingBottom.iconName = "padding-bottom";

export default PaddingBottom;