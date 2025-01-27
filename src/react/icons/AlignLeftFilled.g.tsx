import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignLeftFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M16.5 5A1.5 1.5 0 0 1 18 6.5v1A1.5 1.5 0 0 1 16.5 9h-10A1.5 1.5 0 0 1 5 7.5v-1A1.5 1.5 0 0 1 6.5 5zM2.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5M14 12.5a1.5 1.5 0 0 0-1.5-1.5h-6A1.5 1.5 0 0 0 5 12.5v1A1.5 1.5 0 0 0 6.5 15h6a1.5 1.5 0 0 0 1.5-1.5z" />
				</svg>
			);
	}
};

IconAlignLeftFilled.iconName = "align-left--filled";

export default IconAlignLeftFilled;
