import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumberedList = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2 3.75A.75.75 0 0 1 2.75 3H4.5a.75.75 0 0 1 .75.75V8.5h1a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1 0-1.5h1v-4h-1A.75.75 0 0 1 2 3.75M9.75 6a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM9.75 16.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM2.75 14a.75.75 0 0 0 0 1.5h2.5a.25.25 0 0 1 .25.25v.496a.25.25 0 0 1-.181.24l-2.05.586A1.75 1.75 0 0 0 2 18.754v1.496c0 .414.336.75.75.75h3.5a.75.75 0 0 0 0-1.5H3.5v-.746a.25.25 0 0 1 .181-.24l2.05-.586A1.75 1.75 0 0 0 7 16.246v-.496A1.75 1.75 0 0 0 5.25 14z" />
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
					<path d="M2.5 2.5A.5.5 0 0 1 3 2h1.5a.5.5 0 0 1 .5.5V7h1a.5.5 0 0 1 0 1H3a.5.5 0 0 1 0-1h1V3H3a.5.5 0 0 1-.5-.5M8 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5M6 18H2.5c-.22 0-.41-.14-.48-.35s.02-.44.2-.56C3.29 16.37 5 14.9 5 14.01c0-.23-.09-1-1-1-.67 0-1.05.72-1.05.73-.13.24-.43.34-.67.22a.496.496 0 0 1-.22-.67l.007-.012c.076-.139.698-1.268 1.943-1.268 1.47 0 2 1.2 2 2 0 1.06-1.1 2.22-2.02 3h2.02A.495.495 0 1 1 6 18M8.5 14a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1zM8.5 9a.5.5 0 0 0 0 1h8a.5.5 0 0 0 0-1z" />
				</svg>
			);
	}
};

IconNumberedList.iconName = "numbered-list";

export default IconNumberedList;
