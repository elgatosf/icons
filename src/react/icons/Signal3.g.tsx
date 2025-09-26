import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSignal3 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.75 16a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5a.75.75 0 0 1 .75-.75M9.25 11.666a.75.75 0 0 1 .75.75v7.834a.75.75 0 0 1-1.5 0v-7.834a.75.75 0 0 1 .75-.75M14.75 7.333a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V8.083a.75.75 0 0 1 .75-.75" />
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
					<path d="M3.5 13a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5M7.833 9.666a.5.5 0 0 1 .5.5V16.5a.5.5 0 0 1-1 0v-6.334a.5.5 0 0 1 .5-.5M12.167 6.333a.5.5 0 0 1 .5.5V16.5a.5.5 0 0 1-1 0V6.833a.5.5 0 0 1 .5-.5" />
				</svg>
			);
	}
};

IconSignal3.iconName = "signal3";

export default IconSignal3;
