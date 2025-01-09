import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoStreamDeck = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
					<path d="M5.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M4.75 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M5.5 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M11.25 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M12 8a.75.75 0 1 1-1.5 0A.75.75 0 0 1 12 8M11.25 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M9.833 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M9.083 8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M9.833 10.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M6.917 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.667 8a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M6.917 11a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
					<path
						fillRule="evenodd"
						d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"
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
					<path d="M6.5 7.253a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M5.75 10.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M6.5 12.747a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M8.583 8.003a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M9.333 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M8.583 13.497a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M12.166 7.253a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M11.416 10.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M12.166 12.747a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M14.249 8.003a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M14.999 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M14.249 13.497a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" />
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-1a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoStreamDeck.iconName = "logo-stream-deck";

export default IconLogoStreamDeck;
