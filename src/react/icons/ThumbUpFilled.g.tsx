import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ThumbUpFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8 20H15.9448C17.7486 20 19.3293 18.7927 19.8039 17.0525L21.311 11.5262C21.658 10.254 20.7002 9 19.3815 9H14V5.30522C14 4.03208 12.9679 3 11.6948 3C10.6865 3 9.79523 3.65526 9.49449 4.61763L8 9.4V20Z" /><path d="M6.5 20V11H5C3.89543 11 3 11.8954 3 13V18C3 19.1046 3.89543 20 5 20H6.5Z" />
		</svg>
	);
};

ThumbUpFilled.iconName = "thumb-up--filled";

export default ThumbUpFilled;