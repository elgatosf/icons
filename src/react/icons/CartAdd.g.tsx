import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCartAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M1 4.75A.75.75 0 0 1 1.75 4h1.326a1.75 1.75 0 0 1 1.622 1.093L8.19 13.72c.191.472.65.781 1.16.781h6.275c.518 0 .982-.32 1.167-.803l2.758-7.215a.75.75 0 1 1 1.402.536l-2.76 7.215A2.75 2.75 0 0 1 15.625 16H9.348A2.75 2.75 0 0 1 6.8 14.282L3.308 5.656a.25.25 0 0 0-.232-.156H1.75A.75.75 0 0 1 1 4.75M8.5 17a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18 18.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
					<path d="M12.5 5a.75.75 0 0 1 .75.75v2h2a.75.75 0 0 1 0 1.5h-2v2a.75.75 0 0 1-1.5 0v-2h-2a.75.75 0 0 1 0-1.5h2v-2A.75.75 0 0 1 12.5 5" />
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
					<path d="M1 3.5a.5.5 0 0 1 .5-.5h.884A2 2 0 0 1 4.3 4.425l2.358 7.862a1 1 0 0 0 .958.713h5.768a1 1 0 0 0 .958-.713l2.08-6.93a.5.5 0 1 1 .957.287l-2.08 6.93A2 2 0 0 1 13.385 14H7.616A2 2 0 0 1 5.7 12.575L3.342 4.713A1 1 0 0 0 2.384 4H1.5a.5.5 0 0 1-.5-.5" />
					<path d="M10.5 4a.5.5 0 0 1 .5.5V7h2.5a.5.5 0 0 1 0 1H11v2.5a.5.5 0 0 1-1 0V8H7.5a.5.5 0 0 1 0-1H10V4.5a.5.5 0 0 1 .5-.5M8 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M14 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
				</svg>
			);
	}
};

IconCartAdd.iconName = "cart-add";

export default IconCartAdd;
