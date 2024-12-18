import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CubeFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M3.76931 6.382C3.84191 6.32534 3.91892 6.27333 4 6.22651L11 2.18506C11.6188 1.8278 12.3812 1.8278 13 2.18506L20 6.22652C20.0811 6.27333 20.1581 6.32534 20.2307 6.382L12 11.134L3.76931 6.382Z" /><path d="M3.01931 7.68104C3.00655 7.77224 3 7.86494 3 7.95856V16.0415C3 16.756 3.3812 17.4163 4 17.7735L11 21.815C11.0811 21.8618 11.1646 21.9025 11.25 21.937V12.433L3.01931 7.68104Z" /><path d="M12.75 21.937C12.8354 21.9025 12.9189 21.8618 13 21.815L20 17.7735C20.6188 17.4163 21 16.756 21 16.0415V7.95857C21 7.86494 20.9935 7.77224 20.9807 7.68104L12.75 12.433V21.937Z" />
		</svg>
	);
};

CubeFilled.iconName = "cube--filled";

export default CubeFilled;