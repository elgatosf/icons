import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconApps = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M5 3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1 1.5H5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5M5 16a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm1 1.5H5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5M3 11.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 5 11M18 3a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm1 1.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5M16 18a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2zm2-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M18 9.5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm1 1.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5M9.5 5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2zm2-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1A.5.5 0 0 1 11 6V5a.5.5 0 0 1 .5-.5M11.5 16a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm1 1.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5M9.5 11.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2zm2-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
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
