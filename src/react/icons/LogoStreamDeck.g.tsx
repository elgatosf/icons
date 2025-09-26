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
					<path
						fillRule="evenodd"
						d="M11.5 1A3.5 3.5 0 0 1 15 4.5v7a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 1 11.5v-7A3.5 3.5 0 0 1 4.5 1zm-7.73 9.09a.73.73 0 1 0 .001 1.46.73.73 0 0 0 0-1.46m2.82 0a.73.73 0 1 0 .001 1.46.73.73 0 0 0 0-1.46m2.82 0a.73.73 0 1 0 .001 1.46.73.73 0 0 0 0-1.46m2.82 0a.73.73 0 1 0 .001 1.46.73.73 0 0 0 0-1.46M3.77 7.27a.73.73 0 1 0 .002 1.46.73.73 0 0 0-.001-1.46m2.82 0a.73.73 0 1 0 .001 1.46.73.73 0 0 0 0-1.46m2.82 0a.73.73 0 1 0 .001 1.46.73.73 0 0 0 0-1.46m2.82 0a.73.73 0 1 0 .001 1.46.73.73 0 0 0 0-1.46M3.77 4.453a.73.73 0 1 0 .002 1.459.73.73 0 0 0-.001-1.46m2.82 0a.73.73 0 1 0 .001 1.459.73.73 0 0 0 0-1.46m2.82 0a.73.73 0 1 0 .001 1.459.73.73 0 0 0 0-1.46m2.82 0a.73.73 0 1 0 .001 1.459.73.73 0 0 0 0-1.46"
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
						d="M14 2a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4zM5.167 12.389a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667m3.222 0a.834.834 0 1 0 .001 1.667.834.834 0 0 0 0-1.667m3.223 0a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667m3.223 0a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667M5.167 9.167a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667m3.222 0a.834.834 0 1 0 .001 1.667.834.834 0 0 0 0-1.667m3.223 0a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667m3.223 0a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667M5.167 5.945a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667m3.222 0a.834.834 0 1 0 .001 1.667.834.834 0 0 0 0-1.667m3.223 0a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667m3.223 0a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.667"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLogoStreamDeck.iconName = "logo-stream-deck";

export default IconLogoStreamDeck;
