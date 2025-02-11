import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCart = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path
						fillRule="evenodd"
						d="M1 4.75A.75.75 0 0 1 1.75 4h1.326a1.75 1.75 0 0 1 1.622 1.093L5.065 6H20.25a.75.75 0 0 1 .7 1.018l-2.758 7.214A2.75 2.75 0 0 1 15.624 16H9.348A2.75 2.75 0 0 1 6.8 14.282L3.308 5.656a.25.25 0 0 0-.232-.156H1.75A.75.75 0 0 1 1 4.75M5.672 7.5l2.517 6.219c.191.472.65.781 1.16.781h6.275c.518 0 .982-.32 1.167-.804l2.37-6.196z"
						clipRule="evenodd"
					/>
					<path d="M8.5 17a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18 18.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
				</svg>
			);
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
