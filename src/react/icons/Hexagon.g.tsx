import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Hexagon = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M19.25 7.52555L12.25 3.4841C12.0953 3.39479 11.9047 3.39479 11.75 3.4841L4.75 7.52555C4.5953 7.61487 4.5 7.77993 4.5 7.95857V16.0415C4.5 16.2201 4.5953 16.3852 4.75 16.4745L11.75 20.5159C11.9047 20.6053 12.0953 20.6053 12.25 20.5159L19.25 16.4745C19.4047 16.3852 19.5 16.2201 19.5 16.0415V7.95857C19.5 7.77993 19.4047 7.61487 19.25 7.52555ZM13 2.18506C12.3812 1.8278 11.6188 1.8278 11 2.18506L4 6.22652C3.3812 6.58378 3 7.24403 3 7.95857V16.0415C3 16.756 3.3812 17.4163 4 17.7735L11 21.815C11.6188 22.1722 12.3812 22.1722 13 21.815L20 17.7735C20.6188 17.4163 21 16.756 21 16.0415V7.95857C21 7.24403 20.6188 6.58378 20 6.22652L13 2.18506Z" clipRule="evenodd" />
		</svg>
	);
};

Hexagon.iconName = "hexagon";

export default Hexagon;