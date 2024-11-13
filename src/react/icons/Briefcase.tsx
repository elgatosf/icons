/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconBriefcase = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8 5v2H4a2 2 0 0 0-2 2v3a4 4 0 0 0 1 2.646V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.354c.622-.705 1-1.632 1-2.646V9a2 2 0 0 0-2-2h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2m6-.5h-4a.5.5 0 0 0-.5.5v2h5V5a.5.5 0 0 0-.5-.5m6 4a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 1-2.5 2.5h-5.25v-.75a.75.75 0 0 0-1.5 0v.75H6A2.5 2.5 0 0 1 3.5 12V9a.5.5 0 0 1 .5-.5zM11.25 16H6a4 4 0 0 1-1.5-.29V19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-3.29A4 4 0 0 1 18 16h-5.25v.75a.75.75 0 0 1-1.5 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconBriefcase;
