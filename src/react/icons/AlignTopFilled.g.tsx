import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignTopFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5 16.5A1.5 1.5 0 0 0 6.5 18h1A1.5 1.5 0 0 0 9 16.5v-10A1.5 1.5 0 0 0 7.5 5h-1A1.5 1.5 0 0 0 5 6.5zM2 2.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0-.5.5M12.5 14a1.5 1.5 0 0 1-1.5-1.5v-6A1.5 1.5 0 0 1 12.5 5h1A1.5 1.5 0 0 1 15 6.5v6a1.5 1.5 0 0 1-1.5 1.5z" />
				</svg>
			);
	}
};

IconAlignTopFilled.iconName = "align-top--filled";

export default IconAlignTopFilled;
