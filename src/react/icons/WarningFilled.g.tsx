import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWarningFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M10.268 3.947c.77-1.333 2.694-1.333 3.464 0L21.268 17c.77 1.333-.192 3-1.732 3H4.464c-1.54 0-2.502-1.667-1.732-3zM12 8a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 12 8m0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconWarningFilled.iconName = "warning--filled";

export default IconWarningFilled;
