import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconSignIn = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M7 6.25a.75.75 0 1 0 1.5 0V5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H9a.5.5 0 0 1-.5-.5v-1.25a.75.75 0 0 0-1.5 0V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2z" />
					<path d="M10.47 8.22a.75.75 0 0 0 0 1.06l1.97 1.97H2.75a.75.75 0 0 0 0 1.5h9.7l-1.98 1.98a.75.75 0 1 0 1.06 1.06l3.256-3.254a.75.75 0 0 0 0-1.061L11.53 8.22a.75.75 0 0 0-1.06 0" />
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
					<path d="M10.354 7.146a.5.5 0 0 0-.708.708L11.293 9.5H2.5a.5.5 0 0 0 0 1h8.793l-1.647 1.646a.5.5 0 0 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708z" />
				</svg>
			);
	}
};

IconSignIn.iconName = "sign-in";

export default IconSignIn;
