import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconRingLightPower = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M23 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.891-2.333a.5.5 0 0 0-.746.666 2.5 2.5 0 1 1-3.727.002.5.5 0 0 0-.746-.667 3.5 3.5 0 1 0 5.219-.001M17.5 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M12 2q.392 0 .774.037a6.5 6.5 0 0 0-1.045 1.469 6.5 6.5 0 0 0-4.283 11.132l2.667-1.54c.496-.287.886-.512 1.315-.604a2.75 2.75 0 0 1 1.144 0c.429.092.819.317 1.315.605l2.667 1.54a6.5 6.5 0 0 0 1.217-1.644 6.5 6.5 0 0 0 1.772-.322 8.01 8.01 0 0 1-6.793 5.292v3.285a.75.75 0 0 1-1.5 0v-3.285A8 8 0 0 1 12 2m3.261 13.624A6.47 6.47 0 0 1 12 16.5a6.47 6.47 0 0 1-3.261-.876l2.036-1.176c.627-.362.8-.451.965-.486a1.25 1.25 0 0 1 .52 0c.166.035.338.124.965.486z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconRingLightPower.iconName = "ring-light-power";

export default IconRingLightPower;
