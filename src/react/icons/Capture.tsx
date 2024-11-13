/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCapture = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2.75 2a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V3.5h1.75a.75.75 0 0 0 0-1.5zM2 18.75v2.5a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 0-1.5H3.5v-1.75a.75.75 0 0 0-1.5 0M18.75 22a.75.75 0 0 1 0-1.5h1.75v-1.75a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75zM22 5.25v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0" />
			<path
				fillRule="evenodd"
				d="M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="m16 6.5-.703-1.055A1 1 0 0 0 14.465 5h-4.93a1 1 0 0 0-.832.445L8 6.5H6a2 2 0 0 0-2 2V16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2zm-6.752.832A1.5 1.5 0 0 1 8 8H6a.5.5 0 0 0-.5.5V16a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V8.5A.5.5 0 0 0 18 8h-2a1.5 1.5 0 0 1-1.248-.668l-.555-.832H9.803z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconCapture;
