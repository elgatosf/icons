import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMobile = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M13.25 19a.75.75 0 0 0 0-1.5h-2.5a.75.75 0 0 0 0 1.5z" />
					<path
						fillRule="evenodd"
						d="M8 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2zm-.5-2V4a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5"
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
					<path d="M8.5 14a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z" />
					<path
						fillRule="evenodd"
						d="M4 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconMobile.iconName = "mobile";

export default IconMobile;
