import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ArticleFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7.75 7C7.33579 7 7 7.33579 7 7.75C7 8.16421 7.33579 8.5 7.75 8.5L16.25 8.5C16.6642 8.5 17 8.16421 17 7.75C17 7.33579 16.6642 7 16.25 7L7.75 7ZM7 11.75C7 11.3358 7.33579 11 7.75 11L16.25 11C16.6642 11 17 11.3358 17 11.75C17 12.1642 16.6642 12.5 16.25 12.5L7.75 12.5C7.33579 12.5 7 12.1642 7 11.75ZM7.75 15C7.33579 15 7 15.3358 7 15.75C7 16.1642 7.33579 16.5 7.75 16.5H12.25C12.6642 16.5 13 16.1642 13 15.75C13 15.3358 12.6642 15 12.25 15H7.75Z" clipRule="evenodd" />
		</svg>
	);
};

ArticleFilled.iconName = "article--filled";

export default ArticleFilled;