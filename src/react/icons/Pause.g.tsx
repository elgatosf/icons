import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPause = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M4 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-.5h2a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5M14 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zm2-.5h2a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
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
						d="M4 4.5A1.5 1.5 0 0 1 5.5 3h1A1.5 1.5 0 0 1 8 4.5v11A1.5 1.5 0 0 1 6.5 17h-1A1.5 1.5 0 0 1 4 15.5zM5.5 4h1a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5M12 4.5A1.5 1.5 0 0 1 13.5 3h1A1.5 1.5 0 0 1 16 4.5v11a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5zm1.5-.5h1a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconPause.iconName = "pause";

export default IconPause;
