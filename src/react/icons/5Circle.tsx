/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const Icon5Circle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.044 16.154c1.727 0 2.882-.968 2.882-2.882 0-1.463-.902-2.629-2.398-2.629-.715 0-1.309.308-1.727.935l.121-2.354h3.575V8.047H9.46l-.176 4.62h1.628c.1-.583.583-.89 1.122-.89.858 0 1.232.725 1.232 1.55 0 .88-.385 1.661-1.298 1.661-.66 0-1.144-.352-1.166-1.056h-1.64c0 1.727 1.408 2.222 2.882 2.222" />
			<path
				fillRule="evenodd"
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h14a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default Icon5Circle;
