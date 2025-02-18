import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNightFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M20.867 13.545c.143-.824-.855-1.288-1.63-.976a6 6 0 0 1-7.806-7.806c.311-.775-.152-1.773-.976-1.63a9 9 0 1 0 10.413 10.412" />
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
					<path d="M9.433 2.757a.5.5 0 0 0-.532-.682A8.002 8.002 0 0 0 10 18a8 8 0 0 0 7.925-6.901.5.5 0 0 0-.682-.532 6 6 0 0 1-7.81-7.81" />
				</svg>
			);
	}
};

IconNightFilled.iconName = "night--filled";

export default IconNightFilled;
