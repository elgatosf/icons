import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MobileFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M6 20C6 21.1046 6.89543 22 8 22H16C17.1046 22 18 21.1046 18 20L18 4C18 2.89543 17.1046 2 16 2H8C6.89543 2 6 2.89543 6 4V20ZM13.25 19C13.6642 19 14 18.6642 14 18.25C14 17.8358 13.6642 17.5 13.25 17.5H10.75C10.3358 17.5 10 17.8358 10 18.25C10 18.6642 10.3358 19 10.75 19H13.25Z" clipRule="evenodd" />
		</svg>
	);
};

MobileFilled.iconName = "mobile--filled";

export default MobileFilled;