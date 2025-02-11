import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAdjustHorizontal = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M15.25 4a3.75 3.75 0 0 0-3.675 3H2.75a.75.75 0 0 0 0 1.5h8.825a3.751 3.751 0 0 0 7.35 0h2.325a.75.75 0 0 0 0-1.5h-2.325a3.75 3.75 0 0 0-3.675-3m0 1.5a2.25 2.25 0 1 1 0 4.5 2.25 2.25 0 0 1 0-4.5M8.75 12.5a3.75 3.75 0 0 1 3.675 3h8.825a.75.75 0 0 1 0 1.5h-8.825a3.751 3.751 0 0 1-7.35 0H2.75a.75.75 0 0 1 0-1.5h2.325c.347-1.712 1.86-3 3.675-3m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
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
						d="M14.95 6h2.55a.5.5 0 0 1 0 1h-2.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h7.55a2.5 2.5 0 0 1 4.9 0M12.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M9.95 13a2.5 2.5 0 0 0-4.9 0H2.5a.5.5 0 0 0 0 1h2.55a2.5 2.5 0 0 0 4.9 0h7.55a.5.5 0 0 0 0-1zM7.5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAdjustHorizontal.iconName = "adjust-horizontal";

export default IconAdjustHorizontal;
