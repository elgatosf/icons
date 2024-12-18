import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Headphones = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M12 3.5C7.30558 3.5 3.5 7.30558 3.5 12V17.25C3.5 17.6642 3.16421 18 2.75 18C2.33579 18 2 17.6642 2 17.25V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V17.25C22 17.6642 21.6642 18 21.25 18C20.8358 18 20.5 17.6642 20.5 17.25V12C20.5 7.30558 16.6944 3.5 12 3.5Z" /><path fillRule="evenodd" d="M7 13C5.89543 13 5 13.8954 5 15V20C5 21.1046 5.89543 22 7 22H8C9.10457 22 10 21.1046 10 20V15C10 13.8954 9.10457 13 8 13H7ZM8 14.5H7C6.72386 14.5 6.5 14.7239 6.5 15V20C6.5 20.2761 6.72386 20.5 7 20.5H8C8.27614 20.5 8.5 20.2761 8.5 20V15C8.5 14.7239 8.27614 14.5 8 14.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M14 15C14 13.8954 14.8954 13 16 13H17C18.1046 13 19 13.8954 19 15V20C19 21.1046 18.1046 22 17 22H16C14.8954 22 14 21.1046 14 20V15ZM16 14.5H17C17.2761 14.5 17.5 14.7239 17.5 15V20C17.5 20.2761 17.2761 20.5 17 20.5H16C15.7239 20.5 15.5 20.2761 15.5 20V15C15.5 14.7239 15.7239 14.5 16 14.5Z" clipRule="evenodd" />
		</svg>
	);
};

Headphones.iconName = "headphones";

export default Headphones;