import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Temperature = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M10 12.7578V5.5C10 4.11929 8.88071 3 7.5 3C6.11929 3 5 4.11929 5 5.5V12.7578C3.79401 13.565 3 14.9398 3 16.5C3 18.9853 5.01472 21 7.5 21C9.98528 21 12 18.9853 12 16.5C12 14.9398 11.206 13.565 10 12.7578ZM6.5 13.5587L5.83439 14.0043C5.02662 14.545 4.5 15.4613 4.5 16.5C4.5 18.1569 5.84315 19.5 7.5 19.5C9.15685 19.5 10.5 18.1569 10.5 16.5C10.5 15.4613 9.97338 14.545 9.16561 14.0043L8.5 13.5587V5.5C8.5 4.94772 8.05228 4.5 7.5 4.5C6.94772 4.5 6.5 4.94772 6.5 5.5V13.5587Z" clipRule="evenodd" /><path d="M14.7494 14C14.3354 14.0003 14 14.336 14 14.75C14 15.1642 14.3358 15.5 14.75 15.5L17.25 15.5C17.6642 15.5 18 15.1642 18 14.75C18 14.3358 17.6642 14 17.25 14L14.7494 14Z" /><path d="M20.25 12.5C20.6642 12.5 21 12.1642 21 11.75C21 11.3358 20.6642 11 20.25 11L12.75 11C12.3358 11 12 11.3358 12 11.75C12 12.1642 12.3358 12.5 12.75 12.5L20.25 12.5Z" /><path d="M17.25 8L12.75 8C12.3358 8 12 8.33579 12 8.75C12 9.16421 12.3358 9.5 12.75 9.5L17.25 9.5C17.6642 9.5 18 9.16421 18 8.75C18 8.33579 17.6642 8 17.25 8Z" /><path d="M12.75 5L20.25 5C20.6642 5 21 5.33579 21 5.75C21 6.16421 20.6642 6.5 20.25 6.5L12.75 6.5C12.3358 6.5 12 6.16421 12 5.75C12 5.33579 12.3358 5 12.75 5Z" />
		</svg>
	);
};

Temperature.iconName = "temperature";

export default Temperature;