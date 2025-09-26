import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMultiMount = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M19.25 2a.75.75 0 0 1 .75.75V6.5a.75.75 0 0 1-.45.688L12 10.49V13h1.25a.75.75 0 0 1 0 1.5H12v6h2.75a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1 0-1.5h2.75v-6H4.75a.75.75 0 0 1 0-1.5h5.75v-3l.008-.11a.75.75 0 0 1 .441-.578L18.5 6.01V2.75a.75.75 0 0 1 .75-.75" />
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
					<path d="M15.5 2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.308.462L10 8.333V11h1.5a.5.5 0 0 1 0 1H10v5h2.5a.5.5 0 0 1 0 1h-6a.5.5 0 0 1 0-1H9v-5H4.5a.5.5 0 0 1 0-1H9V8a.5.5 0 0 1 .308-.462L15 5.166V2.5a.5.5 0 0 1 .5-.5" />
				</svg>
			);
	}
};

IconMultiMount.iconName = "multi-mount";

export default IconMultiMount;
