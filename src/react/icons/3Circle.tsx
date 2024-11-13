/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const Icon3Circle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.857 16.143c1.408 0 3.07-.56 3.07-2.332 0-1.199-.782-1.804-1.86-1.969.99-.154 1.694-.836 1.694-1.848 0-1.595-1.562-2.145-2.838-2.145s-2.926.65-2.926 2.244h1.694c0-.836.693-1.11 1.2-1.11.648 0 1.253.406 1.253 1.154 0 1.001-.89 1.232-1.672 1.232-.143 0-.286-.01-.429-.022v1.111q.086-.005.174-.013c.122-.01.246-.02.365-.02.781 0 1.694.253 1.694 1.254 0 .88-.66 1.32-1.43 1.32-.726 0-1.32-.407-1.342-1.22h-1.65c.11 1.803 1.441 2.364 3.003 2.364" />
			<path
				fillRule="evenodd"
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h14a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default Icon3Circle;
