import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const EyedropperFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M9.90977 9.40977C8.65635 8.14923 9.54868 6 11.3284 6H12.1715C12.702 6 13.2107 5.78928 13.5858 5.41421L15 4C16.3807 2.61928 18.6193 2.61928 20 4C21.3807 5.38071 21.3807 7.61929 20 9L18.5858 10.4142C18.2107 10.7893 18 11.298 18 11.8284V12.6716C18 14.4534 15.8457 15.3457 14.5858 14.0858L9.90977 9.40977Z" clipRule="evenodd" /><path d="M13.1893 14.8106L7.87554 20.1244C7.62943 20.3705 7.32335 20.5482 6.98756 20.6397L5.37665 21.0791C3.88365 21.4863 2.51371 20.1163 2.92089 18.6233L3.36023 17.0124C3.45181 16.6766 3.62943 16.3705 3.87554 16.1244L9.18934 10.8106L10.25 11.8713L12.1287 13.75L13.1893 14.8106Z" />
		</svg>
	);
};

EyedropperFilled.iconName = "eyedropper--filled";

export default EyedropperFilled;