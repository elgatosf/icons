import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMicrophoneFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path fillRule="evenodd" d="M12 2a4 4 0 0 0-4 4v6a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4" clipRule="evenodd" />
					<path d="M18.25 11.25A.75.75 0 0 1 19 12a7 7 0 0 1-6.25 6.96v1.54h2.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5h2.5v-1.54A7 7 0 0 1 5 12a.75.75 0 0 1 1.5 0 5.5 5.5 0 0 0 11 0 .75.75 0 0 1 .75-.75" />
				</svg>
			);
		case "s":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M8 1a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3" />
					<path d="M12.5 7.5a.5.5 0 0 1 .5.5 5 5 0 0 1-4.5 4.975V14h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-1.025A5 5 0 0 1 3 8a.5.5 0 0 1 1 0 4 4 0 1 0 8 0 .5.5 0 0 1 .5-.5" />
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M7 5a3 3 0 0 1 6 0v5a3 3 0 1 1-6 0z" />
					<path d="M5.5 9.5a.5.5 0 0 1 .5.5 4 4 0 1 0 8 0 .5.5 0 0 1 1 0 5 5 0 0 1-4.5 4.975V17h2a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h2v-2.025A4.997 4.997 0 0 1 5 10a.5.5 0 0 1 .5-.5" />
				</svg>
			);
	}
};

IconMicrophoneFilled.iconName = "microphone--filled";

export default IconMicrophoneFilled;
