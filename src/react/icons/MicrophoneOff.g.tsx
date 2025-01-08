import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
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
			<path
				fillRule="evenodd"
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06L16 9.06V12a4 4 0 0 1-6.248 3.309l-1.074 1.074A5.5 5.5 0 0 0 17.5 12a.75.75 0 0 1 1.5 0 7 7 0 0 1-6.25 6.96v1.54h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5v-1.54a7 7 0 0 1-3.64-1.508L3.28 21.78a.75.75 0 0 1-1.06 0m8.624-7.563A2.5 2.5 0 0 0 14.5 12v-1.44z"
				clipRule="evenodd"
			/>
			<path d="M5.723 15.098 6.86 13.96A5.5 5.5 0 0 1 6.5 12 .75.75 0 0 0 5 12c0 1.085.252 2.143.723 3.098M8.07 12.75l1.43-1.43V6a2.5 2.5 0 0 1 5 0v.32l1.363-1.362A4.002 4.002 0 0 0 8 6v6q0 .386.07.75" />
		</svg>
	);
};

IconMicrophoneOff.iconName = "microphone-off";

export default IconMicrophoneOff;
