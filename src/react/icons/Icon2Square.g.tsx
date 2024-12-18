import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Icon2Square = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M9.0304 16.0001H14.7724V14.7901H10.9554C11.1631 14.6059 11.4043 14.4059 11.6625 14.192C12.9764 13.1029 14.7284 11.6506 14.7284 10.0601C14.7284 8.54212 13.3534 7.84912 12.0444 7.84912C10.5814 7.84912 9.1954 8.52012 9.1624 10.2471H10.8234C10.8454 9.51012 11.2524 9.01512 11.9674 9.01512C12.6054 9.01512 13.0344 9.44412 13.0344 10.1261C13.0344 11.5286 10.4629 13.5594 9.25314 14.5148C9.17244 14.5785 9.09781 14.6375 9.0304 14.6911V16.0001Z" /><path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Icon2Square.iconName = "2-square";

export default Icon2Square;