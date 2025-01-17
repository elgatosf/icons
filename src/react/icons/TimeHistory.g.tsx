import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTimeHistory = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.5 3a.5.5 0 0 1 .5.5v2.894A7 7 0 1 1 3 10a.5.5 0 0 1 1 0 6 6 0 1 0 .804-3H7.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5" />
					<path d="M10.5 6.5a.5.5 0 0 0-1 0V10a.5.5 0 0 0 .146.354l2.5 2.5a.5.5 0 0 0 .708-.708L10.5 9.793z" />
				</svg>
			);
	}
};

IconTimeHistory.iconName = "time-history";

export default IconTimeHistory;
