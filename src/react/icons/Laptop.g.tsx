import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Laptop = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V15C21 16.1046 20.1046 17 19 17H5C3.89543 17 3 16.1046 3 15V6ZM5 5.5H19C19.2761 5.5 19.5 5.72386 19.5 6V15C19.5 15.2761 19.2761 15.5 19 15.5H5C4.72386 15.5 4.5 15.2761 4.5 15V6C4.5 5.72386 4.72386 5.5 5 5.5Z" clipRule="evenodd" /><path d="M2.75 18.5C2.33579 18.5 2 18.8358 2 19.25C2 19.6642 2.33579 20 2.75 20H21.25C21.6642 20 22 19.6642 22 19.25C22 18.8358 21.6642 18.5 21.25 18.5H2.75Z" />
		</svg>
	);
};

Laptop.iconName = "laptop";

export default Laptop;