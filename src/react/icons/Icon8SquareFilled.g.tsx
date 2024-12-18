import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Icon8SquareFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M13.2986 10.1261C13.2986 9.34512 12.7266 8.88312 12.0226 8.88312C11.3186 8.88312 10.7136 9.31212 10.7136 10.1151C10.7136 10.9291 11.2966 11.2811 12.0116 11.2811C12.6936 11.2811 13.2986 10.8961 13.2986 10.1261Z" /><path d="M13.4746 13.6901C13.4746 12.7771 12.7706 12.3481 11.9786 12.3481C11.2086 12.3481 10.5376 12.7991 10.5376 13.6791C10.5376 14.5701 11.1976 15.0541 11.9896 15.0541C12.7706 15.0541 13.4746 14.5811 13.4746 13.6901Z" /><path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM15.0256 13.7891C15.0256 15.5491 13.5076 16.1541 12.0776 16.1541C10.6806 16.1541 8.97559 15.6261 8.97559 13.8551C8.97559 12.6341 9.83359 12.0291 10.8786 11.8201C10.5156 11.7981 9.20659 11.4351 9.20659 10.0161C9.20659 8.39912 10.7136 7.84912 12.0226 7.84912C13.2876 7.84912 14.8276 8.36612 14.8276 9.96112C14.8276 11.0061 14.1016 11.6111 13.1776 11.8201C13.5296 11.8531 15.0256 12.1941 15.0256 13.7891Z" clipRule="evenodd" />
		</svg>
	);
};

Icon8SquareFilled.iconName = "8-square--filled";

export default Icon8SquareFilled;