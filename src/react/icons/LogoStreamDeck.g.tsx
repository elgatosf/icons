import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoStreamDeck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17m0 1.5c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
						clipRule="evenodd"
					/>
					<path d="M8 8.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M8 12a1.25 1.25 0 1 1-2.5 0A1.25 1.25 0 0 1 8 12M8 15.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M18.5 8.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M18.5 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M18.5 15.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15 8.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M15 15.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M11.5 8.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M11.5 12A1.25 1.25 0 1 1 9 12a1.25 1.25 0 0 1 2.5 0M11.5 15.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0" />
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
