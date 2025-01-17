import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMediaCastFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2.5 6H3a9 9 0 0 1 9 9v.5a.5.5 0 0 0 .5.5H16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-1.938 1.505c-.068.268.162.495.438.495" />
					<path d="M2 8.5a.5.5 0 0 1 .5-.5 7.5 7.5 0 0 1 7.5 7.5.5.5 0 0 1-1 0A6.5 6.5 0 0 0 2.5 9a.5.5 0 0 1-.5-.5" />
					<path d="M2.5 11a.5.5 0 0 0 0 1A3.5 3.5 0 0 1 6 15.5a.5.5 0 0 0 1 0A4.5 4.5 0 0 0 2.5 11M4 15a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
				</svg>
			);
	}
};

IconMediaCastFilled.iconName = "media-cast--filled";

export default IconMediaCastFilled;
