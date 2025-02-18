import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSort = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="m21.28 16.78-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06L16 18.44V3.75a.75.75 0 0 1 1.5 0v14.69l2.72-2.72a.75.75 0 1 1 1.06 1.06M7.78 3.22a.75.75 0 0 0-1.06 0l-4 4a.75.75 0 0 0 1.06 1.06L6.5 5.56v14.69a.75.75 0 0 0 1.5 0V5.56l2.72 2.72a.75.75 0 1 0 1.06-1.06z" />
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M11.854 13.854a.5.5 0 0 1-.707 0l-3-3a.5.5 0 0 1 .707-.707L11 12.293V2.5a.5.5 0 0 1 1 0v9.793l2.146-2.146a.5.5 0 0 1 .708.707zM4.854 2.147a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.707L4 3.707V13.4a.5.5 0 0 0 1 0V3.707l2.146 2.147a.5.5 0 1 0 .708-.707z" />
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
					<path d="M6.854 3.146a.5.5 0 0 0-.708 0l-3.5 3.5a.5.5 0 1 0 .708.708L6 4.707V16.5a.5.5 0 0 0 1 0V4.707l2.646 2.647a.5.5 0 0 0 .708-.708zM17.354 13.354l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 0 1 .708-.708L13 15.293V3.5a.5.5 0 0 1 1 0v11.793l2.646-2.647a.5.5 0 0 1 .708.708" />
				</svg>
			);
	}
};

IconSort.iconName = "sort";

export default IconSort;
