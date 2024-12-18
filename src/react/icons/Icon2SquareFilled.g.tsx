import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Icon2SquareFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM14.7723 16.0001H9.03027V14.6911C9.09768 14.6375 9.17232 14.5785 9.25302 14.5148C10.4628 13.5594 13.0343 11.5286 13.0343 10.1261C13.0343 9.44412 12.6053 9.01512 11.9673 9.01512C11.2523 9.01512 10.8453 9.51012 10.8233 10.2471H9.16227C9.19527 8.52012 10.5813 7.84912 12.0443 7.84912C13.3533 7.84912 14.7283 8.54212 14.7283 10.0601C14.7283 11.6506 12.9763 13.1029 11.6624 14.192C11.4042 14.4059 11.163 14.6059 10.9553 14.7901H14.7723V16.0001Z" clipRule="evenodd" />
		</svg>
	);
};

Icon2SquareFilled.iconName = "2-square--filled";

export default Icon2SquareFilled;