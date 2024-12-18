import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FilterAlt = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M9.99655 11.2122C10.3168 11.4969 10.5 11.9049 10.5 12.3333V17.0633C10.5 17.2116 10.5659 17.3524 10.6799 17.4474L13.5 19.7974V12.3333C13.5 11.9049 13.6832 11.4969 14.0035 11.2122L19.3322 6.47555C19.4389 6.38067 19.5 6.24467 19.5 6.10184V5C19.5 4.72386 19.2761 4.5 19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V6.10185C4.5 6.24467 4.56107 6.38067 4.66782 6.47555L9.99655 11.2122ZM15 12.3333L20.3287 7.59666C20.7557 7.21713 21 6.67312 21 6.10184V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V6.10185C3 6.67312 3.24429 7.21713 3.67127 7.59666L9 12.3333V17.0633C9 17.6568 9.26365 18.2197 9.71963 18.5997L13.3598 21.6332C14.0111 22.176 15 21.7128 15 20.865V12.3333Z" clipRule="evenodd" />
		</svg>
	);
};

FilterAlt.iconName = "filter-alt";

export default FilterAlt;