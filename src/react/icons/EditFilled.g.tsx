import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconEditFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="m15.414 3.414 1.172 1.172a2 2 0 0 1 0 2.828l-1.232 1.232-4-4 1.232-1.232a2 2 0 0 1 2.828 0M10.646 5.354l-6.312 6.312a2 2 0 0 0-.483.782l-.902 2.706c-.391 1.173.724 2.288 1.897 1.897l2.706-.902a2 2 0 0 0 .782-.483l6.313-6.312z" />
				</svg>
			);
	}
};

IconEditFilled.iconName = "edit--filled";

export default IconEditFilled;
