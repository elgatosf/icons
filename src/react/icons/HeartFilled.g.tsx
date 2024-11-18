import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconHeartFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.5 3A5.5 5.5 0 0 0 2 8.5c0 6.136 6.692 10.598 9.127 12.019a1.72 1.72 0 0 0 1.745 0C15.309 19.098 22 14.636 22 8.5a5.5 5.5 0 0 0-10-3.163A5.5 5.5 0 0 0 7.5 3" />
		</svg>
	);
};

IconHeartFilled.iconName = "heart--filled";

export default IconHeartFilled;
