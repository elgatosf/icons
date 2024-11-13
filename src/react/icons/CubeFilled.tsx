/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCubeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3.77 6.382q.108-.085.23-.156l7-4.041a2 2 0 0 1 2 0l7 4.041a2 2 0 0 1 .23.156L12 11.134zM3.02 7.68Q3 7.818 3 7.958v8.083a2 2 0 0 0 1 1.732l7 4.042q.122.07.25.122v-9.504zm9.73 14.257a2 2 0 0 0 .25-.122l7-4.042a2 2 0 0 0 1-1.732V7.958q0-.14-.02-.277l-8.23 4.752z" />
		</svg>
	);
};

IconCubeFilled.iconName = "cube--filled";

export default IconCubeFilled;
