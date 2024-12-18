import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const DiamondFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M10.5858 2.41422C11.3668 1.63317 12.6332 1.63317 13.4142 2.41422L21.5858 10.5858C22.3668 11.3668 22.3668 12.6332 21.5858 13.4142L13.4142 21.5858C12.6332 22.3668 11.3668 22.3668 10.5858 21.5858L2.41422 13.4142C1.63317 12.6332 1.63317 11.3668 2.41422 10.5858L10.5858 2.41422Z" />
		</svg>
	);
};

DiamondFilled.iconName = "diamond--filled";

export default DiamondFilled;