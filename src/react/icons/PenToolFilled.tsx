/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPenToolFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m2.767 3.827 7.391 7.392a2 2 0 1 0 1.06-1.06L3.83 2.766c.256-.098.54-.14.839-.113 3.572.32 10.545 1.245 12.99 3.69a8 8 0 0 1 1.92 8.232l1.509 1.51a2 2 0 0 1 0 2.828l-2.172 2.172a2 2 0 0 1-2.828 0l-1.51-1.51a8 8 0 0 1-8.233-1.919C3.9 15.212 2.974 8.239 2.653 4.667a1.9 1.9 0 0 1 .114-.84" />
		</svg>
	);
};

export default IconPenToolFilled;
