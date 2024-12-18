import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Icon10SquareFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M14.7725 8.99312C16.0925 8.99312 16.1145 11.0611 16.1145 12.0511C16.1145 13.0411 16.0375 14.9881 14.7175 14.9881C13.4305 14.9881 13.3755 13.0191 13.3755 12.0731C13.3755 11.0611 13.3865 8.99312 14.7725 8.99312Z" /><path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM14.7175 16.1431C17.0605 16.1431 17.7645 14.0641 17.7645 11.9521C17.7645 9.88412 17.0715 7.84912 14.7505 7.84912C12.4625 7.84912 11.7145 9.88412 11.7145 11.9411C11.7145 14.0091 12.3855 16.1431 14.7175 16.1431ZM9.76696 16.0001H8.13896V9.63112C7.62196 10.1041 6.98396 10.4451 6.33496 10.6761V9.32312C7.22596 9.01512 7.68796 8.69612 8.38096 8.04712H9.76696V16.0001Z" clipRule="evenodd" />
		</svg>
	);
};

Icon10SquareFilled.iconName = "10-square--filled";

export default Icon10SquareFilled;