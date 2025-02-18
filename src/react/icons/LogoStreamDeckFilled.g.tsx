import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoStreamDeckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10M8 8.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-1.25 4.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M8 15.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m9.25-5.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M18.5 12a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-1.25 4.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M15 8.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-1.25 4.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M15 15.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m-4.75-5.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M11.5 12A1.25 1.25 0 1 1 9 12a1.25 1.25 0 0 1 2.5 0m-1.25 4.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
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
						d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14M5.5 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M5.5 8A.75.75 0 1 1 4 8a.75.75 0 0 1 1.5 0m-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M12 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0M9.083 6.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7.667 5.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
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
						d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0M6.5 7.253a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.497a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.997a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.083-4.744a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M9.333 10a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.497a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m3.583-6.244a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.497a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.997a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m2.083-4.744a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5m.75 1.997a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.75 3.497a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoStreamDeckFilled.iconName = "logo-stream-deck--filled";

export default IconLogoStreamDeckFilled;
