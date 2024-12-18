import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Webcam = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15ZM12 13.5C13.3807 13.5 14.5 12.3807 14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5Z" clipRule="evenodd" /><path fillRule="evenodd" d="M15.5997 19.2512C18.7785 17.8625 21 14.6907 21 11C21 6.02944 16.9706 2 12 2C7.02944 2 3 6.02944 3 11C3 14.6907 5.2215 17.8625 8.40028 19.2512C7.36962 19.701 6.4319 20.3402 5.63604 21.136C5.34314 21.4289 5.34314 21.9038 5.63604 22.1967C5.92893 22.4896 6.4038 22.4896 6.6967 22.1967C7.39314 21.5003 8.21993 20.9478 9.12987 20.5709C10.0398 20.194 11.0151 20 12 20C12.9849 20 13.9602 20.194 14.8701 20.5709C15.7801 20.9478 16.6069 21.5003 17.3033 22.1967C17.5962 22.4896 18.0711 22.4896 18.364 22.1967C18.6569 21.9038 18.6569 21.4289 18.364 21.136C17.5681 20.3402 16.6304 19.701 15.5997 19.2512ZM12 18.5C16.1421 18.5 19.5 15.1421 19.5 11C19.5 6.85786 16.1421 3.5 12 3.5C7.85786 3.5 4.5 6.85786 4.5 11C4.5 15.1421 7.85786 18.5 12 18.5Z" clipRule="evenodd" />
		</svg>
	);
};

Webcam.iconName = "webcam";

export default Webcam;