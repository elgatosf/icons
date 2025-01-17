import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconActionWheel = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M8 11.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
					<path
						fillRule="evenodd"
						d="M7.5 5A2.5 2.5 0 0 0 5 7.5v5A2.5 2.5 0 0 0 7.5 15h5a2.5 2.5 0 0 0 2.5-2.5v-5A2.5 2.5 0 0 0 12.5 5zm5 1h-5A1.5 1.5 0 0 0 6 7.5v5A1.5 1.5 0 0 0 7.5 14h5a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 6"
						clipRule="evenodd"
					/>
					<path d="M2 8.5A1.5 1.5 0 0 1 3.5 7h.126a.5.5 0 0 0 0-1H3.5A2.5 2.5 0 0 0 1 8.5v3A2.5 2.5 0 0 0 3.5 14h.126a.5.5 0 0 0 0-1H3.5A1.5 1.5 0 0 1 2 11.5zM16.374 6a.5.5 0 1 0 0 1h.126A1.5 1.5 0 0 1 18 8.5v3a1.5 1.5 0 0 1-1.5 1.5h-.126a.5.5 0 1 0 0 1h.126a2.5 2.5 0 0 0 2.5-2.5v-3A2.5 2.5 0 0 0 16.5 6z" />
				</svg>
			);
	}
};

IconActionWheel.iconName = "action-wheel";

export default IconActionWheel;
