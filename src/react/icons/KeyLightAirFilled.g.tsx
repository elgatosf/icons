import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightAirFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.87 4.143a2.99 2.99 0 0 0-2.727 2.728C6.063 7.71 6 8.76 6 10c0 1.238.063 2.289.143 3.13a2.99 2.99 0 0 0 2.728 2.726c.665.065 1.462.117 2.379.136v5.258a.75.75 0 0 0 1.5 0v-5.258a31 31 0 0 0 2.38-.136 2.99 2.99 0 0 0 2.726-2.727c.081-.84.144-1.89.144-3.129 0-1.238-.063-2.289-.143-3.13a2.99 2.99 0 0 0-2.728-2.727A33 33 0 0 0 12 4c-1.238 0-2.289.063-3.13.143" />
		</svg>
	);
};

IconKeyLightAirFilled.iconName = "key-light-air--filled";

export default IconKeyLightAirFilled;
