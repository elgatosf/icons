import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const HeadphonesOff = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M2.21967 21.7803C1.92678 21.4874 1.92678 21.0126 2.21967 20.7197L20.7197 2.21967C21.0126 1.92678 21.4874 1.92678 21.7803 2.21967C22.0732 2.51256 22.0732 2.98744 21.7803 3.28033L19.5816 5.47906C21.0889 7.22987 22 9.50853 22 12V17.25C22 17.6642 21.6642 18 21.25 18C20.8358 18 20.5 17.6642 20.5 17.25V12C20.5 9.92282 19.7549 8.01967 18.5174 6.54322L10 15.0607V20C10 21.1046 9.10457 22 8 22H7C5.91543 22 5.03249 21.1367 5.00088 20.0598L3.28033 21.7803C2.98744 22.0732 2.51256 22.0732 2.21967 21.7803ZM6.5 18.5607V20C6.5 20.2761 6.72386 20.5 7 20.5H8C8.27614 20.5 8.5 20.2761 8.5 20V16.5607L6.5 18.5607Z" clipRule="evenodd" /><path d="M2.82459 17.9963L3.49634 17.3246C3.49876 17.3001 3.5 17.2752 3.5 17.25V12C3.5 7.30558 7.30558 3.5 12 3.5C13.5309 3.5 14.9673 3.90471 16.2079 4.61298L17.3015 3.5194C15.7646 2.55661 13.9473 2 12 2C6.47715 2 2 6.47715 2 12V17.25C2 17.6642 2.33579 18 2.75 18C2.77517 18 2.80006 17.9988 2.82459 17.9963Z" /><path d="M5 15.8209L7.82093 13H7C5.89543 13 5 13.8954 5 15V15.8209Z" /><path fillRule="evenodd" d="M14 15C14 13.8954 14.8954 13 16 13H17C18.1046 13 19 13.8954 19 15V20C19 21.1046 18.1046 22 17 22H16C14.8954 22 14 21.1046 14 20V15ZM16 14.5H17C17.2761 14.5 17.5 14.7239 17.5 15V20C17.5 20.2761 17.2761 20.5 17 20.5H16C15.7239 20.5 15.5 20.2761 15.5 20V15C15.5 14.7239 15.7239 14.5 16 14.5Z" clipRule="evenodd" />
		</svg>
	);
};

HeadphonesOff.iconName = "headphones-off";

export default HeadphonesOff;