import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAnalyticsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9.5 5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2zM3 13a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM18 7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
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
					<path d="M8 4.5A1.5 1.5 0 0 1 9.5 3h1A1.5 1.5 0 0 1 12 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 8 15.5zM3 10.5A1.5 1.5 0 0 1 4.5 9h1A1.5 1.5 0 0 1 7 10.5v5A1.5 1.5 0 0 1 5.5 17h-1A1.5 1.5 0 0 1 3 15.5zM14.5 6A1.5 1.5 0 0 0 13 7.5v8a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 15.5 6z" />
				</svg>
			);
	}
};

IconAnalyticsFilled.iconName = "analytics--filled";

export default IconAnalyticsFilled;
