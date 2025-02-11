import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoWaveLink = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.75 10a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M14 6.75a.75.75 0 0 0-1.5 0v10.5a.75.75 0 0 0 1.5 0zM15 15.25a.75.75 0 0 0 1.5 0v-6.5a.75.75 0 0 0-1.5 0zM11.5 10.75a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0zM9 8.75a.75.75 0 0 0-1.5 0v6.5a.75.75 0 0 0 1.5 0zM17.5 13.25a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0z" />
					<path
						fillRule="evenodd"
						d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m0-1.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17"
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
					<path d="M3.5 7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5M5.3 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M7.6 7.5a.5.5 0 0 0-1 0v1a.5.5 0 1 0 1 0zM8.9 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M10.2 10a.5.5 0 0 0 1 0V6a.5.5 0 1 0-1 0zM12.5 9a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 1 0v1a.5.5 0 0 1-.5.5" />
					<path
						fillRule="evenodd"
						d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14m0-1A6 6 0 1 0 8 2a6 6 0 0 0 0 12"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoWaveLink.iconName = "logo-wave-link";

export default IconLogoWaveLink;
