import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const AspectRatioFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H18V10C18 8.89543 17.1046 8 16 8H2V6Z" /><path d="M14 20H16.5V10C16.5 9.72386 16.2761 9.5 16 9.5H14V20Z" /><path d="M12.5 9.5H2V18C2 19.1046 2.89543 20 4 20H12.5V9.5Z" />
		</svg>
	);
};

AspectRatioFilled.iconName = "aspect-ratio--filled";

export default AspectRatioFilled;