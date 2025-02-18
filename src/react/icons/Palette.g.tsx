import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPalette = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M17.5 13a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15.067 5.688a1.5 1.5 0 1 1-1.5 2.598 1.5 1.5 0 0 1 1.5-2.598M10.116 6.737a1.5 1.5 0 1 0-2.598 1.5 1.5 1.5 0 0 0 2.598-1.5M5 12.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M8.384 16.263a1.5 1.5 0 1 0 2.598 1.5 1.5 1.5 0 0 0-2.598-1.5" />
					<path
						fillRule="evenodd"
						d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a5 5 0 0 1-5 5 2 2 0 0 0-2 2v1a2 2 0 0 1-2 2h-1C6.477 22 2 17.523 2 12m11.5 7v1a.5.5 0 0 1-.5.5h-1a8.5 8.5 0 1 1 8.5-8.5 3.5 3.5 0 0 1-3.5 3.5 3.5 3.5 0 0 0-3.5 3.5"
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
					<path d="M12 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
					<path
						fillRule="evenodd"
						d="M2 10a8 8 0 1 1 16 0 4 4 0 0 1-4 4 2 2 0 0 0-2 2 2 2 0 0 1-2 2 8 8 0 0 1-8-8m9 6a1 1 0 0 1-1 1 7 7 0 1 1 7-7 3 3 0 0 1-3 3 3 3 0 0 0-3 3"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconPalette.iconName = "palette";

export default IconPalette;
