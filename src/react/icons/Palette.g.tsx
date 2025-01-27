import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPalette = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M12 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M7 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
					<path
						fillRule="evenodd"
						d="M2 10a8 8 0 1 1 16 0 4 4 0 0 1-4 4 2 2 0 0 0-2 2 2 2 0 0 1-2 2 8 8 0 0 1-8-8m9 6a1 1 0 0 1-1 1 7 7 0 1 1 7-7 3 3 0 0 1-3 3 3 3 0 0 0-3 3"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconPalette.iconName = "palette";

export default IconPalette;
