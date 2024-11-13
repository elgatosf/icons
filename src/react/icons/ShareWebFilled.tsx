/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconShareWebFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M17 9a3 3 0 1 0-2.955-2.481L8.02 9.782a3 3 0 1 0 0 4.436l6.025 3.263a3 3 0 1 0 .623-1.368l-5.824-3.155a3 3 0 0 0 0-1.916l5.824-3.155A3 3 0 0 0 17 9" />
		</svg>
	);
};

export default IconShareWebFilled;
