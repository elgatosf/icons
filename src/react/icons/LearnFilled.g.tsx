import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const LearnFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M10.9262 15.9666L2.32567 10.4936C1.70817 10.1006 1.70817 9.1992 2.32567 8.80625L10.9262 3.33319C11.5813 2.91628 12.4185 2.91628 13.0737 3.33319L21.6742 8.80625C22.2917 9.1992 22.2917 10.1006 21.6742 10.4936L21 10.9226V16.2498C21 16.664 20.6642 16.9998 20.25 16.9998C19.8358 16.9998 19.5 16.664 19.5 16.2498V11.8771L13.0737 15.9666C12.4185 16.3835 11.5813 16.3835 10.9262 15.9666Z" /><path d="M6.00003 14.6098L10.1209 17.2321C11.2673 17.9617 12.7325 17.9617 13.879 17.2321L18 14.6096V16.6421C18 17.3446 17.6314 17.9956 17.029 18.3571L13.029 20.757C12.3956 21.137 11.6044 21.137 10.971 20.757L6.97101 18.357C6.3686 17.9956 5.99999 17.3445 6 16.642L6.00003 14.6098Z" />
		</svg>
	);
};

LearnFilled.iconName = "learn--filled";

export default LearnFilled;