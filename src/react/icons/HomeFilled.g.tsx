import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHomeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3 7.73c0-.461.211-.896.573-1.18l5.5-4.322a1.5 1.5 0 0 1 1.854 0l5.5 4.322A1.5 1.5 0 0 1 17 7.73v7.77a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-4a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v4A1.5 1.5 0 0 1 7.5 17h-3A1.5 1.5 0 0 1 3 15.5z" />
				</svg>
			);
	}
};

IconHomeFilled.iconName = "home--filled";

export default IconHomeFilled;
