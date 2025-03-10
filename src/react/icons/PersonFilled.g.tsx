import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPersonFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10M4 20a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2" />
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
					<path d="M10 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8M16.467 15.321C17.048 16.724 15.77 18 14.251 18H5.75c-1.518 0-2.797-1.276-2.216-2.679a7 7 0 0 1 12.934 0" />
				</svg>
			);
	}
};

IconPersonFilled.iconName = "person--filled";

export default IconPersonFilled;
