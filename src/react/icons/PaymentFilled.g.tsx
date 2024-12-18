import { type SVGProps } from "react";
import { type Size } from "../../metadata/index.js";
import { sizeMap } from "../../metadata/sizing.js";

type IconProps = {
	size?: Size;
	label?: string;
} & SVGProps<SVGSVGElement>;

const PaymentFilled = ({ size = "m", label = "Icon", ...props }: IconProps) => {
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
			<path d="M2 6C2 4.89543 2.89543 4 4 4H20C21.1046 4 22 4.89543 22 6V7.5H2V6Z" /><path fillRule="evenodd" d="M2 9H22V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V9ZM5.75 15.5C5.33579 15.5 5 15.8358 5 16.25C5 16.6642 5.33579 17 5.75 17L11.25 17C11.6642 17 12 16.6642 12 16.25C12 15.8358 11.6642 15.5 11.25 15.5L5.75 15.5Z" clipRule="evenodd" />
		</svg>
	);
};

PaymentFilled.iconName = "payment--filled";

export default PaymentFilled;