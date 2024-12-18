import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Icon3Square = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.8574 16.1431C13.2654 16.1431 14.9264 15.5821 14.9264 13.8111C14.9264 12.6121 14.1454 12.0071 13.0674 11.8421C14.0574 11.6881 14.7614 11.0061 14.7614 9.99412C14.7614 8.39912 13.1994 7.84912 11.9234 7.84912C10.6474 7.84912 8.99737 8.49812 8.99737 10.0931H10.6914C10.6914 9.25712 11.3844 8.98212 11.8904 8.98212C12.5394 8.98212 13.1444 9.38912 13.1444 10.1371C13.1444 11.1381 12.2534 11.3691 11.4724 11.3691C11.3294 11.3691 11.1864 11.3581 11.0434 11.3471V12.4581C11.1004 12.4546 11.1585 12.4498 11.2171 12.4451C11.3393 12.4352 11.4634 12.4251 11.5824 12.4251C12.3634 12.4251 13.2764 12.6781 13.2764 13.6791C13.2764 14.5591 12.6164 14.9991 11.8464 14.9991C11.1204 14.9991 10.5264 14.5921 10.5044 13.7781H8.85437C8.96437 15.5821 10.2954 16.1431 11.8574 16.1431Z" /><path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Icon3Square.iconName = "3-square";

export default Icon3Square;