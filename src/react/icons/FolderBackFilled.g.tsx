import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const FolderBackFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M4 3C2.89543 3 2 3.89543 2 5V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V8C22 6.89543 21.1046 6 20 6H12.4142C12.149 6 11.8946 5.89464 11.7071 5.70711L9.58579 3.58579C9.21071 3.21071 8.70201 3 8.17157 3H4ZM11.7803 10.7803C12.0732 10.4874 12.0732 10.0126 11.7803 9.71967C11.4874 9.42678 11.0126 9.42678 10.7197 9.71967L8.21967 12.2197C7.92678 12.5126 7.92678 12.9874 8.21967 13.2803L10.7197 15.7803C11.0126 16.0732 11.4874 16.0732 11.7803 15.7803C12.0732 15.4874 12.0732 15.0126 11.7803 14.7197L10.5607 13.5H15.25C15.6642 13.5 16 13.1642 16 12.75C16 12.3358 15.6642 12 15.25 12H10.5607L11.7803 10.7803Z" clipRule="evenodd" />
		</svg>
	);
};

FolderBackFilled.iconName = "folder-back--filled";

export default FolderBackFilled;