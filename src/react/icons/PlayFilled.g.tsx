import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPlayFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M20 10.268c1.333.77 1.333 2.694 0 3.464L8 20.66c-1.333.77-3-.192-3-1.732V5.072C5 3.532 6.667 2.57 8 3.34z" />
		</svg>
	);
};

IconPlayFilled.iconName = "play--filled";

export default IconPlayFilled;
