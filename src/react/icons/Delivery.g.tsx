import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const Delivery = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path fillRule="evenodd" d="M14 18H10C10 19.6569 8.65685 21 7 21C5.34315 21 4 19.6569 4 18C2.89543 18 2 17.1046 2 16V6C2 4.89543 2.89543 4 4 4H15C16.1046 4 17 4.89543 17 6V7H17.8676C18.5701 7 19.2212 7.3686 19.5826 7.97101L21.715 11.525C21.9015 11.8358 22 12.1915 22 12.554V16C22 17.1046 21.1046 18 20 18C20 19.6569 18.6569 21 17 21C15.3431 21 14 19.6569 14 18ZM15 5.5H4C3.72386 5.5 3.5 5.72386 3.5 6V16C3.5 16.2761 3.72386 16.5 4 16.5H4.40135C4.92006 15.6033 5.88958 15 7 15C8.11042 15 9.07994 15.6033 9.59865 16.5H14.4013C14.6648 16.0446 15.0446 15.6648 15.5 15.4013V6C15.5 5.72386 15.2761 5.5 15 5.5ZM19.5987 16.5C19.0799 15.6033 18.1104 15 17 15V8.5H17.8676C18.0433 8.5 18.206 8.59215 18.2964 8.74275L20.4287 12.2967C20.4754 12.3744 20.5 12.4633 20.5 12.554V16C20.5 16.2761 20.2761 16.5 20 16.5H19.5987ZM7 19.5C7.82843 19.5 8.5 18.8284 8.5 18C8.5 17.1716 7.82843 16.5 7 16.5C6.17157 16.5 5.5 17.1716 5.5 18C5.5 18.8284 6.17157 19.5 7 19.5ZM17 19.5C17.8284 19.5 18.5 18.8284 18.5 18C18.5 17.1716 17.8284 16.5 17 16.5C16.1716 16.5 15.5 17.1716 15.5 18C15.5 18.8284 16.1716 19.5 17 19.5Z" clipRule="evenodd" />
		</svg>
	);
};

Delivery.iconName = "delivery";

export default Delivery;