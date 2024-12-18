import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FolderBack = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.7803 10.7803C12.0732 10.4874 12.0732 10.0126 11.7803 9.71967C11.4874 9.42678 11.0126 9.42678 10.7197 9.71967L8.21967 12.2197C7.92678 12.5126 7.92678 12.9874 8.21967 13.2803L10.7197 15.7803C11.0126 16.0732 11.4874 16.0732 11.7803 15.7803C12.0732 15.4874 12.0732 15.0126 11.7803 14.7197L10.5607 13.5H15.25C15.6642 13.5 16 13.1642 16 12.75C16 12.3358 15.6642 12 15.25 12H10.5607L11.7803 10.7803Z" /><path fillRule="evenodd" d="M2 5C2 3.89543 2.89543 3 4 3H8.17157C8.70201 3 9.21071 3.21071 9.58579 3.58579L11.7071 5.70711C11.8946 5.89464 12.149 6 12.4142 6H20C21.1046 6 22 6.89543 22 8V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V5ZM20.5 8V18C20.5 18.2762 20.2761 18.5 20 18.5H4C3.72386 18.5 3.5 18.2762 3.5 18V5C3.5 4.72386 3.72386 4.5 4 4.5H8.17157C8.30418 4.5 8.43136 4.55268 8.52513 4.64645L10.6464 6.76777C11.1153 7.23661 11.7512 7.5 12.4142 7.5H20C20.2761 7.5 20.5 7.72386 20.5 8Z" clipRule="evenodd" />
		</svg>
	);
};

FolderBack.iconName = "folder-back";

export default FolderBack;