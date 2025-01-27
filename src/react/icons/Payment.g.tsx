import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPayment = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.5 12a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
					<path
						fillRule="evenodd"
						d="M4 4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm12 1H4a1 1 0 0 0-1 1v1h14V6a1 1 0 0 0-1-1M3 14V8h14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconPayment.iconName = "payment";

export default IconPayment;
