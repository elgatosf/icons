import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Icon5Square = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12.0444 16.1541C13.7714 16.1541 14.9264 15.1861 14.9264 13.2721C14.9264 11.8091 14.0244 10.6431 12.5284 10.6431C11.8134 10.6431 11.2194 10.9511 10.8014 11.5781L10.9224 9.22412H14.4974V8.04712H9.45941L9.28341 12.6671H10.9114C11.0104 12.0841 11.4944 11.7761 12.0334 11.7761C12.8914 11.7761 13.2654 12.5021 13.2654 13.3271C13.2654 14.2071 12.8804 14.9881 11.9674 14.9881C11.3074 14.9881 10.8234 14.6361 10.8014 13.9321H9.16241C9.16241 15.6591 10.5704 16.1541 12.0444 16.1541Z" /><path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Icon5Square.iconName = "5-square";

export default Icon5Square;