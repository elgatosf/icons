/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconTimer = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.75 1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm1.72 12.03a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0" />
			<path
				fillRule="evenodd"
				d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16m6.5-8a6.5 6.5 0 1 0-13 0 6.5 6.5 0 0 0 13 0"
				clipRule="evenodd"
			/>
			<path d="M2.984 6.813a.75.75 0 0 1 0-1.06l1.768-1.769a.75.75 0 0 1 1.06 1.061L4.046 6.813a.75.75 0 0 1-1.06 0Zm16.264-2.829a.75.75 0 0 0-1.06 1.061l1.767 1.768a.75.75 0 1 0 1.06-1.06z" />
		</svg>
	);
};

export default IconTimer;
