import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconStarFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M11.103 2.561a1 1 0 0 1 1.794 0l2.419 4.902 5.41.786a1 1 0 0 1 .553 1.706l-3.914 3.815.924 5.388a1 1 0 0 1-1.45 1.054L12 17.668l-4.838 2.544a1 1 0 0 1-1.451-1.054l.924-5.388L2.72 9.955a1 1 0 0 1 .554-1.706l5.41-.786z" />
		</svg>
	);
};

IconStarFilled.iconName = "star--filled";

export default IconStarFilled;
