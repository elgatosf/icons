import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAppsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 18a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM5 9.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zM16 5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2zM18 16a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zM16 11.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2zM11.5 3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9.5 18a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2zM11.5 9.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z" />
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
					<path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4M3 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0M3 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0M8 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0M10 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4M8 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M15 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4M13 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0M15 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
				</svg>
			);
	}
};

IconAppsFilled.iconName = "apps--filled";

export default IconAppsFilled;
