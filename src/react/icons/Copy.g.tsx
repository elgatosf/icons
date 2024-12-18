import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Copy = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M10 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V14C19.5 14.2761 19.2761 14.5 19 14.5H10C9.72386 14.5 9.5 14.2761 9.5 14V5C9.5 4.72386 9.72386 4.5 10 4.5ZM19 3C20.1046 3 21 3.89543 21 5V14C21 15.1046 20.1046 16 19 16H10C8.89543 16 8 15.1046 8 14V5C8 3.89543 8.89543 3 10 3H19Z" clipRule="evenodd" /><path fillRule="evenodd" d="M6.5 8.75C6.5 8.33579 6.16421 8 5.75 8H5C3.89543 8 3 8.89543 3 10V19C3 20.1046 3.89543 21 5 21H14C15.1046 21 16 20.1046 16 19V18.25C16 17.8358 15.6642 17.5 15.25 17.5C14.8358 17.5 14.5 17.8358 14.5 18.25V19C14.5 19.2761 14.2761 19.5 14 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V10C4.5 9.72386 4.72386 9.5 5 9.5H5.75C6.16421 9.5 6.5 9.16421 6.5 8.75Z" clipRule="evenodd" />
		</svg>
	);
};

Copy.iconName = "copy";

export default Copy;