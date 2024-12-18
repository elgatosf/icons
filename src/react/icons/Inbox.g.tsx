import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Inbox = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V11H16C14.8954 11 14 11.8954 14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 9.10457 11 8 11H4.5V5C4.5 4.72386 4.72386 4.5 5 4.5ZM4.5 12.5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V12.5H16C15.7239 12.5 15.5 12.7239 15.5 13C15.5 14.933 13.933 16.5 12 16.5C10.067 16.5 8.5 14.933 8.5 13C8.5 12.7239 8.27614 12.5 8 12.5H4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Inbox.iconName = "inbox";

export default Inbox;