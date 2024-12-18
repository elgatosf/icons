import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const NumberedList = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M2 3.75C2 3.33579 2.33579 3 2.75 3H4.5C4.91421 3 5.25 3.33579 5.25 3.75V8.5H6.25C6.66421 8.5 7 8.83579 7 9.25C7 9.66421 6.66421 10 6.25 10H2.75C2.33579 10 2 9.66421 2 9.25C2 8.83579 2.33579 8.5 2.75 8.5H3.75V4.5H2.75C2.33579 4.5 2 4.16421 2 3.75Z" /><path d="M9.75 6C9.33579 6 9 6.33579 9 6.75C9 7.16421 9.33579 7.5 9.75 7.5H20.25C20.6642 7.5 21 7.16421 21 6.75C21 6.33579 20.6642 6 20.25 6H9.75Z" /><path d="M9.75 16.5C9.33579 16.5 9 16.8358 9 17.25C9 17.6642 9.33579 18 9.75 18H20.25C20.6642 18 21 17.6642 21 17.25C21 16.8358 20.6642 16.5 20.25 16.5H9.75Z" /><path d="M2.75 14C2.33579 14 2 14.3358 2 14.75C2 15.1642 2.33579 15.5 2.75 15.5H5.25C5.38807 15.5 5.5 15.6119 5.5 15.75V16.2457C5.5 16.3573 5.42601 16.4554 5.31868 16.4861L3.26924 17.0716C2.51796 17.2863 2 17.973 2 18.7543V20.25C2 20.6642 2.33579 21 2.75 21H6.25C6.66421 21 7 20.6642 7 20.25C7 19.8358 6.66421 19.5 6.25 19.5H3.5V18.7543C3.5 18.6427 3.57399 18.5446 3.68132 18.5139L5.73076 17.9284C6.48204 17.7137 7 17.027 7 16.2457V15.75C7 14.7835 6.2165 14 5.25 14H2.75Z" />
		</svg>
	);
};

NumberedList.iconName = "numbered-list";

export default NumberedList;