import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FileUpload = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12.0017 19C11.5875 19 11.2517 18.6642 11.2517 18.25V14.8114L10.2818 15.7805C9.98884 16.0733 9.51396 16.0731 9.22118 15.7801C8.9284 15.4871 8.92858 15.0123 9.22158 14.7195L11.4716 12.4712C11.7645 12.1785 12.2392 12.1785 12.532 12.4714L14.7803 14.7197C15.0732 15.0126 15.0732 15.4874 14.7803 15.7803C14.4875 16.0732 14.0126 16.0732 13.7197 15.7803L12.7517 14.8124V18.25C12.7517 18.6642 12.4159 19 12.0017 19Z" /><path fillRule="evenodd" d="M20 10.25V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H11.75L20 10.25ZM18.5 11H13C11.8954 11 11 10.1046 11 9V3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V20C5.5 20.2761 5.72386 20.5 6 20.5H18C18.2761 20.5 18.5 20.2761 18.5 20V11ZM17.1287 9.5L12.5 4.87132V9C12.5 9.27614 12.7239 9.5 13 9.5H17.1287Z" clipRule="evenodd" />
		</svg>
	);
};

FileUpload.iconName = "file-upload";

export default FileUpload;