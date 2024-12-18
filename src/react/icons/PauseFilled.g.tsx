import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PauseFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M6 3C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21H8C9.10457 21 10 20.1046 10 19V5C10 3.89543 9.10457 3 8 3H6Z" /><path d="M16 3C14.8954 3 14 3.89543 14 5V19C14 20.1046 14.8954 21 16 21H18C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3H16Z" />
		</svg>
	);
};

PauseFilled.iconName = "pause--filled";

export default PauseFilled;