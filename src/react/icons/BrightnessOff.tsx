/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconBrightnessOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-5.754 5.755a5 5 0 0 1-6.992 6.992l-1.448 1.447-.005.006-1.591 1.591-.006.006L3.28 21.78a.75.75 0 0 1-1.06 0m7.893-6.832a3.5 3.5 0 0 0 4.835-4.835z"
				clipRule="evenodd"
			/>
			<path d="M12 2a.75.75 0 0 1 .75.75V5a.75.75 0 0 1-1.5 0V2.75A.75.75 0 0 1 12 2m1.57 5.251a5 5 0 0 0-6.318 6.318l1.261-1.261a3.5 3.5 0 0 1 3.794-3.794L13.57 7.25ZM19 12.75h2.25a.75.75 0 0 0 0-1.5H19a.75.75 0 0 0 0 1.5m.071 6.321a.75.75 0 0 1-1.06 0l-1.591-1.59a.75.75 0 1 1 1.06-1.062l1.591 1.591a.75.75 0 0 1 0 1.061M11.25 21.25a.75.75 0 0 0 1.5 0V19a.75.75 0 0 0-1.5 0zM2 12a.75.75 0 0 1 .75-.75H5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 12m3.99-7.071a.75.75 0 0 0-1.061 1.06l1.59 1.592A.75.75 0 0 0 7.582 6.52z" />
		</svg>
	);
};

export default IconBrightnessOff;
