import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFullscreen = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 9.25a.75.75 0 0 0 1.5 0V5a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5H5a2 2 0 0 0-2 2zM21 14.75a.75.75 0 0 0-1.5 0V19a.5.5 0 0 1-.5.5h-4.25a.75.75 0 0 0 0 1.5H19a2 2 0 0 0 2-2zM14 3.75a.75.75 0 0 1 .75-.75H19a2 2 0 0 1 2 2v4.25a.75.75 0 0 1-1.5 0V5a.5.5 0 0 0-.5-.5h-4.25a.75.75 0 0 1-.75-.75M9.25 21a.75.75 0 0 0 0-1.5H5a.5.5 0 0 1-.5-.5v-4.25a.75.75 0 0 0-1.5 0V19a2 2 0 0 0 2 2z" />
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
					<path d="M5 3a2 2 0 0 0-2 2v2.5a.5.5 0 0 0 1 0V5a1 1 0 0 1 1-1h2.5a.5.5 0 0 0 0-1zM5 17a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 1 0V15a1 1 0 0 0 1 1h2.5a.5.5 0 0 1 0 1zM17 5a2 2 0 0 0-2-2h-2.5a.5.5 0 0 0 0 1H15a1 1 0 0 1 1 1v2.5a.5.5 0 0 0 1 0zM15 17a2 2 0 0 0 2-2v-2.5a.5.5 0 0 0-1 0V15a1 1 0 0 1-1 1h-2.5a.5.5 0 0 0 0 1z" />
				</svg>
			);
	}
};

IconFullscreen.iconName = "fullscreen";

export default IconFullscreen;
