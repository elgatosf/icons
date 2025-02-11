import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconExitFullscreen = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10 3.75a.75.75 0 0 0-1.5 0V8a.5.5 0 0 1-.5.5H3.75a.75.75 0 0 0 0 1.5H8a2 2 0 0 0 2-2zM14 20.25a.75.75 0 0 0 1.5 0V16a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5H16a2 2 0 0 0-2 2zM21 9.25a.75.75 0 0 1-.75.75H16a2 2 0 0 1-2-2V3.75a.75.75 0 0 1 1.5 0V8a.5.5 0 0 0 .5.5h4.25a.75.75 0 0 1 .75.75M3.75 14a.75.75 0 0 0 0 1.5H8a.5.5 0 0 1 .5.5v4.25a.75.75 0 0 0 1.5 0V16a2 2 0 0 0-2-2z" />
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
					<path d="M8 3.5a.5.5 0 0 0-1 0V6a1 1 0 0 1-1 1H3.5a.5.5 0 0 0 0 1H6a2 2 0 0 0 2-2zM12 16.5a.5.5 0 0 0 1 0V14a1 1 0 0 1 1-1h2.5a.5.5 0 0 0 0-1H14a2 2 0 0 0-2 2zM12.5 3a.5.5 0 0 0-.5.5V6a2 2 0 0 0 2 2h2.5a.5.5 0 0 0 0-1H14a1 1 0 0 1-1-1V3.5a.5.5 0 0 0-.5-.5M8 16.5a.5.5 0 0 1-1 0V14a1 1 0 0 0-1-1H3.5a.5.5 0 0 1 0-1H6a2 2 0 0 1 2 2z" />
				</svg>
			);
	}
};

IconExitFullscreen.iconName = "exit-fullscreen";

export default IconExitFullscreen;
