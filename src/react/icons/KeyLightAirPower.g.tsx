import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightAirPower = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M18.755 13.545c.07-.213.12-.44.155-.698a6.5 6.5 0 0 1-1.556.151l-.025.084a3.5 3.5 0 0 1-2.247 2.247c-.47.152-1.104.171-3.082.171s-2.611-.018-3.082-.171a3.5 3.5 0 0 1-2.247-2.247C6.52 12.612 6.5 11.978 6.5 10s.019-2.611.171-3.082a3.5 3.5 0 0 1 2.247-2.247c.411-.133.947-.164 2.395-.17A6.5 6.5 0 0 1 12.022 3H12c-1.861 0-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21C5 7.208 5 8.139 5 10s0 2.792.245 3.545a5 5 0 0 0 3.21 3.21c.644.21 1.419.24 2.795.244v4.251a.75.75 0 0 0 1.5 0V17c1.376-.005 2.15-.035 2.795-.245a5 5 0 0 0 3.21-3.21" />
		</svg>
	);
};

IconKeyLightAirPower.iconName = "key-light-air-power";

export default IconKeyLightAirPower;
