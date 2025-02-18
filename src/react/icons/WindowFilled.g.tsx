import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWindowFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 4a2 2 0 0 0-2 2v1.5h20V6a2 2 0 0 0-2-2zM22 9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z" />
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
					<path d="M3 3a2 2 0 0 0-2 2v1h14V5a2 2 0 0 0-2-2zM15 7H1v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" />
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
					<path d="M4 4a2 2 0 0 0-2 2v1h16V6a2 2 0 0 0-2-2zM18 8H2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2z" />
				</svg>
			);
	}
};

IconWindowFilled.iconName = "window--filled";

export default IconWindowFilled;
