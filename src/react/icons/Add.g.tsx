import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12.75 4.75a.75.75 0 0 0-1.5 0v6.5h-6.5a.75.75 0 0 0 0 1.5h6.5v6.5a.75.75 0 0 0 1.5 0v-6.5h6.5a.75.75 0 0 0 0-1.5h-6.5z" />
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
					<path d="M10 3.5a.5.5 0 0 0-1 0V9H3.5a.5.5 0 0 0 0 1H9v5.5a.5.5 0 0 0 1 0V10h5.5a.5.5 0 0 0 0-1H10z" />
				</svg>
			);
	}
};

IconAdd.iconName = "add";

export default IconAdd;
