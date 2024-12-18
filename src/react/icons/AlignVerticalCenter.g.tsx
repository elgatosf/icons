import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AlignVerticalCenter = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M6 18C6 19.1046 6.89543 20 8 20H9C10.1046 20 11 19.1046 11 18V12.75H13V15C13 16.1046 13.8954 17 15 17H16C17.1046 17 18 16.1046 18 15V12.75H20.25C20.6642 12.75 21 12.4142 21 12C21 11.5858 20.6642 11.25 20.25 11.25H18V9C18 7.89543 17.1046 7 16 7L15 7C13.8954 7 13 7.89543 13 9V11.25H11V6C11 4.89543 10.1046 4 9 4H8C6.89543 4 6 4.89543 6 6L6 11.25H3.75C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75H6L6 18ZM7.5 18C7.5 18.2761 7.72386 18.5 8 18.5H9C9.27614 18.5 9.5 18.2761 9.5 18L9.5 6C9.5 5.72386 9.27614 5.5 9 5.5H8C7.72386 5.5 7.5 5.72386 7.5 6L7.5 18ZM15 15.5C14.7239 15.5 14.5 15.2761 14.5 15V9C14.5 8.72386 14.7239 8.5 15 8.5H16C16.2761 8.5 16.5 8.72386 16.5 9V15C16.5 15.2761 16.2761 15.5 16 15.5H15Z" clipRule="evenodd" />
		</svg>
	);
};

AlignVerticalCenter.iconName = "align-vertical-center";

export default AlignVerticalCenter;