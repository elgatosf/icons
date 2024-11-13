/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconTimerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9 2.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 9 2.25" />
			<path
				fillRule="evenodd"
				d="M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-5.53-3.53-3 3a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0-1.06-1.06"
				clipRule="evenodd"
			/>
			<path d="M2.984 6.813a.75.75 0 0 1 0-1.06l1.768-1.769a.75.75 0 0 1 1.06 1.061L4.046 6.813a.75.75 0 0 1-1.06 0Zm15.203-2.829a.75.75 0 0 1 1.06 0l1.768 1.768a.75.75 0 0 1-1.06 1.06l-1.768-1.767a.75.75 0 0 1 0-1.06Z" />
		</svg>
	);
};

export default IconTimerFilled;
