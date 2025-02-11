import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHeadphonesFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 3.5A8.5 8.5 0 0 0 3.5 12v5.25a.75.75 0 0 1-1.5 0V12C2 6.477 6.477 2 12 2s10 4.477 10 10v5.25a.75.75 0 0 1-1.5 0V12A8.5 8.5 0 0 0 12 3.5" />
					<path d="M5 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2zM16 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2z" />
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
					<path d="M10 3a7 7 0 0 0-7 7v4.5a.5.5 0 0 1-1 0V10a8 8 0 1 1 16 0v4.5a.5.5 0 0 1-1 0V10a7 7 0 0 0-7-7" />
					<path d="M4 12.5A1.5 1.5 0 0 1 5.5 11h1A1.5 1.5 0 0 1 8 12.5v4A1.5 1.5 0 0 1 6.5 18h-1A1.5 1.5 0 0 1 4 16.5zM13.5 11a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5z" />
				</svg>
			);
	}
};

IconHeadphonesFilled.iconName = "headphones--filled";

export default IconHeadphonesFilled;
