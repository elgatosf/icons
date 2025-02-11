import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M19.236 12.57c.776-.313 1.774.151 1.631.975A9 9 0 1 1 10.454 3.133c.825-.143 1.288.855.977 1.63a6 6 0 0 0 7.806 7.806m-.057 1.608a7.5 7.5 0 0 1-9.357-9.357 7.5 7.5 0 1 0 9.357 9.357"
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
						d="M9.364 2.263a.5.5 0 0 1 .07.494 6 6 0 0 0 7.81 7.81.5.5 0 0 1 .681.532A8.002 8.002 0 0 1 2 10a8 8 0 0 1 6.901-7.925.5.5 0 0 1 .463.188m-1.137.964a7 7 0 1 0 8.547 8.547 7 7 0 0 1-8.547-8.547"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconNight.iconName = "night";

export default IconNight;
