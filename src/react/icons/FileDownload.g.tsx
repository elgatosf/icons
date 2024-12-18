import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FileDownload = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 12C12.4142 12 12.75 12.3358 12.75 12.75V16.1886L13.7199 15.2195C14.0129 14.9267 14.4877 14.9269 14.7805 15.2199C15.0733 15.5129 15.0731 15.9877 14.7801 16.2805L12.5301 18.5288C12.2372 18.8215 11.7625 18.8215 11.4697 18.5286L9.22136 16.2803C8.92847 15.9874 8.92847 15.5126 9.22136 15.2197C9.51425 14.9268 9.98913 14.9268 10.282 15.2197L11.25 16.1876V12.75C11.25 12.3358 11.5858 12 12 12Z" /><path fillRule="evenodd" d="M20 10.25V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H11.75L20 10.25ZM18.5 11H13C11.8954 11 11 10.1046 11 9V3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V20C5.5 20.2761 5.72386 20.5 6 20.5H18C18.2761 20.5 18.5 20.2761 18.5 20V11ZM17.1287 9.5L12.5 4.87132V9C12.5 9.27614 12.7239 9.5 13 9.5H17.1287Z" clipRule="evenodd" />
		</svg>
	);
};

FileDownload.iconName = "file-download";

export default FileDownload;