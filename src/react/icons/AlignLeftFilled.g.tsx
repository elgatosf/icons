import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignLeftFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0zM6 8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zM8 13a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z" />
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
					<path d="M16.5 5A1.5 1.5 0 0 1 18 6.5v1A1.5 1.5 0 0 1 16.5 9h-10A1.5 1.5 0 0 1 5 7.5v-1A1.5 1.5 0 0 1 6.5 5zM2.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5M14 12.5a1.5 1.5 0 0 0-1.5-1.5h-6A1.5 1.5 0 0 0 5 12.5v1A1.5 1.5 0 0 0 6.5 15h6a1.5 1.5 0 0 0 1.5-1.5z" />
				</svg>
			);
	}
};

IconAlignLeftFilled.iconName = "align-left--filled";

export default IconAlignLeftFilled;
