import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconInfo = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10 8.5a.5.5 0 0 1 .5.5v5.5a.5.5 0 0 1-1 0V9a.5.5 0 0 1 .5-.5M10 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-1a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconInfo.iconName = "info";

export default IconInfo;
