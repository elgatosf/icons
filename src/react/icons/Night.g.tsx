import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Night = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M19.2364 12.5693C20.0124 12.2574 21.01 12.7213 20.8671 13.5453C20.5611 15.3101 19.7268 17.0012 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8493 2.12132 9.15077 5.63604 5.63606C6.99881 4.27329 8.68987 3.43891 10.4546 3.13292C11.2786 2.99005 11.7425 3.98766 11.4306 4.7636C11.1529 5.45472 11 6.20948 11 6.99995C11 10.3137 13.6863 13 17 13C17.7905 13 18.5453 12.8471 19.2364 12.5693ZM19.1786 14.1782C18.4878 14.3877 17.7559 14.5 17 14.5C12.8579 14.5 9.5 11.1421 9.5 6.99995C9.5 6.24407 9.61228 5.51224 9.82171 4.82145C8.67854 5.16701 7.60199 5.79142 6.6967 6.69672C3.76777 9.62565 3.76777 14.3744 6.6967 17.3033C9.62563 20.2323 14.3744 20.2323 17.3033 17.3033C18.2086 16.398 18.833 15.3214 19.1786 14.1782Z" clipRule="evenodd" />
		</svg>
	);
};

Night.iconName = "night";

export default Night;