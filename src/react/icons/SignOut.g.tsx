import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSignOut = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7.755 7a.75.75 0 0 1-.75-.75V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-1.25a.75.75 0 0 1 1.5 0V19a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-.75.75" />
					<path d="M6.536 9.28a.75.75 0 1 0-1.061-1.06L2.22 11.475a.75.75 0 0 0 0 1.06l3.255 3.256a.75.75 0 0 0 1.06-1.06l-1.98-1.981h9.695a.75.75 0 0 0 0-1.5H4.566z" />
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
					<path d="M7 5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-.5a.5.5 0 0 0-1 0v.5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v.5a.5.5 0 0 0 1 0z" />
					<path d="M4.646 7.146a.5.5 0 1 1 .708.708L3.707 9.5H12.5a.5.5 0 0 1 0 1H3.707l1.647 1.646a.5.5 0 0 1-.708.708l-2.5-2.5a.5.5 0 0 1 0-.708z" />
				</svg>
			);
	}
};

IconSignOut.iconName = "sign-out";

export default IconSignOut;
