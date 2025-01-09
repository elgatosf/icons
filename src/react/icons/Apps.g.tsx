import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconApps = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2M5 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0M10 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0M8 10a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2M10 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4M9 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M13 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2M15 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-1 2a1 1 0 1 0 2 0 1 1 0 0 0-2 0M13 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m2 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconApps.iconName = "apps";

export default IconApps;
