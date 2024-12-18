import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AlignVerticalCenterFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8 20C6.89543 20 6 19.1046 6 18L6 12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H6L6 6C6 4.89543 6.89543 4 8 4H9C10.1046 4 11 4.89543 11 6V11.25H13V9C13 7.89543 13.8954 7 15 7L16 7C17.1046 7 18 7.89543 18 9V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H18V15C18 16.1046 17.1046 17 16 17H15C13.8954 17 13 16.1046 13 15V12.75H11V18C11 19.1046 10.1046 20 9 20H8Z" />
		</svg>
	);
};

AlignVerticalCenterFilled.iconName = "align-vertical-center--filled";

export default AlignVerticalCenterFilled;