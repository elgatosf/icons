import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconUsb = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M11.6 1.534a.5.5 0 0 1 .8 0l2 2.666a.5.5 0 0 1-.4.8h-1.25v7.787l4.362-2.181a.25.25 0 0 0 .138-.224V9H17a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-.25v1.382a1.75 1.75 0 0 1-.967 1.565l-5.033 2.517v3.682a2 2 0 1 1-1.5 0v-1.682l-5.033-2.517a1.75 1.75 0 0 1-.967-1.565v-1.527a2 2 0 1 1 1.5 0v1.527a.25.25 0 0 0 .138.224l4.362 2.18V5H10a.5.5 0 0 1-.4-.8z" />
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
					<path d="M9.093 2.07a.5.5 0 0 1 .814 0l1.528 2.14a.5.5 0 0 1-.407.79H10v6.634l3.25-1.876c.464-.267.75-.764.75-1.3V8h-.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v.459a2.5 2.5 0 0 1-1.25 2.165L10 12.789v2.298a1.5 1.5 0 1 1-1 0v-1.298l-3.75-2.165a2.5 2.5 0 0 1-1.244-1.998L4 9.459v-.546a1.5 1.5 0 1 1 1 0v.546l.014.199c.06.457.33.866.736 1.1L9 12.635V5H7.972a.5.5 0 0 1-.408-.79z" />
				</svg>
			);
	}
};

IconUsb.iconName = "usb";

export default IconUsb;
