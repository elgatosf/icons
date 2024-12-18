import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const GapHorizontalFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V3.75C11.25 3.33579 11.5858 3 12 3Z" /><path d="M17 17C15.8954 17 15 16.1046 15 15V9C15 7.89543 15.8954 7 17 7H19C20.1046 7 21 7.89543 21 9V15C21 16.1046 20.1046 17 19 17H17Z" /><path d="M3 15C3 16.1046 3.89543 17 5 17H7C8.10457 17 9 16.1046 9 15V9C9 7.89543 8.10457 7 7 7H5C3.89543 7 3 7.89543 3 9L3 15Z" />
		</svg>
	);
};

GapHorizontalFilled.iconName = "gap-horizontal--filled";

export default GapHorizontalFilled;