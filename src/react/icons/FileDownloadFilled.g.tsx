import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FileDownloadFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V11H13C11.8954 11 11 10.1046 11 9V2ZM12.75 12.75C12.75 12.3358 12.4142 12 12 12C11.5858 12 11.25 12.3358 11.25 12.75V16.1876L10.282 15.2197C9.98913 14.9268 9.51425 14.9268 9.22136 15.2197C8.92847 15.5126 8.92847 15.9874 9.22136 16.2803L11.4697 18.5286C11.7625 18.8215 12.2372 18.8215 12.5301 18.5288L14.7801 16.2805C15.0731 15.9877 15.0733 15.5129 14.7805 15.2199C14.4877 14.9269 14.0129 14.9267 13.7199 15.2195L12.75 16.1886V12.75Z" clipRule="evenodd" /><path d="M19.25 9.5L12.5 2.75V9C12.5 9.27614 12.7239 9.5 13 9.5H19.25Z" />
		</svg>
	);
};

FileDownloadFilled.iconName = "file-download--filled";

export default FileDownloadFilled;