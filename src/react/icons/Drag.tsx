/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
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
			<path d="M10 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m0 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m7 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5-8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1.5-5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
		</svg>
	);
};

IconDrag.iconName = "drag";

export default IconDrag;
