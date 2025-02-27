import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconInfoFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10M11 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0m.25 10.25a.75.75 0 0 0 1.5 0v-7a.75.75 0 0 0-1.5 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
		case "s":
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
						d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m.75-10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M8 6.5a.5.5 0 0 1 .5.5v4.502a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5"
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
						d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-.5 3a.5.5 0 0 0-1 0v5.5a.5.5 0 0 0 1 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconInfoFilled.iconName = "info--filled";

export default IconInfoFilled;
