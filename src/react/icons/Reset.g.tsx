import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconReset = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M6.5 4A.75.75 0 1 0 5 4v4.25c0 .414.336.75.75.75H10a.75.75 0 0 0 0-1.5H7.31a6.5 6.5 0 1 1-.94 7.75.75.75 0 0 0-1.298.75A8 8 0 1 0 6.5 6.19z" />
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
					<path d="M7.704 4.457A6 6 0 1 1 4.804 13a.5.5 0 0 0-.866.5A7 7 0 1 0 4 6.394V3.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H4.804a6 6 0 0 1 2.9-2.543" />
				</svg>
			);
	}
};

IconReset.iconName = "reset";

export default IconReset;
