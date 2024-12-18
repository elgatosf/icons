import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const HeartFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7.5 3C4.46243 3 2 5.46243 2 8.5C2 14.6356 8.69245 19.098 11.1275 20.5186C11.6713 20.8358 12.3287 20.8358 12.8725 20.5186C15.3076 19.098 22 14.6356 22 8.5C22 5.46243 19.5376 3 16.5 3C14.6398 3 12.9954 3.92345 12 5.33692C11.0046 3.92345 9.36016 3 7.5 3Z" />
		</svg>
	);
};

HeartFilled.iconName = "heart--filled";

export default HeartFilled;