import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Icon10Square = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M17.7647 11.9521C17.7647 14.0641 17.0607 16.1431 14.7177 16.1431C12.3857 16.1431 11.7147 14.0091 11.7147 11.9411C11.7147 9.88412 12.4627 7.84912 14.7507 7.84912C17.0717 7.84912 17.7647 9.88412 17.7647 11.9521ZM16.1147 12.0511C16.1147 11.0611 16.0927 8.99312 14.7727 8.99312C13.3867 8.99312 13.3757 11.0611 13.3757 12.0731C13.3757 13.0191 13.4307 14.9881 14.7177 14.9881C16.0377 14.9881 16.1147 13.0411 16.1147 12.0511Z" clipRule="evenodd" /><path d="M8.13914 16.0001H9.76714V8.04712H8.38114C7.68814 8.69612 7.22614 9.01512 6.33514 9.32312V10.6761C6.98414 10.4451 7.62214 10.1041 8.13914 9.63112V16.0001Z" /><path fillRule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM19 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H19C19.2761 19.5 19.5 19.2761 19.5 19V5C19.5 4.72386 19.2761 4.5 19 4.5Z" clipRule="evenodd" />
		</svg>
	);
};

Icon10Square.iconName = "10-square";

export default Icon10Square;