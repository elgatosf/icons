import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const DisplayProject = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M7 5C7 3.89543 7.89543 3 9 3H20C21.1046 3 22 3.89543 22 5V11C22 12.1046 21.1046 13 20 13H19.25C18.8358 13 18.5 12.6642 18.5 12.25C18.5 11.8358 18.8358 11.5 19.25 11.5H20C20.2761 11.5 20.5 11.2761 20.5 11V5C20.5 4.72386 20.2761 4.5 20 4.5H9C8.72386 4.5 8.5 4.72386 8.5 5V5.75C8.5 6.16421 8.16421 6.5 7.75 6.5C7.33579 6.5 7 6.16421 7 5.75V5Z" /><path fillRule="evenodd" d="M4 8C2.89543 8 2 8.89543 2 10V16C2 17.1046 2.89543 18 4 18H15C16.1046 18 17 17.1046 17 16V10C17 8.89543 16.1046 8 15 8H4ZM15 9.5H4C3.72386 9.5 3.5 9.72386 3.5 10V16C3.5 16.2761 3.72386 16.5 4 16.5H15C15.2761 16.5 15.5 16.2761 15.5 16V10C15.5 9.72386 15.2761 9.5 15 9.5Z" clipRule="evenodd" /><path d="M7 20.25C7 19.8358 7.33579 19.5 7.75 19.5H11.25C11.6642 19.5 12 19.8358 12 20.25C12 20.6642 11.6642 21 11.25 21H7.75C7.33579 21 7 20.6642 7 20.25Z" />
		</svg>
	);
};

DisplayProject.iconName = "display-project";

export default DisplayProject;