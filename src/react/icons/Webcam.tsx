/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconWebcam = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M15.6 19.251a9 9 0 1 0-7.2 0 9 9 0 0 0-2.764 1.885.75.75 0 0 0 1.06 1.06 7.5 7.5 0 0 1 10.607 0 .75.75 0 0 0 1.061-1.06 9 9 0 0 0-2.764-1.885M12 18.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconWebcam.iconName = "webcam";

export default IconWebcam;
