import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCartFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M1.5 3a.5.5 0 0 0 0 1h.884a1 1 0 0 1 .958.713L5.7 12.575A2 2 0 0 0 7.616 14h5.768a2 2 0 0 0 1.916-1.425l2.079-6.931A.5.5 0 0 0 16.9 5H4.472L4.3 4.425A2 2 0 0 0 2.384 3zM8 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0M14 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
				</svg>
			);
	}
};

IconCartFilled.iconName = "cart--filled";

export default IconCartFilled;
