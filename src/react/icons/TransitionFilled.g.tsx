import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const TransitionFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3 5.00001C3 3.89544 3.89543 3.00001 5 3.00001L7.5 3V21L5 21C3.89543 21 3 20.1046 3 19V5.00001Z" /><path d="M11 3.00001H19C20.1046 3.00001 21 3.89544 21 5.00001V19C21 20.1046 20.1046 21 19 21H11C9.89543 21 9 20.1046 9 19V5.00001C9 3.89544 9.89543 3.00001 11 3.00001Z" />
		</svg>
	);
};

TransitionFilled.iconName = "transition--filled";

export default TransitionFilled;