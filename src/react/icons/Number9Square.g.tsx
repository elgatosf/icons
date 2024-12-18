import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Number9Square = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11.8024 16.1541C14.3544 16.1541 14.9814 14.1081 14.9814 11.8531C14.9814 9.69712 14.3104 7.84912 11.9014 7.84912C10.2734 7.84912 8.98639 8.85012 8.98639 10.5111C8.98639 12.0511 10.0644 13.0521 11.5164 13.0521C12.4514 13.0521 12.9794 12.7551 13.4084 12.0731C13.3864 13.1951 13.3094 14.9551 11.8024 14.9551C10.8344 14.9551 10.6804 14.4491 10.6474 14.0421H8.99739C8.99739 15.3841 10.0974 16.1541 11.8024 16.1541ZM11.9234 8.98212C12.7704 8.98212 13.2874 9.59812 13.2874 10.4671C13.2874 11.3801 12.7374 11.9851 11.8684 11.9851C11.0214 11.9851 10.5264 11.3251 10.5264 10.4671C10.5264 9.57612 10.9994 8.98212 11.9234 8.98212Z" clipRule="evenodd" /><path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Number9Square.iconName = "number-9-square";

export default Number9Square;