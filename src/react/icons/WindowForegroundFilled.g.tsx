import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowForegroundFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M16.5 20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5h14.5zM14.5 10.5a2 2 0 0 1 2 2v1H2v-1a2 2 0 0 1 2-2z" />
					<path d="M22 11.5a2 2 0 0 1-2 2h-1.25a.75.75 0 0 1-.75-.75v-.25A3.5 3.5 0 0 0 14.5 9H8.25a.75.75 0 0 1-.75-.75V6.5H22zM20 2a2 2 0 0 1 2 2v1H7.5V4a2 2 0 0 1 2-2z" />
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
					<path d="M11 13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3h10zM9 7a2 2 0 0 1 2 2H1a2 2 0 0 1 2-2z" />
					<path d="M15 7a2 2 0 0 1-2 2h-.5a.5.5 0 0 1-.5-.5A2.5 2.5 0 0 0 9.5 6h-4a.5.5 0 0 1-.5-.5V4h10zM13 1a2 2 0 0 1 2 2H5a2 2 0 0 1 2-2z" />
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
					<path d="M13 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3.5h11zM11 9a2 2 0 0 1 2 2v.5H2V11a2 2 0 0 1 2-2z" />
					<path d="m18 9-.01.204A2 2 0 0 1 16 11h-1.5a.5.5 0 0 1-.5-.5A2.5 2.5 0 0 0 11.5 8h-4a.5.5 0 0 1-.5-.5v-2h11zM16.204 2.01A2 2 0 0 1 18 4v.5H7V4a2 2 0 0 1 1.796-1.99L9 2h7z" />
				</svg>
			);
	}
};

IconWindowForegroundFilled.iconName = "window-foreground--filled";

export default IconWindowForegroundFilled;
