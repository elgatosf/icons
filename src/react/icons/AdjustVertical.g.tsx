import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAdjustVertical = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
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
						d="M14 14.95v2.55a.5.5 0 0 1-1 0v-2.55a2.5 2.5 0 0 1 0-4.9V2.5a.5.5 0 0 1 1 0v7.55a2.5 2.5 0 0 1 0 4.9m-2-2.45a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0M7 9.95a2.5 2.5 0 0 0 0-4.9V2.5a.5.5 0 0 0-1 0v2.55a2.5 2.5 0 0 0 0 4.9v7.55a.5.5 0 0 0 1 0zM5 7.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAdjustVertical.iconName = "adjust-vertical";

export default IconAdjustVertical;
