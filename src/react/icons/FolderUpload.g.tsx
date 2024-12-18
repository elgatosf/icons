import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FolderUpload = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M15.0303 12.7803C14.7374 13.0732 14.2626 13.0732 13.9697 12.7803L12.75 11.5607V16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25V11.5607L10.0303 12.7803C9.73744 13.0732 9.26256 13.0732 8.96967 12.7803C8.67678 12.4874 8.67678 12.0126 8.96967 11.7197L11.4697 9.21967C11.7626 8.92678 12.2374 8.92678 12.5303 9.21967L15.0303 11.7197C15.3232 12.0126 15.3232 12.4874 15.0303 12.7803Z" /><path fillRule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H8.17157C8.70201 3 9.21071 3.21071 9.58579 3.58579L11.7071 5.70711C11.8946 5.89464 12.149 6 12.4142 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V5ZM20.5 8V18C20.5 18.2762 20.2761 18.5 20 18.5H4C3.72386 18.5 3.5 18.2762 3.5 18V5C3.5 4.72386 3.72386 4.5 4 4.5H8.17157C8.30418 4.5 8.43136 4.55268 8.52513 4.64645L10.6464 6.76777C11.1153 7.23661 11.7512 7.5 12.4142 7.5H20C20.2761 7.5 20.5 7.72386 20.5 8Z" clipRule="evenodd" />
		</svg>
	);
};

FolderUpload.iconName = "folder-upload";

export default FolderUpload;