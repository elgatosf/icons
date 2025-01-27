import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCart = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M1 3.5a.5.5 0 0 1 .5-.5h.884A2 2 0 0 1 4.3 4.425L4.472 5H16.9a.5.5 0 0 1 .479.644l-2.08 6.93A2 2 0 0 1 13.385 14H7.616A2 2 0 0 1 5.7 12.575L3.342 4.713A1 1 0 0 0 2.384 4H1.5a.5.5 0 0 1-.5-.5M4.772 6l1.886 6.287a1 1 0 0 0 .958.713h5.768a1 1 0 0 0 .958-.713L16.228 6z"
						clipRule="evenodd"
					/>
					<path d="M8 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M14 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
				</svg>
			);
	}
};

IconCart.iconName = "cart";

export default IconCart;
