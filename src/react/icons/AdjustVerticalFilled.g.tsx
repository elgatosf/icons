import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAdjustVerticalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M14 14.95v2.55a.5.5 0 0 1-1 0v-2.55a2.5 2.5 0 0 1 0-4.9V2.5a.5.5 0 0 1 1 0v7.55a2.5 2.5 0 0 1 0 4.9M7 9.95a2.5 2.5 0 0 0 0-4.9V2.5a.5.5 0 0 0-1 0v2.55a2.5 2.5 0 0 0 0 4.9v7.55a.5.5 0 0 0 1 0z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAdjustVerticalFilled.iconName = "adjust-vertical--filled";

export default IconAdjustVerticalFilled;
