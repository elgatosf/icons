import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignRightFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.5 5A1.5 1.5 0 0 0 2 6.5v1A1.5 1.5 0 0 0 3.5 9h10A1.5 1.5 0 0 0 15 7.5v-1A1.5 1.5 0 0 0 13.5 5zM17.5 2a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 1 0v-15a.5.5 0 0 0-.5-.5M6 12.5A1.5 1.5 0 0 1 7.5 11h6a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 6 13.5z" />
				</svg>
			);
	}
};

IconAlignRightFilled.iconName = "align-right--filled";

export default IconAlignRightFilled;
