import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12.75 4.75a.75.75 0 0 0-1.5 0v6.5h-6.5a.75.75 0 0 0 0 1.5h6.5v6.5a.75.75 0 0 0 1.5 0v-6.5h6.5a.75.75 0 0 0 0-1.5h-6.5z" />
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
					<path d="M7.995 2.5a.5.5 0 0 1 .5.5v4.505H13a.5.5 0 0 1 0 1H8.495V13a.5.5 0 0 1-1 0V8.505H3a.5.5 0 0 1 0-1h4.495V3a.5.5 0 0 1 .5-.5" />
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
					<path d="M10.5 4a.5.5 0 0 0-1 0v5.5H4a.5.5 0 0 0 0 1h5.5V16a.5.5 0 0 0 1 0v-5.5H16a.5.5 0 0 0 0-1h-5.5z" />
				</svg>
			);
	}
};

IconAdd.iconName = "add";

export default IconAdd;
