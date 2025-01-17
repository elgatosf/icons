import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAnalytics = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M9.5 3A1.5 1.5 0 0 0 8 4.5v11A1.5 1.5 0 0 0 9.5 17h1a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 10.5 3zm1 1h-1a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5M4.5 9A1.5 1.5 0 0 0 3 10.5v5A1.5 1.5 0 0 0 4.5 17h1A1.5 1.5 0 0 0 7 15.5v-5A1.5 1.5 0 0 0 5.5 9zm1 1h-1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5M13 7.5A1.5 1.5 0 0 1 14.5 6h1A1.5 1.5 0 0 1 17 7.5v8a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5h1a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAnalytics.iconName = "analytics";

export default IconAnalytics;
