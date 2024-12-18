import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const SquareFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M4 7C4 5.34315 5.34315 4 7 4H25C26.6569 4 28 5.34315 28 7V25C28 26.6569 26.6569 28 25 28H7C5.34315 28 4 26.6569 4 25V7Z" />
		</svg>
	);
};

SquareFilled.iconName = "square--filled";

export default SquareFilled;