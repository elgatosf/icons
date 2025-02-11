import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAdjustVerticalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M4 8.75a3.75 3.75 0 0 0 3 3.675v8.825a.75.75 0 0 0 1.5 0v-8.825a3.751 3.751 0 0 0 0-7.35V2.75a.75.75 0 1 0-1.5 0v2.325c-1.712.347-3 1.86-3 3.675M12.5 15.25a3.75 3.75 0 0 1 3-3.675V2.75a.75.75 0 0 1 1.5 0v8.825a3.751 3.751 0 0 1 0 7.35v2.325a.75.75 0 0 1-1.5 0v-2.325a3.75 3.75 0 0 1-3-3.675" />
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
						d="M14 14.95v2.55a.5.5 0 0 1-1 0v-2.55a2.5 2.5 0 0 1 0-4.9V2.5a.5.5 0 0 1 1 0v7.55a2.5 2.5 0 0 1 0 4.9M7 9.95a2.5 2.5 0 0 0 0-4.9V2.5a.5.5 0 0 0-1 0v2.55a2.5 2.5 0 0 0 0 4.9v7.55a.5.5 0 0 0 1 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAdjustVerticalFilled.iconName = "adjust-vertical--filled";

export default IconAdjustVerticalFilled;
