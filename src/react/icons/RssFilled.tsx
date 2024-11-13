/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconRssFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm2.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M6 6.75A.75.75 0 0 1 6.75 6 11.25 11.25 0 0 1 18 17.25a.75.75 0 0 1-1.5 0A9.75 9.75 0 0 0 6.75 7.5.75.75 0 0 1 6 6.75m.75 3.75a.75.75 0 0 0 0 1.5A5.25 5.25 0 0 1 12 17.25a.75.75 0 0 0 1.5 0 6.75 6.75 0 0 0-6.75-6.75"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconRssFilled.iconName = "rss--filled";

export default IconRssFilled;
