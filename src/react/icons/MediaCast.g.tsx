import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMediaCast = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
					<path d="M3.122 5.52A1 1 0 0 1 4 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-3.5a.5.5 0 0 0 0 1H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-1.938 1.505c-.068.268.162.495.438.495s.49-.237.622-.48" />
					<path d="M2 8.5a.5.5 0 0 1 .5-.5 7.5 7.5 0 0 1 7.5 7.5.5.5 0 0 1-1 0A6.5 6.5 0 0 0 2.5 9a.5.5 0 0 1-.5-.5" />
					<path d="M2 11.5a.5.5 0 0 1 .5-.5A4.5 4.5 0 0 1 7 15.5a.5.5 0 0 1-1 0A3.5 3.5 0 0 0 2.5 12a.5.5 0 0 1-.5-.5M3 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
				</svg>
			);
	}
};

IconMediaCast.iconName = "media-cast";

export default IconMediaCast;
