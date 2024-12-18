import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const GapVertical = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M7 5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7C17 8.10457 16.1046 9 15 9H9C7.89543 9 7 8.10457 7 7V5ZM9 4.5H15C15.2761 4.5 15.5 4.72386 15.5 5V7C15.5 7.27614 15.2761 7.5 15 7.5H9C8.72386 7.5 8.5 7.27614 8.5 7V5C8.5 4.72386 8.72386 4.5 9 4.5Z" clipRule="evenodd" /><path d="M21 12C21 12.4142 20.6642 12.75 20.25 12.75L3.75 12.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25L20.25 11.25C20.6642 11.25 21 11.5858 21 12Z" /><path fillRule="evenodd" d="M9 15C7.89543 15 7 15.8954 7 17V19C7 20.1046 7.89543 21 9 21H15C16.1046 21 17 20.1046 17 19V17C17 15.8954 16.1046 15 15 15H9ZM15 16.5H9C8.72386 16.5 8.5 16.7239 8.5 17V19C8.5 19.2761 8.72386 19.5 9 19.5H15C15.2761 19.5 15.5 19.2761 15.5 19V17C15.5 16.7239 15.2761 16.5 15 16.5Z" clipRule="evenodd" />
		</svg>
	);
};

GapVertical.iconName = "gap-vertical";

export default GapVertical;