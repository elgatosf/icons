import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FileUploadFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V11H13C11.8954 11 11 10.1046 11 9V2ZM11.2517 18.25C11.2517 18.6642 11.5875 19 12.0017 19C12.4159 19 12.7517 18.6642 12.7517 18.25V14.8124L13.7197 15.7803C14.0126 16.0732 14.4875 16.0732 14.7803 15.7803C15.0732 15.4874 15.0732 15.0126 14.7803 14.7197L12.532 12.4714C12.2392 12.1785 11.7645 12.1785 11.4716 12.4712L9.22158 14.7195C8.92858 15.0123 8.9284 15.4871 9.22118 15.7801C9.51396 16.0731 9.98884 16.0733 10.2818 15.7805L11.2517 14.8114V18.25Z" clipRule="evenodd" /><path d="M19.25 9.5L12.5 2.75V9C12.5 9.27614 12.7239 9.5 13 9.5H19.25Z" />
		</svg>
	);
};

FileUploadFilled.iconName = "file-upload--filled";

export default FileUploadFilled;