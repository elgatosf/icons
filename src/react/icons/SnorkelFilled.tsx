/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconSnorkelFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M17 4a2 2 0 1 1 4 0v12a6 6 0 0 1-6 6h-4a2 2 0 1 1 0-4h4a2 2 0 0 0 2-2v-1h-.251a3.5 3.5 0 0 1-1.95-.59A2 2 0 0 1 12.84 16h-1.68a2 2 0 0 1-1.958-1.59 3.5 3.5 0 0 1-1.95.59H6.93A3.93 3.93 0 0 1 3 11.07V9a4 4 0 0 1 4-4h10zm0 2.5H7A2.5 2.5 0 0 0 4.5 9v2.07a2.43 2.43 0 0 0 2.43 2.43h.321a2.02 2.02 0 0 0 1.96-1.53l.091-.364a2.78 2.78 0 0 1 5.396 0l.09.364a2.02 2.02 0 0 0 1.96 1.53h.321a2.43 2.43 0 0 0 2.431-2.43V9A2.5 2.5 0 0 0 17 6.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconSnorkelFilled;
