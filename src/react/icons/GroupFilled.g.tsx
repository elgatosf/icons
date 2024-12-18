import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const GroupFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5Z" /><path d="M20 7.5C20 9.433 18.433 11 16.5 11C14.567 11 13 9.433 13 7.5C13 5.567 14.567 4 16.5 4C18.433 4 20 5.567 20 7.5Z" /><path d="M7.5 12.5C4.46243 12.5 2 14.9624 2 18C2 19.1046 2.89543 20 4 20H11C12.1046 20 13 19.1046 13 18C13 14.9624 10.5376 12.5 7.5 12.5Z" /><path d="M14.3463 19.0297C14.2764 19.2572 14.3186 19.5043 14.46 19.6957C14.6014 19.8871 14.8253 20 15.0632 20H20C21.1046 20 22 19.1046 22 18C22 14.9624 19.5376 12.5 16.5 12.5C15.4797 12.5 14.5222 12.7785 13.7018 13.2641C13.5281 13.367 13.4032 13.5354 13.3553 13.7315C13.3074 13.9275 13.3405 14.1346 13.4472 14.3059C14.1144 15.3777 14.5 16.6427 14.5 18C14.5 18.3595 14.4461 18.7051 14.3463 19.0297Z" />
		</svg>
	);
};

GroupFilled.iconName = "group--filled";

export default GroupFilled;