import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconRingLightOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-2.803 2.803a8 8 0 0 1-6.227 11.882v3.285a.75.75 0 0 1-1.5 0v-3.285a7.95 7.95 0 0 1-3.167-.988L3.28 21.78a.75.75 0 0 1-1.06 0m6.975-5.915 1.195-1.195.385-.222c.627-.362.8-.451.965-.486a1.25 1.25 0 0 1 .52 0c.166.035.338.124.965.486l2.036 1.176A6.47 6.47 0 0 1 12 16.5a6.5 6.5 0 0 1-2.805-.635m3.372-3.372 5.298-5.298c.407.85.635 1.8.635 2.805a6.48 6.48 0 0 1-1.946 4.638l-2.667-1.54c-.496-.287-.886-.512-1.315-.604z"
				clipRule="evenodd"
			/>
			<path d="m5.784 15.037 1.068-1.068a6.5 6.5 0 0 1 9.117-9.117l1.068-1.068A8 8 0 0 0 5.785 15.036" />
		</svg>
	);
};

IconRingLightOff.iconName = "ring-light-off";

export default IconRingLightOff;
