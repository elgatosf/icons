import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPauseFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.5 3A1.5 1.5 0 0 0 4 4.5v11A1.5 1.5 0 0 0 5.5 17h1A1.5 1.5 0 0 0 8 15.5v-11A1.5 1.5 0 0 0 6.5 3zM13.5 3A1.5 1.5 0 0 0 12 4.5v11a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 14.5 3z" />
				</svg>
			);
	}
};

IconPauseFilled.iconName = "pause--filled";

export default IconPauseFilled;
