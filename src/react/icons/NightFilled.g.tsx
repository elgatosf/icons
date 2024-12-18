import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const NightFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M20.8671 13.5451C21.01 12.7211 20.0124 12.2573 19.2364 12.5692C18.5453 12.847 17.7905 12.9998 17 12.9998C13.6863 12.9998 11 10.3135 11 6.99984C11 6.20941 11.1528 5.45467 11.4306 4.76358C11.7424 3.98764 11.2786 2.99005 10.4546 3.13292C8.68983 3.43892 6.99879 4.27329 5.63604 5.63605C2.12132 9.15077 2.12132 14.8493 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C19.7268 17.0011 20.5612 15.31 20.8671 13.5451Z" />
		</svg>
	);
};

NightFilled.iconName = "night--filled";

export default NightFilled;