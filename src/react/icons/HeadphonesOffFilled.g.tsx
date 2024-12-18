import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const HeadphonesOffFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M2.21967 21.7803C1.92678 21.4874 1.92678 21.0126 2.21967 20.7197L20.7197 2.21967C21.0126 1.92678 21.4874 1.92678 21.7803 2.21967C22.0732 2.51256 22.0732 2.98744 21.7803 3.28033L19.5816 5.47906C21.0889 7.22987 22 9.50853 22 12V17.25C22 17.6642 21.6642 18 21.25 18C20.8358 18 20.5 17.6642 20.5 17.25V12C20.5 9.92282 19.7549 8.01967 18.5174 6.54322L10 15.0607V20C10 21.1046 9.10457 22 8 22H7C5.91543 22 5.03249 21.1367 5.00088 20.0598L3.28033 21.7803C2.98744 22.0732 2.51256 22.0732 2.21967 21.7803Z" /><path d="M2.82459 17.9963L3.49634 17.3246C3.49876 17.3001 3.5 17.2752 3.5 17.25V12C3.5 7.30558 7.30558 3.5 12 3.5C13.5309 3.5 14.9673 3.90471 16.2079 4.61298L17.3015 3.5194C15.7646 2.55661 13.9473 2 12 2C6.47715 2 2 6.47715 2 12V17.25C2 17.6642 2.33579 18 2.75 18C2.77517 18 2.80006 17.9988 2.82459 17.9963Z" /><path d="M5 15.8209L7.82093 13H7C5.89543 13 5 13.8954 5 15V15.8209Z" /><path d="M16 13C14.8954 13 14 13.8954 14 15V20C14 21.1046 14.8954 22 16 22H17C18.1046 22 19 21.1046 19 20V15C19 13.8954 18.1046 13 17 13H16Z" />
		</svg>
	);
};

HeadphonesOffFilled.iconName = "headphones-off--filled";

export default HeadphonesOffFilled;