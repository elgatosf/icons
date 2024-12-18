import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Triangle = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M20.5159 18.75L12.433 4.75C12.2405 4.41667 11.7594 4.41667 11.5669 4.75L3.48403 18.75C3.29158 19.0833 3.53215 19.5 3.91705 19.5H20.0829C20.4678 19.5 20.7083 19.0833 20.5159 18.75ZM13.732 4C12.9622 2.66667 11.0377 2.66667 10.2679 4L2.185 18C1.41519 19.3333 2.37745 21 3.91705 21H20.0829C21.6225 21 22.5847 19.3333 21.8149 18L13.732 4Z" clipRule="evenodd" />
		</svg>
	);
};

Triangle.iconName = "triangle";

export default Triangle;