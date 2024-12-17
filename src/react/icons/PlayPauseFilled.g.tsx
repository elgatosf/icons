import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPlayPauseFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.856 10.268c1.334.77 1.334 2.694 0 3.464L5 18.268c-1.333.77-3-.193-3-1.732V7.464c0-1.54 1.667-2.502 3-1.732zM17.25 5.5a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-1.5 0V6.25a.75.75 0 0 1 .75-.75m4.75.75a.75.75 0 0 0-1.5 0v11.5a.75.75 0 1 0 1.5 0z" />
		</svg>
	);
};

IconPlayPauseFilled.iconName = "play-pause--filled";

export default IconPlayPauseFilled;
