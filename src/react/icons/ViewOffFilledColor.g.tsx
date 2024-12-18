import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const ViewOffFilledColor = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fill="#151515" d="M6.01892 16.9233C7.59846 18.0885 9.60084 19 12 19C17.1724 19 20.5006 14.7634 21.7235 12.882C22.0754 12.3406 22.0754 11.6594 21.7235 11.118C20.9235 9.88735 19.2229 7.64899 16.6945 6.24778L14.25 8.6923C15.3064 9.41228 16 10.6251 16 12C16 14.2091 14.2092 16 12 16C10.6252 16 9.4123 15.3064 8.69232 14.2499L6.01892 16.9233Z" /><path fill="#151515" d="M8.07033 12.7506L4.85917 15.9618C3.64987 14.8433 2.78283 13.6609 2.27658 12.882C1.92465 12.3406 1.92465 11.6594 2.27658 11.118C3.49949 9.23662 6.82759 5 12 5C13.1767 5 14.258 5.21927 15.2407 5.58019L12.7506 8.07031C12.5075 8.02415 12.2566 8 12 8C9.79088 8 8.00002 9.79086 8.00002 12C8.00002 12.2566 8.02417 12.5075 8.07033 12.7506Z" /><path fill="#151515" d="M9.78396 13.1583C10.2017 13.9558 11.0373 14.5 12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 11.0373 13.9558 10.2017 13.1583 9.78394L9.78396 13.1583Z" /><path fill="#C02335" d="M2.21967 20.7197C1.92678 21.0126 1.92678 21.4874 2.21967 21.7803C2.51256 22.0732 2.98744 22.0732 3.28033 21.7803L21.7803 3.28033C22.0732 2.98744 22.0732 2.51256 21.7803 2.21967C21.4874 1.92678 21.0126 1.92678 20.7197 2.21967L2.21967 20.7197Z" />
		</svg>
	);
};

ViewOffFilledColor.iconName = "view-off--filled--color";

export default ViewOffFilledColor;