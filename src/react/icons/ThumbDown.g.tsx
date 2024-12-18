import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ThumbDown = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M16.5 13L14.5055 19.3824C14.2048 20.3447 13.3135 21 12.3052 21C11.0321 21 10 19.9679 10 18.6948L10 15L4.6185 15C3.29975 15 2.34199 13.746 2.68897 12.4738L4.19613 6.94753C4.67074 5.20728 6.25138 4 8.05518 4L19 4C20.1046 4 21 4.89543 21 6L21 11C21 12.1046 20.1046 13 19 13L16.5 13ZM11.5 13.5L4.6185 13.5C4.28881 13.5 4.04937 13.1865 4.13612 12.8684L5.64328 7.34221C5.93991 6.25455 6.92781 5.5 8.05518 5.5L15 5.5L15 12.7711L13.0738 18.935C12.9687 19.2711 12.6574 19.5 12.3052 19.5C11.8605 19.5 11.5 19.1395 11.5 18.6948L11.5 13.5ZM16.5 11.5L19 11.5C19.2761 11.5 19.5 11.2761 19.5 11L19.5 6C19.5 5.72386 19.2761 5.5 19 5.5L16.5 5.5L16.5 11.5Z" clipRule="evenodd" />
		</svg>
	);
};

ThumbDown.iconName = "thumb-down";

export default ThumbDown;