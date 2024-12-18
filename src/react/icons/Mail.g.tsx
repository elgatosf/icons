import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Mail = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M6.28033 7.21967C5.98744 6.92678 5.51256 6.92678 5.21967 7.21967C4.92678 7.51256 4.92678 7.98744 5.21967 8.28033L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303L18.7803 8.28033C19.0732 7.98744 19.0732 7.51256 18.7803 7.21967C18.4874 6.92678 18.0126 6.92678 17.7197 7.21967L12 12.9393L6.28033 7.21967Z" /><path fillRule="evenodd" d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6ZM4 5.5H20C20.2761 5.5 20.5 5.72386 20.5 6V18C20.5 18.2761 20.2761 18.5 20 18.5H4C3.72386 18.5 3.5 18.2761 3.5 18V6C3.5 5.72386 3.72386 5.5 4 5.5Z" clipRule="evenodd" />
		</svg>
	);
};

Mail.iconName = "mail";

export default Mail;