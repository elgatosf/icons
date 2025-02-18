import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconShapes = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M17 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 1.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8M19 14.5h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5M15 13a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zM9 4.5H5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5M5 3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM9.598 18.75 7.433 15a.5.5 0 0 0-.866 0l-2.165 3.75a.5.5 0 0 0 .433.75h4.33a.5.5 0 0 0 .433-.75m-.866-4.5c-.77-1.333-2.694-1.333-3.464 0L3.103 18c-.77 1.333.192 3 1.732 3h4.33c1.54 0 2.502-1.667 1.732-3z"
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
					<path
						fillRule="evenodd"
						d="M4.5 3A1.5 1.5 0 0 0 3 4.5v3A1.5 1.5 0 0 0 4.5 9h3A1.5 1.5 0 0 0 9 7.5v-3A1.5 1.5 0 0 0 7.5 3zm3 1h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5M12.5 11a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5zm3.5 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM14 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-2 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4.701 11.75c.577-1 2.02-1 2.598 0l1.732 3A1.5 1.5 0 0 1 7.732 17H4.268a1.5 1.5 0 0 1-1.299-2.25zm1.732.5 1.732 3a.5.5 0 0 1-.433.75H4.268a.5.5 0 0 1-.433-.75l1.732-3a.5.5 0 0 1 .866 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconShapes.iconName = "shapes";

export default IconShapes;
