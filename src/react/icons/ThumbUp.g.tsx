import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ThumbUp = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M7.5 11L9.49449 4.61763C9.79523 3.65526 10.6865 3 11.6948 3C12.9679 3 14 4.03208 14 5.30522V9H19.3815C20.7002 9 21.658 10.254 21.311 11.5262L19.8039 17.0525C19.3293 18.7927 17.7486 20 15.9448 20H5C3.89543 20 3 19.1046 3 18V13C3 11.8954 3.89543 11 5 11H7.5ZM12.5 10.5H19.3815C19.7112 10.5 19.9506 10.8135 19.8639 11.1316L18.3567 16.6578C18.0601 17.7454 17.0722 18.5 15.9448 18.5H9V11.2289L10.9262 5.06504C11.0313 4.72888 11.3426 4.5 11.6948 4.5C12.1395 4.5 12.5 4.86051 12.5 5.30522V10.5ZM7.5 12.5H5C4.72386 12.5 4.5 12.7239 4.5 13V18C4.5 18.2761 4.72386 18.5 5 18.5H7.5V12.5Z" clipRule="evenodd" />
		</svg>
	);
};

ThumbUp.iconName = "thumb-up";

export default ThumbUp;