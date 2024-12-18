import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const CartFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M1 4.75C1 4.33579 1.33579 4 1.75 4H3.07595C3.78892 4 4.43061 4.43253 4.69811 5.09341L5.06506 6H20.25C20.4968 6 20.7279 6.12146 20.8678 6.32479C21.0078 6.52812 21.0387 6.78729 20.9505 7.01785L18.1921 14.2321C17.7851 15.2968 16.7634 16 15.6235 16H9.3481C8.22772 16 7.21935 15.3203 6.79899 14.2818L3.30769 5.6562C3.26947 5.56179 3.1778 5.5 3.07595 5.5H1.75C1.33579 5.5 1 5.16421 1 4.75Z" /><path d="M8.5 17C9.32843 17 10 17.6716 10 18.5C10 19.3284 9.32843 20 8.5 20C7.67157 20 7 19.3284 7 18.5C7 17.6716 7.67157 17 8.5 17Z" /><path d="M18 18.5C18 17.6716 17.3284 17 16.5 17C15.6716 17 15 17.6716 15 18.5C15 19.3284 15.6716 20 16.5 20C17.3284 20 18 19.3284 18 18.5Z" />
		</svg>
	);
};

CartFilled.iconName = "cart--filled";

export default CartFilled;