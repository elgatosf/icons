/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFaceSatisfiedFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m-3.031-8.25a.75.75 0 0 0-1.3.75 5 5 0 0 0 8.661 0 .75.75 0 0 0-1.299-.75 3.5 3.5 0 0 1-6.062 0m7.031-4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M9.25 11a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconFaceSatisfiedFilled;
