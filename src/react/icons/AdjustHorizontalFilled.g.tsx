import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AdjustHorizontalFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M15.25 4C13.4358 4 11.9225 5.28832 11.575 7L2.75 7C2.33579 7 2 7.33579 2 7.75C2 8.16421 2.33579 8.5 2.75 8.5L11.575 8.5C11.9225 10.2117 13.4358 11.5 15.25 11.5C17.0642 11.5 18.5775 10.2117 18.925 8.5L21.25 8.5C21.6642 8.5 22 8.16421 22 7.75C22 7.33579 21.6642 7 21.25 7L18.925 7C18.5775 5.28832 17.0642 4 15.25 4Z" /><path d="M8.75 12.5C10.5642 12.5 12.0775 13.7883 12.425 15.5L21.25 15.5C21.6642 15.5 22 15.8358 22 16.25C22 16.6642 21.6642 17 21.25 17L12.425 17C12.0775 18.7117 10.5642 20 8.75 20C6.93578 20 5.42247 18.7117 5.07501 17L2.75 17C2.33578 17 2 16.6642 2 16.25C2 15.8358 2.33578 15.5 2.75 15.5L5.07501 15.5C5.42247 13.7883 6.93578 12.5 8.75 12.5Z" />
		</svg>
	);
};

AdjustHorizontalFilled.iconName = "adjust-horizontal--filled";

export default AdjustHorizontalFilled;