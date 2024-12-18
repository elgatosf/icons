import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AlignHorizontalCenterFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V6H18C19.1046 6 20 6.89543 20 8V9C20 10.1046 19.1046 11 18 11H12.75V13H15C16.1046 13 17 13.8954 17 15V16C17 17.1046 16.1046 18 15 18H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V18H9C7.89543 18 7 17.1046 7 16V15C7 13.8954 7.89543 13 9 13H11.25V11H6C4.89543 11 4 10.1046 4 9V8C4 6.89543 4.89543 6 6 6H11.25V3.75C11.25 3.33579 11.5858 3 12 3Z" />
		</svg>
	);
};

AlignHorizontalCenterFilled.iconName = "align-horizontal-center--filled";

export default AlignHorizontalCenterFilled;