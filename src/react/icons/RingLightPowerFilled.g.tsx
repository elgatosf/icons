import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconRingLightPowerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.75 17.965a8.01 8.01 0 0 0 6.793-5.292 6.5 6.5 0 0 1-1.772.322 6.5 6.5 0 0 1-1.217 1.643l-2.667-1.54c-.496-.287-.886-.512-1.315-.604a2.75 2.75 0 0 0-1.144 0c-.429.092-.819.317-1.315.605l-2.667 1.54A6.5 6.5 0 0 1 11.73 3.505a6.5 6.5 0 0 1 1.045-1.469 8 8 0 1 0-1.524 15.928v3.285a.75.75 0 0 0 1.5 0z" />
		</svg>
	);
};

IconRingLightPowerFilled.iconName = "ring-light-power--filled";

export default IconRingLightPowerFilled;
