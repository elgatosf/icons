import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TemperatureFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M10 5.5V12.7578C11.206 13.565 12 14.9398 12 16.5C12 18.9853 9.98528 21 7.5 21C5.01472 21 3 18.9853 3 16.5C3 14.9398 3.79401 13.565 5 12.7578V5.5C5 4.11929 6.11929 3 7.5 3C8.88071 3 10 4.11929 10 5.5ZM8.5 8V5.5C8.5 4.94772 8.05228 4.5 7.5 4.5C6.94772 4.5 6.5 4.94772 6.5 5.5V8H8.5Z" clipRule="evenodd" /><path d="M14 14.75C14 14.336 14.3354 14.0003 14.7494 14L17.25 14C17.6642 14 18 14.3358 18 14.75C18 15.1642 17.6642 15.5 17.25 15.5L14.75 15.5C14.3358 15.5 14 15.1642 14 14.75Z" /><path d="M12.75 12.5C12.3358 12.5 12 12.1642 12 11.75C12 11.3358 12.3358 11 12.75 11L20.25 11C20.6642 11 21 11.3358 21 11.75C21 12.1642 20.6642 12.5 20.25 12.5L12.75 12.5Z" /><path d="M12.75 8L17.25 8C17.6642 8 18 8.33579 18 8.75C18 9.16421 17.6642 9.5 17.25 9.5L12.75 9.5C12.3358 9.5 12 9.16421 12 8.75C12 8.33579 12.3358 8 12.75 8Z" /><path d="M20.25 5L12.75 5C12.3358 5 12 5.33579 12 5.75C12 6.16421 12.3358 6.5 12.75 6.5L20.25 6.5C20.6642 6.5 21 6.16421 21 5.75C21 5.33579 20.6642 5 20.25 5Z" />
		</svg>
	);
};

TemperatureFilled.iconName = "temperature--filled";

export default TemperatureFilled;