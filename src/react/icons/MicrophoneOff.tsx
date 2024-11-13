/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconMicrophoneOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.262 15.68a6 6 0 0 0 3.988 2.273V20.5h-1.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-1.5v-2.547A6 6 0 0 0 18 12a.75.75 0 0 0-1.5 0 4.5 4.5 0 0 1-8.167 2.609zm.392-2.513-1.177 1.177A6 6 0 0 1 6 12a.75.75 0 0 1 1.5 0c0 .398.053.79.154 1.167" />
			<path d="M9.416 13.526A3 3 0 0 0 15 12V7.942l-1.5 1.5V12a1.5 1.5 0 0 1-2.949.39zM10.5 10.32 9 11.82V5a3 3 0 1 1 6 0v.82l-1.5 1.5V5a1.5 1.5 0 0 0-3 0z" />
			<path d="M2.22 20.72a.75.75 0 1 0 1.06 1.06l18.5-18.5a.75.75 0 0 0-1.06-1.06z" />
		</svg>
	);
};

IconMicrophoneOff.iconName = "microphone-off";

export default IconMicrophoneOff;
