import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMediaCast = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M20 5.5H4a.5.5 0 0 0-.5.5v3.25a.75.75 0 0 1-1.5 0V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-7.25a.75.75 0 0 1 0-1.5H20a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5" />
			<path d="M2.75 11.5a.75.75 0 0 0 0 1.5A6.25 6.25 0 0 1 9 19.25a.75.75 0 0 0 1.5 0 7.75 7.75 0 0 0-7.75-7.75" />
			<path d="M2 15.25a.75.75 0 0 1 .75-.75 4.75 4.75 0 0 1 4.75 4.75.75.75 0 0 1-1.5 0A3.25 3.25 0 0 0 2.75 16a.75.75 0 0 1-.75-.75M3.25 20a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" />
		</svg>
	);
};

IconMediaCast.iconName = "media-cast";

export default IconMediaCast;
