import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const StarFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.1033 2.56134C11.4701 1.8181 12.53 1.81809 12.8968 2.56134L15.3159 7.46308L20.7253 8.24911C21.5455 8.36829 21.8731 9.37627 21.2795 9.9548L17.3653 13.7703L18.2893 19.1578C18.4294 19.9747 17.572 20.5977 16.8384 20.212L12.0001 17.6683L7.16175 20.212C6.42812 20.5977 5.57069 19.9747 5.7108 19.1578L6.63483 13.7703L2.72056 9.9548C2.12704 9.37627 2.45455 8.36829 3.27477 8.24911L8.68416 7.46308L11.1033 2.56134Z" />
		</svg>
	);
};

StarFilled.iconName = "star--filled";

export default StarFilled;