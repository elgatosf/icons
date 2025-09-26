import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconClamp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5 4a2 2 0 0 1 2-2h11.25a.75.75 0 0 1 0 1.5H7a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h6v-3H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 0 1.5H14.5v3h3.75a.75.75 0 0 1 0 1.5H14.5v2.5h2.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5H13V18H7a2 2 0 0 1-2-2z" />
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M3 3a2 2 0 0 1 2-2h7.5a.5.5 0 0 1 0 1H5a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h4V9H6.5a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1H10v2h2.5a.5.5 0 0 1 0 1H10v2h1a.5.5 0 0 1 0 1H8a.5.5 0 0 1 0-1h1v-2H5a2 2 0 0 1-2-2z" />
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
					<path d="M4 4a2 2 0 0 1 2-2h9.5a.5.5 0 0 1 0 1H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5v-3H7.5a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1H12v3h3.5a.5.5 0 0 1 0 1H12v2h1.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1H11v-2H6a2 2 0 0 1-2-2z" />
				</svg>
			);
	}
};

IconClamp.iconName = "clamp";

export default IconClamp;
