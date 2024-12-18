import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AlignHorizontalCenter = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12.75 3.75C12.75 3.33579 12.4142 3 12 3C11.5858 3 11.25 3.33579 11.25 3.75V6H6C4.89543 6 4 6.89543 4 8V9C4 10.1046 4.89543 11 6 11H11.25V13H9C7.89543 13 7 13.8954 7 15V16C7 17.1046 7.89543 18 9 18H11.25V20.25C11.25 20.6642 11.5858 21 12 21C12.4142 21 12.75 20.6642 12.75 20.25V18H15C16.1046 18 17 17.1046 17 16V15C17 13.8954 16.1046 13 15 13H12.75V11H18C19.1046 11 20 10.1046 20 9V8C20 6.89543 19.1046 6 18 6H12.75V3.75ZM18.5 8C18.5 7.72386 18.2761 7.5 18 7.5H6C5.72386 7.5 5.5 7.72386 5.5 8V9C5.5 9.27614 5.72386 9.5 6 9.5H18C18.2761 9.5 18.5 9.27614 18.5 9V8ZM8.5 15C8.5 14.7239 8.72386 14.5 9 14.5H15C15.2761 14.5 15.5 14.7239 15.5 15V16C15.5 16.2761 15.2761 16.5 15 16.5H9C8.72386 16.5 8.5 16.2761 8.5 16V15Z" clipRule="evenodd" />
		</svg>
	);
};

AlignHorizontalCenter.iconName = "align-horizontal-center";

export default AlignHorizontalCenter;