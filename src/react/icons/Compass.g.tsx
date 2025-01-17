import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCompass = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M13.854 6.146a.5.5 0 0 1 .11.54l-2 5a.5.5 0 0 1-.278.278l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .278-.278l5-2a.5.5 0 0 1 .54.11m-4.97 2.739 2.231 2.23 1.487-3.717z"
						clipRule="evenodd"
					/>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0-1a7 7 0 1 0 0-14 7 7 0 0 0 0 14"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCompass.iconName = "compass";

export default IconCompass;
