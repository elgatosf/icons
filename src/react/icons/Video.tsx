/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconVideo = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M19 4.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="m9.5 15.464 6-3.464-6-3.464zm6.75-2.165c1-.577 1-2.02 0-2.598l-6-3.464A1.5 1.5 0 0 0 8 8.536v6.928a1.5 1.5 0 0 0 2.25 1.3z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconVideo;
