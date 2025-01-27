import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMore = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M16 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
				</svg>
			);
	}
};

IconMore.iconName = "more";

export default IconMore;
