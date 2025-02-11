import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAnnounceFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
			<path d="M3.311 7.02A2 2 0 0 0 2 8.896v1.206a2 2 0 0 0 1.311 1.878l11 4.033A2 2 0 0 0 17 14.137V4.864a2 2 0 0 0-2.688-1.878zM5.5 15v-1.152l3 1.1V15a1.5 1.5 0 0 1-3 0" />
		</svg>
	);
};

IconAnnounceFilled.iconName = "announce--filled";

export default IconAnnounceFilled;
