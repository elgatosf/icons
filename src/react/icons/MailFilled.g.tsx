import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MailFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM6.28033 7.21967C5.98744 6.92678 5.51256 6.92678 5.21967 7.21967C4.92678 7.51256 4.92678 7.98744 5.21967 8.28033L11.4697 14.5303C11.7626 14.8232 12.2374 14.8232 12.5303 14.5303L18.7803 8.28033C19.0732 7.98744 19.0732 7.51256 18.7803 7.21967C18.4874 6.92678 18.0126 6.92678 17.7197 7.21967L12 12.9393L6.28033 7.21967Z" clipRule="evenodd" />
		</svg>
	);
};

MailFilled.iconName = "mail--filled";

export default MailFilled;