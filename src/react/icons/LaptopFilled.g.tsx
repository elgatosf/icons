import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LaptopFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M5 4C3.89543 4 3 4.89543 3 6V15C3 16.1046 3.89543 17 5 17H19C20.1046 17 21 16.1046 21 15V6C21 4.89543 20.1046 4 19 4H5Z" /><path d="M2.75 18.5C2.33579 18.5 2 18.8358 2 19.25C2 19.6642 2.33579 20 2.75 20H21.25C21.6642 20 22 19.6642 22 19.25C22 18.8358 21.6642 18.5 21.25 18.5H2.75Z" />
		</svg>
	);
};

LaptopFilled.iconName = "laptop--filled";

export default LaptopFilled;