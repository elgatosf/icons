import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconVerifiedFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 16 16"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M7.333 1.456c.413-.238.921-.238 1.334 0l4.666 2.695c.413.238.667.678.667 1.154v5.39c0 .475-.254.916-.667 1.154l-4.666 2.694c-.413.238-.921.238-1.334 0L2.667 11.85A1.33 1.33 0 0 1 2 10.694V5.305c0-.476.254-.916.667-1.154zm3.52 4.69a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.707 0l-2-2a.5.5 0 1 1 .708-.708L7 9.293l3.146-3.147a.5.5 0 0 1 .708 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconVerifiedFilled.iconName = "verified--filled";

export default IconVerifiedFilled;
