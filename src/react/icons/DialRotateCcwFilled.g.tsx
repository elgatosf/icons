import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const DialRotateCcwFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M5.5 3C5.5 2.58579 5.16421 2.25 4.75 2.25C4.33579 2.25 4 2.58579 4 3V7.16996C4 7.47344 4.1829 7.74701 4.46334 7.86301C4.74378 7.97901 5.06649 7.91456 5.28087 7.69975L5.98963 6.98955C6.77887 6.20039 7.71609 5.57409 8.74723 5.14698C9.7785 4.71982 10.8838 4.49996 12 4.49996C13.1163 4.49996 14.2216 4.71982 15.2528 5.14698C16.2841 5.57415 17.2211 6.20025 18.0104 6.98955C18.3033 7.28244 18.7782 7.28244 19.0711 6.98955C19.364 6.69666 19.364 6.22178 19.0711 5.92889C18.1425 5.0003 17.0401 4.26371 15.8269 3.76116C14.6136 3.25861 13.3133 2.99996 12 2.99996C10.6868 2.99996 9.38646 3.25862 8.1732 3.76116C7.19997 4.16429 6.29807 4.71802 5.5 5.40065V3Z" /><path fillRule="evenodd" d="M19 13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13C5 9.13401 8.13401 6 12 6C15.866 6 19 9.13401 19 13ZM8.21967 9.21967C8.51256 8.92678 8.98744 8.92678 9.28033 9.21967L11.7803 11.7197C12.0732 12.0126 12.0732 12.4874 11.7803 12.7803C11.4874 13.0732 11.0126 13.0732 10.7197 12.7803L8.21967 10.2803C7.92678 9.98744 7.92678 9.51256 8.21967 9.21967Z" clipRule="evenodd" />
		</svg>
	);
};

DialRotateCcwFilled.iconName = "dial-rotate-ccw--filled";

export default DialRotateCcwFilled;