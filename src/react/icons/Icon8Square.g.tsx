import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Icon8Square = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12.0774 16.1541C13.5074 16.1541 15.0254 15.5491 15.0254 13.7891C15.0254 12.1941 13.5294 11.8531 13.1774 11.8201C14.1014 11.6111 14.8274 11.0061 14.8274 9.96112C14.8274 8.36612 13.2874 7.84912 12.0224 7.84912C10.7134 7.84912 9.2064 8.39912 9.2064 10.0161C9.2064 11.4351 10.5154 11.7981 10.8784 11.8201C9.8334 12.0291 8.9754 12.6341 8.9754 13.8551C8.9754 15.6261 10.6804 16.1541 12.0774 16.1541ZM12.0224 8.88312C12.7264 8.88312 13.2984 9.34512 13.2984 10.1261C13.2984 10.8961 12.6934 11.2811 12.0114 11.2811C11.2964 11.2811 10.7134 10.9291 10.7134 10.1151C10.7134 9.31212 11.3184 8.88312 12.0224 8.88312ZM11.9784 12.3481C12.7704 12.3481 13.4744 12.7771 13.4744 13.6901C13.4744 14.5811 12.7704 15.0541 11.9894 15.0541C11.1974 15.0541 10.5374 14.5701 10.5374 13.6791C10.5374 12.7991 11.2084 12.3481 11.9784 12.3481Z" clipRule="evenodd" /><path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Icon8Square.iconName = "8-square";

export default Icon8Square;