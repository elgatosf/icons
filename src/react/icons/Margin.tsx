/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMargin = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm14 1.5h-1.5v2h2V5a.5.5 0 0 0-.5-.5m.5 3.5h-2v8h2zM16 6.5v-2H8v2zM8 8h8v8H8zM6.5 6.5v-2H5a.5.5 0 0 0-.5.5v1.5zM4.5 8h2v8h-2zM8 17.5h8v2H8zm11 2h-1.5v-2h2V19a.5.5 0 0 1-.5.5m-14.5-2h2v2H5a.5.5 0 0 1-.5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconMargin.iconName = "margin";

export default IconMargin;
