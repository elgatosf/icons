import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Lock = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12.75 15.7993C13.1984 15.54 13.5 15.0552 13.5 14.5C13.5 13.6716 12.8284 13 12 13C11.1716 13 10.5 13.6716 10.5 14.5C10.5 15.0552 10.8016 15.54 11.25 15.7993V17.25C11.25 17.6642 11.5858 18 12 18C12.4142 18 12.75 17.6642 12.75 17.25V15.7993Z" /><path fillRule="evenodd" d="M12 1.25C9.37665 1.25 7.25 3.37665 7.25 6V9H6C4.89543 9 4 9.89543 4 11V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V11C20 9.89543 19.1046 9 18 9H16.75V6C16.75 3.37665 14.6234 1.25 12 1.25ZM15.25 9V6C15.25 4.20507 13.7949 2.75 12 2.75C10.2051 2.75 8.75 4.20507 8.75 6V9H15.25ZM5.5 11C5.5 10.7239 5.72386 10.5 6 10.5H18C18.2761 10.5 18.5 10.7239 18.5 11V20C18.5 20.2761 18.2761 20.5 18 20.5H6C5.72386 20.5 5.5 20.2761 5.5 20V11Z" clipRule="evenodd" />
		</svg>
	);
};

Lock.iconName = "lock";

export default Lock;