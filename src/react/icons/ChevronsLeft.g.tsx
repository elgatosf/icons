import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconChevronsLeft = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
			<path d="M17.78 7.28a.75.75 0 0 0-1.06-1.06l-5.25 5.25a.75.75 0 0 0 0 1.06l5.25 5.25a.75.75 0 1 0 1.06-1.06L13.06 12z" />
			<path d="M12.78 7.28a.75.75 0 0 0-1.06-1.06l-5.25 5.25a.75.75 0 0 0 0 1.06l5.25 5.25a.75.75 0 1 0 1.06-1.06L8.06 12z" />
		</svg>
	);
};

IconChevronsLeft.iconName = "chevrons-left";

export default IconChevronsLeft;
