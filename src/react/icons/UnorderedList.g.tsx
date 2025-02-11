import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconUnorderedList = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4.5 8.75a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4.5 19.25a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 6.75A.75.75 0 0 1 9.75 6h10.5a.75.75 0 0 1 0 1.5H9.75A.75.75 0 0 1 9 6.75M9.75 16.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" />
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
					<path d="M4 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 4.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M7.5 14a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM7 9.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M4 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
				</svg>
			);
	}
};

IconUnorderedList.iconName = "unordered-list";

export default IconUnorderedList;
