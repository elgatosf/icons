import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MarginY = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19L21 5C21 3.89543 20.1046 3 19 3L5 3C3.89543 3 3 3.89543 3 5L3 19ZM4.5 8L4.5 16L19.5 16L19.5 8L4.5 8ZM4.5 6.5L19.5 6.5L19.5 5C19.5 4.72386 19.2761 4.5 19 4.5L5 4.5C4.72386 4.5 4.5 4.72386 4.5 5L4.5 6.5ZM4.5 19L4.5 17.5L19.5 17.5L19.5 19C19.5 19.2761 19.2761 19.5 19 19.5L5 19.5C4.72386 19.5 4.5 19.2761 4.5 19Z" clipRule="evenodd" />
		</svg>
	);
};

MarginY.iconName = "margin-y";

export default MarginY;