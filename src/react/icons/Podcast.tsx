/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPodcast = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.833 4.764a7.5 7.5 0 0 1 9.47 11.54.75.75 0 0 0 1.061 1.06 9.001 9.001 0 1 0-12.728 0 .75.75 0 1 0 1.06-1.06 7.5 7.5 0 0 1 1.137-11.54" />
			<path d="M9.5 7.258a4.5 4.5 0 0 1 5.682 6.924.75.75 0 1 0 1.06 1.06 6 6 0 1 0-8.485 0 .75.75 0 0 0 1.061-1.06A4.5 4.5 0 0 1 9.5 7.258" />
			<path
				fillRule="evenodd"
				d="M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0-1.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9 18a3 3 0 0 1 6 0v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm4.5 0v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2a1.5 1.5 0 0 1 3 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPodcast.iconName = "podcast";

export default IconPodcast;
