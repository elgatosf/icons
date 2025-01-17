import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPaletteFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M10 2a8 8 0 1 0 0 16 2 2 0 0 0 2-2 2 2 0 0 1 2-2 4 4 0 0 0 4-4 8 8 0 0 0-8-8m2 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2m3 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0m1 4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconPaletteFilled.iconName = "palette--filled";

export default IconPaletteFilled;
