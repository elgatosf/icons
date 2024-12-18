import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const DisplayProjectFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7 5C7 3.89543 7.89543 3 9 3H20C21.1046 3 22 3.89543 22 5V11C22 12.1046 21.1046 13 20 13H18.5V10C18.5 8.067 16.933 6.5 15 6.5H7V5Z" /><path d="M4 8C2.89543 8 2 8.89543 2 10V16C2 17.1046 2.89543 18 4 18H15C16.1046 18 17 17.1046 17 16V10C17 8.89543 16.1046 8 15 8H4Z" /><path d="M7 20.25C7 19.8358 7.33579 19.5 7.75 19.5H11.25C11.6642 19.5 12 19.8358 12 20.25C12 20.6642 11.6642 21 11.25 21H7.75C7.33579 21 7 20.6642 7 20.25Z" />
		</svg>
	);
};

DisplayProjectFilled.iconName = "display-project--filled";

export default DisplayProjectFilled;