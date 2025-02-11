import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconClose = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M6.22 16.72a.75.75 0 1 0 1.06 1.06L12 13.06l4.72 4.72a.75.75 0 1 0 1.06-1.06L13.06 12l4.72-4.72a.75.75 0 0 0-1.06-1.06L12 10.94 7.28 6.22a.75.75 0 0 0-1.06 1.06L10.94 12z" />
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
					<path d="M5.146 14.146a.5.5 0 0 0 .708.708L10 10.707l4.146 4.147a.5.5 0 0 0 .708-.708L10.707 10l4.147-4.146a.5.5 0 0 0-.708-.708L10 9.293 5.854 5.146a.5.5 0 1 0-.708.708L9.293 10z" />
				</svg>
			);
	}
};

IconClose.iconName = "close";

export default IconClose;
