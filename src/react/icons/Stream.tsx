/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconStream = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M5.282 4.222a.75.75 0 0 1 0 1.06 9.5 9.5 0 0 0 0 13.436.75.75 0 1 1-1.06 1.06 11 11 0 0 1 0-15.556.75.75 0 0 1 1.06 0" />
			<path d="M8.11 7.05a.75.75 0 0 1 0 1.061 5.5 5.5 0 0 0 0 7.778.75.75 0 0 1-1.06 1.06 7 7 0 0 1 0-9.899.75.75 0 0 1 1.06 0" />
			<path
				fillRule="evenodd"
				d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
				clipRule="evenodd"
			/>
			<path d="M15.89 15.89a.75.75 0 0 0 1.06 1.06 7 7 0 0 0 0-9.9.75.75 0 1 0-1.06 1.061 5.5 5.5 0 0 1 0 7.778Z" />
			<path d="M18.718 18.718a.75.75 0 1 0 1.06 1.06 11 11 0 0 0 0-15.556.75.75 0 0 0-1.06 1.06 9.5 9.5 0 0 1 0 13.436" />
		</svg>
	);
};

IconStream.iconName = "stream";

export default IconStream;
