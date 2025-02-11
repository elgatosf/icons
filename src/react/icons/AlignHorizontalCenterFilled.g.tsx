import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignHorizontalCenterFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path d="M12 3a.75.75 0 0 1 .75.75V6H18a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-5.25v2H15a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2.25v2.25a.75.75 0 0 1-1.5 0V18H9a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h2.25v-2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.25V3.75A.75.75 0 0 1 12 3" />
				</svg>
			);
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
					<path d="M10 2a.5.5 0 0 1 .5.5V5h5A1.5 1.5 0 0 1 17 6.5v1A1.5 1.5 0 0 1 15.5 9h-5v2h3a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-3v2.5a.5.5 0 0 1-1 0V15h-3A1.5 1.5 0 0 1 5 13.5v-1A1.5 1.5 0 0 1 6.5 11h3V9h-5A1.5 1.5 0 0 1 3 7.5v-1A1.5 1.5 0 0 1 4.5 5h5V2.5A.5.5 0 0 1 10 2" />
				</svg>
			);
	}
};

IconAlignHorizontalCenterFilled.iconName = "align-horizontal-center--filled";

export default IconAlignHorizontalCenterFilled;
