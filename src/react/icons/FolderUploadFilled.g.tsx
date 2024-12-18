import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FolderUploadFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M4 3C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6H12.4142C12.149 6 11.8946 5.89464 11.7071 5.70711L9.58579 3.58579C9.21071 3.21071 8.70201 3 8.17157 3H4ZM15.0303 12.7803C14.7374 13.0732 14.2626 13.0732 13.9697 12.7803L12.75 11.5607V16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25V11.5607L10.0303 12.7803C9.73744 13.0732 9.26256 13.0732 8.96967 12.7803C8.67678 12.4874 8.67678 12.0126 8.96967 11.7197L11.4697 9.21967C11.7626 8.92678 12.2374 8.92678 12.5303 9.21967L15.0303 11.7197C15.3232 12.0126 15.3232 12.4874 15.0303 12.7803Z" clipRule="evenodd" />
		</svg>
	);
};

FolderUploadFilled.iconName = "folder-upload--filled";

export default FolderUploadFilled;