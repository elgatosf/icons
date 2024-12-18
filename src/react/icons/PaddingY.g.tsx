import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PaddingY = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M21 3.75C21 4.16421 20.6642 4.5 20.25 4.5L3.75 4.5C3.33579 4.5 3 4.16421 3 3.75C3 3.33579 3.33579 3 3.75 3H20.25C20.6642 3 21 3.33579 21 3.75Z" /><path fillRule="evenodd" d="M9 7C7.89543 7 7 7.89543 7 9V15C7 16.1046 7.89543 17 9 17H15C16.1046 17 17 16.1046 17 15V9C17 7.89543 16.1046 7 15 7H9ZM15 8.5H9C8.72386 8.5 8.5 8.72386 8.5 9V15C8.5 15.2761 8.72386 15.5 9 15.5H15C15.2761 15.5 15.5 15.2761 15.5 15V9C15.5 8.72386 15.2761 8.5 15 8.5Z" clipRule="evenodd" /><path d="M20.25 21C20.6642 21 21 20.6642 21 20.25C21 19.8358 20.6642 19.5 20.25 19.5H3.75C3.33579 19.5 3 19.8358 3 20.25C3 20.6642 3.33579 21 3.75 21H20.25Z" />
		</svg>
	);
};

PaddingY.iconName = "padding-y";

export default PaddingY;