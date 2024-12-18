import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Transition = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H6.75C7.16421 3 7.5 3.33579 7.5 3.75C7.5 4.16421 7.16421 4.5 6.75 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H6.75C7.16421 19.5 7.5 19.8358 7.5 20.25C7.5 20.6642 7.16421 21 6.75 21H5C3.89543 21 3 20.1046 3 19V5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M11 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H11C10.7239 19.5 10.5 19.2761 10.5 19V5C10.5 4.72386 10.7239 4.5 11 4.5ZM19 3H11C9.89543 3 9 3.89543 9 5V19C9 20.1046 9.89543 21 11 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" clipRule="evenodd" />
		</svg>
	);
};

Transition.iconName = "transition";

export default Transition;