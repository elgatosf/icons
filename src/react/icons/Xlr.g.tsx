import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconXlr = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 16a1 1 0 1 1 0 2 1 1 0 0 1 0-2M7 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2M17 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
					<path
						fillRule="evenodd"
						d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m0 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17"
						clipRule="evenodd"
					/>
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
					<path d="M10 13a1 1 0 1 1 0 2 1 1 0 0 1 0-2M6 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2M14 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
					<path
						fillRule="evenodd"
						d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconXlr.iconName = "xlr";

export default IconXlr;
