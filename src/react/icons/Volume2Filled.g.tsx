import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVolume2Filled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M9.293 20.293 5 16H3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2l4.293-4.293c.63-.63 1.707-.184 1.707.707v15.172c0 .89-1.077 1.337-1.707.707"
						clipRule="evenodd"
					/>
					<path d="M15.95 5.99a.75.75 0 0 1 1.06 0 8.5 8.5 0 0 1 0 12.02.75.75 0 0 1-1.06-1.06 7 7 0 0 0 0-9.9.75.75 0 0 1 0-1.06" />
					<path d="M14.536 8.464a.75.75 0 1 0-1.061 1.061 3.5 3.5 0 0 1 0 4.95.75.75 0 1 0 1.06 1.06 5 5 0 0 0 0-7.07" />
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
						d="M9 3.5a.5.5 0 0 0-.854-.354L4.293 7H3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1.293l3.853 3.854A.5.5 0 0 0 9 16.5z"
						clipRule="evenodd"
					/>
					<path d="M11.828 7.172a.5.5 0 0 0-.707.707 3 3 0 0 1 0 4.242.5.5 0 0 0 .707.707 3.997 3.997 0 0 0 0-5.656" />
					<path d="M13.243 5.05a.5.5 0 0 1 .707 0 7 7 0 0 1 0 9.9.5.5 0 0 1-.707-.707 6 6 0 0 0 0-8.486.5.5 0 0 1 0-.707" />
				</svg>
			);
	}
};

IconVolume2Filled.iconName = "volume2--filled";

export default IconVolume2Filled;
