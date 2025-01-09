import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDrag = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M8.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M15.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M17 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M15.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
		</svg>
	);
};

IconDrag.iconName = "drag";

export default IconDrag;
