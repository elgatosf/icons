import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const HexagonFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M13 2.18506C12.3812 1.8278 11.6188 1.8278 11 2.18506L4 6.22652C3.3812 6.58378 3 7.24403 3 7.95857V16.0415C3 16.756 3.3812 17.4163 4 17.7735L11 21.815C11.6188 22.1722 12.3812 22.1722 13 21.815L20 17.7735C20.6188 17.4163 21 16.756 21 16.0415V7.95857C21 7.24403 20.6188 6.58378 20 6.22652L13 2.18506Z" clipRule="evenodd" />
		</svg>
	);
};

HexagonFilled.iconName = "hexagon--filled";

export default HexagonFilled;