import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Mobile = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M13.25 19C13.6642 19 14 18.6642 14 18.25C14 17.8358 13.6642 17.5 13.25 17.5H10.75C10.3358 17.5 10 17.8358 10 18.25C10 18.6642 10.3358 19 10.75 19H13.25Z" /><path fillRule="evenodd" d="M8 22C6.89543 22 6 21.1046 6 20V4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4L18 20C18 21.1046 17.1046 22 16 22H8ZM7.5 20L7.5 4C7.5 3.72386 7.72386 3.5 8 3.5L16 3.5C16.2761 3.5 16.5 3.72386 16.5 4L16.5 20C16.5 20.2761 16.2761 20.5 16 20.5H8C7.72386 20.5 7.5 20.2761 7.5 20Z" clipRule="evenodd" />
		</svg>
	);
};

Mobile.iconName = "mobile";

export default Mobile;