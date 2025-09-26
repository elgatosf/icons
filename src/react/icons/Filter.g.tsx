import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFilter = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M21 5.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 .75.75M6 12a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12M14.25 19a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5z" />
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
					<path d="M11 13a.5.5 0 0 1 0 1H9a.5.5 0 0 1 0-1zM12.5 10a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM14 7a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z" />
					<path
						fillRule="evenodd"
						d="M10 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 1a7 7 0 1 0 0 14 7 7 0 0 0 0-14"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconFilter.iconName = "filter";

export default IconFilter;
