import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AdjustHorizontal = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M15.25 4C13.4358 4 11.9225 5.28832 11.575 7L2.75 7C2.33579 7 2 7.33579 2 7.75C2 8.16421 2.33579 8.5 2.75 8.5L11.575 8.5C11.9225 10.2117 13.4358 11.5 15.25 11.5C17.0642 11.5 18.5775 10.2117 18.925 8.5L21.25 8.5C21.6642 8.5 22 8.16421 22 7.75C22 7.33579 21.6642 7 21.25 7L18.925 7C18.5775 5.28832 17.0642 4 15.25 4ZM15.25 5.5C16.4926 5.5 17.5 6.50736 17.5 7.75C17.5 8.99264 16.4926 10 15.25 10C14.0074 10 13 8.99264 13 7.75C13 6.50736 14.0074 5.5 15.25 5.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M8.75 12.5C10.5642 12.5 12.0775 13.7883 12.425 15.5L21.25 15.5C21.6642 15.5 22 15.8358 22 16.25C22 16.6642 21.6642 17 21.25 17L12.425 17C12.0775 18.7117 10.5642 20 8.75 20C6.93578 20 5.42247 18.7117 5.07501 17L2.75 17C2.33578 17 2 16.6642 2 16.25C2 15.8358 2.33578 15.5 2.75 15.5L5.07501 15.5C5.42247 13.7883 6.93578 12.5 8.75 12.5ZM8.75 14C7.50736 14 6.5 15.0074 6.5 16.25C6.5 17.4926 7.50736 18.5 8.75 18.5C9.99264 18.5 11 17.4926 11 16.25C11 15.0074 9.99264 14 8.75 14Z" clipRule="evenodd" />
		</svg>
	);
};

AdjustHorizontal.iconName = "adjust-horizontal";

export default AdjustHorizontal;