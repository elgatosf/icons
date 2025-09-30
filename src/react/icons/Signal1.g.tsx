import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSignal1 = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M3.75 16C4.16421 16 4.5 16.3358 4.5 16.75V20.25C4.5 20.6642 4.16421 21 3.75 21C3.33579 21 3 20.6642 3 20.25V16.75C3 16.3358 3.33579 16 3.75 16Z" />
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M3.5 13C3.77614 13 4 13.2239 4 13.5V16.5C4 16.7761 3.77614 17 3.5 17C3.22386 17 3 16.7761 3 16.5V13.5C3 13.2239 3.22386 13 3.5 13Z" />
				</svg>
			);
	}
};

IconSignal1.iconName = "signal1";

export default IconSignal1;
