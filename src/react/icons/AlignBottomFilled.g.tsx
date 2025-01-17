import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignBottomFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5 3.5A1.5 1.5 0 0 1 6.5 2h1A1.5 1.5 0 0 1 9 3.5v10A1.5 1.5 0 0 1 7.5 15h-1A1.5 1.5 0 0 1 5 13.5zM2 17.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5M12.5 6A1.5 1.5 0 0 0 11 7.5v6a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 13.5 6z" />
				</svg>
			);
	}
};

IconAlignBottomFilled.iconName = "align-bottom--filled";

export default IconAlignBottomFilled;
