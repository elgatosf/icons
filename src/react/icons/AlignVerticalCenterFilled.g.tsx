import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignVerticalCenterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M2 10a.5.5 0 0 1 .5-.5H5v-5A1.5 1.5 0 0 1 6.5 3h1A1.5 1.5 0 0 1 9 4.5v5h2v-3A1.5 1.5 0 0 1 12.5 5h1A1.5 1.5 0 0 1 15 6.5v3h2.5a.5.5 0 0 1 0 1H15v3a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-3H9v5A1.5 1.5 0 0 1 7.5 17h-1A1.5 1.5 0 0 1 5 15.5v-5H2.5A.5.5 0 0 1 2 10" />
				</svg>
			);
	}
};

IconAlignVerticalCenterFilled.iconName = "align-vertical-center--filled";

export default IconAlignVerticalCenterFilled;
