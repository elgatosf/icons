import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCartAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M1 3.5a.5.5 0 0 1 .5-.5h.884A2 2 0 0 1 4.3 4.425l2.358 7.862a1 1 0 0 0 .958.713h5.768a1 1 0 0 0 .958-.713l2.08-6.93a.5.5 0 1 1 .957.287l-2.08 6.93A2 2 0 0 1 13.385 14H7.616A2 2 0 0 1 5.7 12.575L3.342 4.713A1 1 0 0 0 2.384 4H1.5a.5.5 0 0 1-.5-.5" />
					<path d="M10.5 4a.5.5 0 0 1 .5.5V7h2.5a.5.5 0 0 1 0 1H11v2.5a.5.5 0 0 1-1 0V8H7.5a.5.5 0 0 1 0-1H10V4.5a.5.5 0 0 1 .5-.5M8 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M14 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
				</svg>
			);
	}
};

IconCartAdd.iconName = "cart-add";

export default IconCartAdd;
