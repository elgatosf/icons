import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSignal2 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.75 16C4.16411 16 4.49982 16.3359 4.5 16.75V20.25C4.49987 20.6641 4.16413 21 3.75 21C3.33587 21 3.00013 20.6641 3 20.25V16.75C3.00018 16.3359 3.33589 16 3.75 16Z" />
					<path d="M9.25 11.667C9.66421 11.667 10 12.0028 10 12.417V20.25C9.99987 20.6641 9.66413 21 9.25 21C8.83587 21 8.50013 20.6641 8.5 20.25V12.417C8.5 12.0028 8.83579 11.667 9.25 11.667Z" />
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
					<path d="M3.5 13C3.77601 13 3.99979 13.224 4 13.5V16.5C3.99974 16.7759 3.77598 17 3.5 17C3.22402 17 3.00026 16.7759 3 16.5V13.5C3.00021 13.224 3.22399 13 3.5 13Z" />
					<path d="M7.83301 9.66602C8.10915 9.66602 8.33301 9.89085 8.33301 10.167V16.5C8.33274 16.7759 8.10899 17 7.83301 17C7.55722 16.9998 7.33327 16.7758 7.33301 16.5V10.167C7.33301 9.89099 7.55705 9.66624 7.83301 9.66602Z" />
				</svg>
			);
	}
};

IconSignal2.iconName = "signal2";

export default IconSignal2;
