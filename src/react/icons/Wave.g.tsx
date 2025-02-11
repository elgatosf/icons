import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWave = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.2 8.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zM13.85 4a.75.75 0 0 1 .75.75v14.5a.75.75 0 0 1-1.5 0V4.75a.75.75 0 0 1 .75-.75M10.15 10a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M16.8 15.25a.75.75 0 1 0 1.5 0v-6.5a.75.75 0 0 0-1.5 0zM21.25 14a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75M2.75 10a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75" />
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
					<path d="M12 3.5a.5.5 0 0 0-1 0v13a.5.5 0 0 0 1 0zM18 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zM8.5 8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M3 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0zM14.5 6a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M6 6.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z" />
				</svg>
			);
	}
};

IconWave.iconName = "wave";

export default IconWave;
