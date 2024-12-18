import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const DialRotateCcw = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M4.75 2.25C5.16421 2.25 5.5 2.58579 5.5 3V5.40065C6.29807 4.71802 7.19997 4.16429 8.1732 3.76116C9.38646 3.25862 10.6868 2.99996 12 2.99996C13.3133 2.99996 14.6136 3.25861 15.8269 3.76116C17.0401 4.26371 18.1425 5.0003 19.0711 5.92889C19.364 6.22178 19.364 6.69666 19.0711 6.98955C18.7782 7.28244 18.3033 7.28244 18.0104 6.98955C17.2211 6.20025 16.2841 5.57415 15.2528 5.14698C14.2216 4.71982 13.1163 4.49996 12 4.49996C10.8838 4.49996 9.7785 4.71982 8.74723 5.14698C7.71609 5.57409 6.77916 6.2001 5.98992 6.98926L5.28087 7.69975C5.06649 7.91456 4.74378 7.97901 4.46334 7.86301C4.1829 7.74701 4 7.47344 4 7.16996V3C4 2.58579 4.33579 2.25 4.75 2.25Z" /><path fillRule="evenodd" d="M12 20C15.866 20 19 16.866 19 13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13C5 16.866 8.13401 20 12 20ZM12 18.5C15.0376 18.5 17.5 16.0376 17.5 13C17.5 9.96243 15.0376 7.5 12 7.5C10.7516 7.5 9.60043 7.9159 8.67736 8.6167L11.7803 11.7197C12.0732 12.0126 12.0732 12.4874 11.7803 12.7803C11.4874 13.0732 11.0126 13.0732 10.7197 12.7803L7.6167 9.67736C6.9159 10.6004 6.5 11.7516 6.5 13C6.5 16.0376 8.96243 18.5 12 18.5Z" clipRule="evenodd" />
		</svg>
	);
};

DialRotateCcw.iconName = "dial-rotate-ccw";

export default DialRotateCcw;