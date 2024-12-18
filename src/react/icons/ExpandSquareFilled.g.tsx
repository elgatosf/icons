import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ExpandSquareFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM11.75 7C11.3358 7 11 7.33579 11 7.75C11 8.16421 11.3358 8.5 11.75 8.5H14.4393L8.5 14.4393L8.5 11.75C8.5 11.3358 8.16421 11 7.75 11C7.33579 11 7 11.3358 7 11.75L7 16.25C7 16.6642 7.33579 17 7.75 17H12.25C12.6642 17 13 16.6642 13 16.25C13 15.8358 12.6642 15.5 12.25 15.5H9.56066L15.5 9.56066V12.25C15.5 12.6642 15.8358 13 16.25 13C16.6642 13 17 12.6642 17 12.25V7.75C17 7.33579 16.6642 7 16.25 7H11.75Z" clipRule="evenodd" />
		</svg>
	);
};

ExpandSquareFilled.iconName = "expand-square--filled";

export default ExpandSquareFilled;