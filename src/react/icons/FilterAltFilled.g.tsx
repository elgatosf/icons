import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FilterAltFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9 12.3333L3.67127 7.59666C3.24429 7.21713 3 6.67312 3 6.10185V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V6.10184C21 6.67312 20.7557 7.21713 20.3287 7.59666L15 12.3333V20.865C15 21.7128 14.0111 22.176 13.3598 21.6332L9.71963 18.5997C9.26365 18.2197 9 17.6568 9 17.0633V12.3333Z" />
		</svg>
	);
};

FilterAltFilled.iconName = "filter-alt--filled";

export default FilterAltFilled;