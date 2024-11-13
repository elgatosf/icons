/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLensCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 22q.395 0 .78-.03A6.48 6.48 0 0 1 11 17.41 5.502 5.502 0 0 1 12 6.5c2.696 0 4.94 1.94 5.41 4.5h.09a6.48 6.48 0 0 1 4.47 1.78q.03-.385.03-.78c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10" />
			<path d="M11.426 10.614A1.5 1.5 0 0 1 12 10.5.75.75 0 0 0 12 9a3 3 0 0 0-3 3 .75.75 0 0 0 1.5 0 1.5 1.5 0 0 1 .926-1.386" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconLensCheckFilled;
