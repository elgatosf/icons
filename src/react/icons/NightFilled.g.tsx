import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNightFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M20.8671 13.5451C21.01 12.7211 20.0124 12.2573 19.2364 12.5692C18.5453 12.847 17.7905 12.9998 17 12.9998C13.6863 12.9998 11 10.3135 11 6.99984C11 6.20941 11.1528 5.45467 11.4306 4.76358C11.7424 3.98764 11.2786 2.99005 10.4546 3.13292C8.68983 3.43892 6.99879 4.27329 5.63604 5.63605C2.12132 9.15077 2.12132 14.8493 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C19.7268 17.0011 20.5612 15.31 20.8671 13.5451Z" />
				</svg>
			);
		default:
			return (
				<svg
					viewBox="0 0 20 20"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path d="M9.43307 2.75733C9.49976 2.59197 9.47334 2.4036 9.36373 2.26297C9.25413 2.12233 9.07792 2.0507 8.90128 2.07498C5.0027 2.61078 2 5.95436 2 10.0001C2 14.4184 5.58172 18.0001 10 18.0001C14.0457 18.0001 17.3893 14.9974 17.9251 11.0988C17.9494 10.9222 17.8778 10.746 17.7371 10.6364C17.5965 10.5267 17.4081 10.5003 17.2428 10.567C16.5506 10.8462 15.7939 11.0001 15 11.0001C11.6863 11.0001 9 8.31379 9 5.00009C9 4.20622 9.15392 3.44953 9.43307 2.75733Z" />
				</svg>
			);
	}
};

IconNightFilled.iconName = "night--filled";

export default IconNightFilled;
