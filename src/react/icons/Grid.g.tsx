import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Grid = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V9C11 10.1046 10.1046 11 9 11H5C3.89543 11 3 10.1046 3 9V5ZM5 4.5H9C9.27614 4.5 9.5 4.72386 9.5 5V9C9.5 9.27614 9.27614 9.5 9 9.5H5C4.72386 9.5 4.5 9.27614 4.5 9V5C4.5 4.72386 4.72386 4.5 5 4.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M3 15C3 13.8954 3.89543 13 5 13H9C10.1046 13 11 13.8954 11 15V19C11 20.1046 10.1046 21 9 21H5C3.89543 21 3 20.1046 3 19V15ZM5 14.5H9C9.27614 14.5 9.5 14.7239 9.5 15V19C9.5 19.2761 9.27614 19.5 9 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V15C4.5 14.7239 4.72386 14.5 5 14.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M15 3C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3H15ZM19 4.5H15C14.7239 4.5 14.5 4.72386 14.5 5V9C14.5 9.27614 14.7239 9.5 15 9.5H19C19.2761 9.5 19.5 9.27614 19.5 9V5C19.5 4.72386 19.2761 4.5 19 4.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15ZM15 14.5H19C19.2761 14.5 19.5 14.7239 19.5 15V19C19.5 19.2761 19.2761 19.5 19 19.5H15C14.7239 19.5 14.5 19.2761 14.5 19V15C14.5 14.7239 14.7239 14.5 15 14.5Z" clipRule="evenodd" />
		</svg>
	);
};

Grid.iconName = "grid";

export default Grid;