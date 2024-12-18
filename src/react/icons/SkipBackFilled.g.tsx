import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const SkipBackFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M2 3.75C2 3.33579 2.33579 3 2.75 3C3.16422 3 3.5 3.33579 3.5 3.75V20.25C3.5 20.6642 3.16422 21 2.75 21C2.33579 21 2 20.6642 2 20.25V3.75Z" /><path d="M7 10.268C5.66667 11.0378 5.66667 12.9623 7 13.7321L19 20.6603C20.3333 21.4301 22 20.4678 22 18.9282V5.0718C22 3.5322 20.3333 2.56995 19 3.33975L7 10.268Z" />
		</svg>
	);
};

SkipBackFilled.iconName = "skip-back--filled";

export default SkipBackFilled;