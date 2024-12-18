import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Image = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M18 8.5C18 9.88071 16.8807 11 15.5 11C14.1193 11 13 9.88071 13 8.5C13 7.11929 14.1193 6 15.5 6C16.8807 6 18 7.11929 18 8.5ZM16.5 8.5C16.5 9.05228 16.0523 9.5 15.5 9.5C14.9477 9.5 14.5 9.05228 14.5 8.5C14.5 7.94772 14.9477 7.5 15.5 7.5C16.0523 7.5 16.5 7.94772 16.5 8.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5ZM19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V14.4393L8.46967 10.4697C8.76256 10.1768 9.23744 10.1768 9.53033 10.4697L14 14.9393L16.4697 12.4697C16.7626 12.1768 17.2374 12.1768 17.5303 12.4697L19.5 14.4393V5C19.5 4.72386 19.2761 4.5 19 4.5ZM9 12.0607L4.5 16.5607V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V16.5607L17 14.0607L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303L9 12.0607Z" clipRule="evenodd" />
		</svg>
	);
};

Image.iconName = "image";

export default Image;