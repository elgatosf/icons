import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const DialRotateCwFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M18.5 3C18.5 2.58579 18.8358 2.25 19.25 2.25C19.6642 2.25 20 2.58579 20 3V7.16996C20 7.47344 19.8171 7.74701 19.5367 7.86301C19.2562 7.97901 18.9335 7.91456 18.7191 7.69975L18.0104 6.98955C17.2211 6.20039 16.2839 5.57409 15.2528 5.14698C14.2215 4.71982 13.1162 4.49996 12 4.49996C10.8837 4.49996 9.77843 4.71982 8.74716 5.14698C7.71589 5.57415 6.77886 6.20025 5.98956 6.98955C5.69666 7.28244 5.22179 7.28244 4.9289 6.98955C4.63601 6.69666 4.63601 6.22178 4.9289 5.92889C5.85748 5.0003 6.95988 4.26371 8.17313 3.76116C9.38639 3.25861 10.6867 2.99996 12 2.99996C13.3132 2.99996 14.6135 3.25862 15.8268 3.76116C16.8 4.16429 17.7019 4.71802 18.5 5.40065V3Z" /><path fillRule="evenodd" d="M4.99997 13C4.99997 16.866 8.13397 20 12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13397 6 4.99997 9.13401 4.99997 13ZM15.7803 9.21967C15.4874 8.92678 15.0125 8.92678 14.7196 9.21967L12.2196 11.7197C11.9267 12.0126 11.9267 12.4874 12.2196 12.7803C12.5125 13.0732 12.9874 13.0732 13.2803 12.7803L15.7803 10.2803C16.0732 9.98744 16.0732 9.51256 15.7803 9.21967Z" clipRule="evenodd" />
		</svg>
	);
};

DialRotateCwFilled.iconName = "dial-rotate-cw--filled";

export default DialRotateCwFilled;