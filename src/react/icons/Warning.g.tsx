import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Warning = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11.9999 8C12.4142 8 12.7499 8.33579 12.7499 8.75V13.25C12.7499 13.6642 12.4142 14 11.9999 14C11.5857 14 11.2499 13.6642 11.2499 13.25V8.75C11.2499 8.33579 11.5857 8 11.9999 8Z" /><path d="M11.9999 17C12.5522 17 12.9999 16.5523 12.9999 16C12.9999 15.4477 12.5522 15 11.9999 15C11.4477 15 10.9999 15.4477 10.9999 16C10.9999 16.5523 11.4477 17 11.9999 17Z" /><path fillRule="evenodd" d="M13.732 3.94727C12.9622 2.61393 11.0377 2.61393 10.2679 3.94727L2.73199 16.9998C1.96219 18.3332 2.92444 19.9998 4.46404 19.9998H19.5358C21.0754 19.9998 22.0377 18.3332 21.2679 16.9998L13.732 3.94727ZM19.9689 17.7498L12.433 4.69727C12.2405 4.36393 11.7594 4.36393 11.5669 4.69727L4.03103 17.7498C3.83858 18.0832 4.07914 18.4998 4.46404 18.4998H19.5358C19.9207 18.4998 20.1613 18.0832 19.9689 17.7498Z" clipRule="evenodd" />
		</svg>
	);
};

Warning.iconName = "warning";

export default Warning;