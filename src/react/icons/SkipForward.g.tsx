import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const SkipForward = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M22 3.75C22 3.33579 21.6642 3 21.25 3C20.8358 3 20.5 3.33579 20.5 3.75V20.25C20.5 20.6642 20.8358 21 21.25 21C21.6642 21 22 20.6642 22 20.25V3.75Z" /><path fillRule="evenodd" d="M17 10.268C18.3333 11.0378 18.3333 12.9623 17 13.7321L5 20.6603C3.66667 21.4301 2 20.4678 2 18.9282V5.0718C2 3.5322 3.66667 2.56995 5 3.33975L17 10.268ZM16.25 12.433L4.25 19.3612C3.91667 19.5537 3.5 19.3131 3.5 18.9282L3.5 5.0718C3.5 4.6869 3.91667 4.44634 4.25 4.63879L16.25 11.567C16.5833 11.7594 16.5833 12.2406 16.25 12.433Z" clipRule="evenodd" />
		</svg>
	);
};

SkipForward.iconName = "skip-forward";

export default SkipForward;