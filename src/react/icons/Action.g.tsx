import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAction = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M9 4.5A1.5 1.5 0 0 1 10.5 3h5A1.5 1.5 0 0 1 17 4.5v5a1.5 1.5 0 0 1-1.5 1.5h-1.07a.5.5 0 0 0 0 1h1.07A2.5 2.5 0 0 0 18 9.5v-5A2.5 2.5 0 0 0 15.5 2h-5A2.5 2.5 0 0 0 8 4.5v1.07a.5.5 0 0 0 1 0z" />
					<path
						fillRule="evenodd"
						d="M7.5 18a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m0-1a4.5 4.5 0 1 0-2.809-8.016l2.663 2.662a.5.5 0 0 1-.708.708L3.984 9.69A4.5 4.5 0 0 0 7.5 17"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAction.iconName = "action";

export default IconAction;
