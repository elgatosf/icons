import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const MountainFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M8.29345 4.79255L5.85061 8.78993L8.00001 10.9393L9.46968 9.46966C9.76258 9.17677 10.2374 9.17677 10.5303 9.46966L12 10.9393L14.1494 8.78993L11.7066 4.79255C10.9267 3.51642 9.07331 3.51642 8.29345 4.79255Z" /><path d="M0.859563 16.9571L5.04597 10.1066L7.46968 12.5303C7.76258 12.8232 8.23745 12.8232 8.53034 12.5303L10 11.0607L11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L14.9541 10.1066L19.1405 16.9571C19.3441 17.2903 19.4368 17.647 19.437 17.9948C19.4377 19.038 18.6053 20 17.4339 20L10.5215 20L10.5197 20H2.56613C1.00427 20 0.0451312 18.2898 0.859563 16.9571Z" /><path d="M20.4204 16.1749L14.9316 7.19329C15.832 6.62594 17.1085 6.84762 17.715 7.85834L23.1826 16.971C23.9824 18.3041 23.0222 20 21.4676 20H20.3066C21.0507 18.9267 21.2007 17.4518 20.4204 16.1749Z" />
		</svg>
	);
};

MountainFilled.iconName = "mountain--filled";

export default MountainFilled;