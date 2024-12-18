import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PhotoGrid = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM14 4.5H10V8.5L14 8.5V4.5ZM14 10L10 10V14L14 14V10ZM8.5 8.5V4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V8.5H8.5ZM4.5 10H8.5V14H4.5V10ZM15.5 10H19.5V14H15.5V10ZM19.5 8.5H15.5V4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V8.5ZM8.5 15.5H4.5V19C4.5 19.2761 4.72386 19.5 5 19.5H8.5V15.5ZM14 15.5L10 15.5V19.5H14V15.5ZM15.5 19.5V15.5H19.5V19C19.5 19.2761 19.2761 19.5 19 19.5H15.5Z" clipRule="evenodd" />
		</svg>
	);
};

PhotoGrid.iconName = "photo-grid";

export default PhotoGrid;