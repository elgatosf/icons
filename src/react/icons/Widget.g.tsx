import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Widget = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M9 16.5H5C4.72386 16.5 4.5 16.7239 4.5 17V19C4.5 19.2761 4.72386 19.5 5 19.5H9C9.27614 19.5 9.5 19.2761 9.5 19V17C9.5 16.7239 9.27614 16.5 9 16.5ZM19 12.5H15C14.7239 12.5 14.5 12.7239 14.5 13V19C14.5 19.2761 14.7239 19.5 15 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V13C19.5 12.7239 19.2761 12.5 19 12.5ZM9 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V11C4.5 11.2761 4.72386 11.5 5 11.5H9C9.27614 11.5 9.5 11.2761 9.5 11V5C9.5 4.72386 9.27614 4.5 9 4.5ZM19 4.5H15C14.7239 4.5 14.5 4.72386 14.5 5V7C14.5 7.27614 14.7239 7.5 15 7.5H19C19.2761 7.5 19.5 7.27614 19.5 7V5C19.5 4.72386 19.2761 4.5 19 4.5ZM3 5C3 3.89543 3.89543 3 5 3H9C10.1046 3 11 3.89543 11 5V11C11 12.1046 10.1046 13 9 13H5C3.89543 13 3 12.1046 3 11V5ZM15 11C13.8954 11 13 11.8954 13 13V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V13C21 11.8954 20.1046 11 19 11H15ZM5 15C3.89543 15 3 15.8954 3 17V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V17C11 15.8954 10.1046 15 9 15H5ZM15 3C13.8954 3 13 3.89543 13 5V7C13 8.10457 13.8954 9 15 9H19C20.1046 9 21 8.10457 21 7V5C21 3.89543 20.1046 3 19 3H15Z" clipRule="evenodd" />
		</svg>
	);
};

Widget.iconName = "widget";

export default Widget;