import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAuxiliaryAdd = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M3.5 12a8.5 8.5 0 0 0 8.23 8.496c.281.54.636 1.036 1.05 1.474q-.385.03-.78.03C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10q0 .395-.03.78a6.5 6.5 0 0 0-1.474-1.05A8.5 8.5 0 0 0 3.5 12" />
					<path d="M11.027 16.905a6.5 6.5 0 0 1 5.878-5.878A5.002 5.002 0 0 0 7 12a5 5 0 0 0 4.027 4.905" />
					<path
						fillRule="evenodd"
						d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2.5a.5.5 0 0 1 0 1H18v2.5a.5.5 0 0 1-1 0V18h-2.5a.5.5 0 1 1 0-1H17v-2.5a.5.5 0 0 1 .5-.5"
						clipRule="evenodd"
					/>
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
					<path d="M18 10q0 .128-.004.254a5.5 5.5 0 0 0-1.008-.66 7 7 0 1 0-7.394 7.394q.276.543.66 1.008A8 8 0 1 1 18 10" />
					<path d="M10 6a4 4 0 0 1 3.883 3.034 5.5 5.5 0 0 0-4.849 4.849A4.002 4.002 0 0 1 10 6" />
					<path
						fillRule="evenodd"
						d="M14.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9m.5-7a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0v-2h2a.5.5 0 0 0 0-1h-2z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAuxiliaryAdd.iconName = "auxiliary-add";

export default IconAuxiliaryAdd;
