import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Icon0Square = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M11.9781 16.1431C14.3211 16.1431 15.0251 14.0641 15.0251 11.9521C15.0251 9.88412 14.3321 7.84912 12.0111 7.84912C9.7231 7.84912 8.9751 9.88412 8.9751 11.9411C8.9751 14.0091 9.6461 16.1431 11.9781 16.1431ZM12.0331 8.99312C13.3531 8.99312 13.3751 11.0611 13.3751 12.0511C13.3751 13.0411 13.2981 14.9881 11.9781 14.9881C10.6911 14.9881 10.6361 13.0191 10.6361 12.0731C10.6361 11.0611 10.6471 8.99312 12.0331 8.99312Z" clipRule="evenodd" /><path fillRule="evenodd" d="M3 5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5ZM5 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H5C4.72386 19.5 4.5 19.2761 4.5 19V5C4.5 4.72386 4.72386 4.5 5 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Icon0Square.iconName = "0-square";

export default Icon0Square;