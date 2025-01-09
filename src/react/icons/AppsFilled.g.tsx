import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAppsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4M3 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0M3 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0M8 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0M10 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4M8 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0M15 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4M13 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0M15 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
				</svg>
			);
	}
};

IconAppsFilled.iconName = "apps--filled";

export default IconAppsFilled;
