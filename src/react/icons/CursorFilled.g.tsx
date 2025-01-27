import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCursorFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M19.814 8.124 5.512 2.951c-1.594-.576-3.138.967-2.561 2.561l5.173 14.302c.636 1.758 3.121 1.76 3.76.003l1.797-4.94a2 2 0 0 1 1.196-1.196l4.94-1.796c1.757-.64 1.755-3.125-.003-3.76" />
		</svg>
	);
};

IconCursorFilled.iconName = "cursor--filled";

export default IconCursorFilled;
