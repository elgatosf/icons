/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconTouch = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.672 4.672A4 4 0 0 1 15.5 7.5a.75.75 0 0 0 1.5 0 5.5 5.5 0 1 0-11 0 .75.75 0 1 0 1.5 0 4 4 0 0 1 1.172-2.828" />
			<path
				fillRule="evenodd"
				d="M9 7.5V14l-1.694-.847a2.233 2.233 0 0 0-2.577 3.576l4.685 4.685A2 2 0 0 0 10.83 22h5.587a2 2 0 0 0 1.947-1.542l1.219-5.18a2 2 0 0 0-1.315-2.356L14 11.5v-4a2.5 2.5 0 0 0-5 0m3.5 5.081 5.293 1.764a.5.5 0 0 1 .329.59l-1.22 5.18a.5.5 0 0 1-.486.385h-5.588a.5.5 0 0 1-.353-.146L5.79 15.668a.733.733 0 0 1 .845-1.173l3.865 1.932V7.5a1 1 0 1 1 2 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTouch.iconName = "touch";

export default IconTouch;
