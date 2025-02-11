import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTimeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m.75-16.25a.75.75 0 0 0-1.5 0V12c0 .199.079.39.22.53l3.25 3.25a.75.75 0 1 0 1.06-1.06l-3.03-3.03z"
						clipRule="evenodd"
					/>
				</svg>
			);
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.5-11.5a.5.5 0 0 0-1 0V8a.5.5 0 0 0 .146.354l2.5 2.5a.5.5 0 0 0 .708-.708L8.5 7.793z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconTimeFilled.iconName = "time--filled";

export default IconTimeFilled;
