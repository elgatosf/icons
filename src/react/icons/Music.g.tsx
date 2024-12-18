import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Music = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M9.03449 5.03158L19.0178 2.03659C19.0575 2.02367 19.0987 2.01397 19.141 2.00781C19.3423 1.97801 19.5416 2.03224 19.6977 2.1482C19.7846 2.21275 19.8581 2.29643 19.9111 2.39539C19.9515 2.47062 19.9795 2.55355 19.9922 2.64141C19.9984 2.6836 20.001 2.72571 20 2.76735V15.5C20 17.433 18.433 19 16.5 19C14.567 19 13 17.433 13 15.5C13 13.567 14.567 12 16.5 12C17.2436 12 17.9331 12.2319 18.5 12.6273V3.75798L10 6.30798V18.4999C10 20.4329 8.433 22 6.5 22C4.567 22 3 20.4329 3 18.5C3 16.567 4.567 15 6.5 15C7.24362 15 7.93308 15.2319 8.5 15.6273V5.74995C8.5 5.41875 8.71725 5.12676 9.03449 5.03158ZM18.5 15.5C18.5 14.3954 17.6046 13.5 16.5 13.5C15.3954 13.5 14.5 14.3954 14.5 15.5C14.5 16.6045 15.3954 17.5 16.5 17.5C17.6046 17.5 18.5 16.6045 18.5 15.5ZM8.5 18.5C8.5 19.6045 7.60457 20.5 6.5 20.5C5.39543 20.5 4.5 19.6045 4.5 18.5C4.5 17.3954 5.39543 16.5 6.5 16.5C7.60457 16.5 8.5 17.3954 8.5 18.5Z" clipRule="evenodd" />
		</svg>
	);
};

Music.iconName = "music";

export default Music;