import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconExitFullscreen = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10 3.75a.75.75 0 0 0-1.5 0V8a.5.5 0 0 1-.5.5H3.75a.75.75 0 0 0 0 1.5H8a2 2 0 0 0 2-2zM14 20.25a.75.75 0 0 0 1.5 0V16a.5.5 0 0 1 .5-.5h4.25a.75.75 0 0 0 0-1.5H16a2 2 0 0 0-2 2zM21 9.25a.75.75 0 0 1-.75.75H16a2 2 0 0 1-2-2V3.75a.75.75 0 0 1 1.5 0V8a.5.5 0 0 0 .5.5h4.25a.75.75 0 0 1 .75.75M3.75 14a.75.75 0 0 0 0 1.5H8a.5.5 0 0 1 .5.5v4.25a.75.75 0 0 0 1.5 0V16a2 2 0 0 0-2-2z" />
		</svg>
	);
};

IconExitFullscreen.iconName = "exit-fullscreen";

export default IconExitFullscreen;
