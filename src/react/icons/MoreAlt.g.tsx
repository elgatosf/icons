import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMoreAlt = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M11 15a1 1 0 1 0-2 0 1 1 0 0 0 2 0M10 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2M10 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
				</svg>
			);
	}
};

IconMoreAlt.iconName = "more-alt";

export default IconMoreAlt;
