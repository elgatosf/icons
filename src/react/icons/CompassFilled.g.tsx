import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCompassFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="m11.115 11.115-2.23-2.23 3.717-1.487z" />
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-4.036-3.314a.5.5 0 0 0-.65-.65l-5 2a.5.5 0 0 0-.278.278l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .278-.278z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCompassFilled.iconName = "compass--filled";

export default IconCompassFilled;
