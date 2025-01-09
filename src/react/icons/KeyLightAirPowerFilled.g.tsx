import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightAirPowerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 3h.022a6.5 6.5 0 0 0-.709 1.501c-1.448.006-1.984.037-2.395.17a3.5 3.5 0 0 0-2.247 2.247C6.52 7.388 6.5 8.022 6.5 10s.019 2.611.171 3.082a3.5 3.5 0 0 0 2.247 2.247c.47.152 1.104.171 3.082.171s2.611-.018 3.082-.171a3.5 3.5 0 0 0 2.272-2.33L17.5 13q.727-.002 1.41-.153a4 4 0 0 1-.155.698 5 5 0 0 1-3.21 3.21c-.644.21-1.419.24-2.795.244v4.251a.75.75 0 0 1-1.5 0V17c-1.376-.005-2.15-.035-2.795-.245a5 5 0 0 1-3.21-3.21C5 12.792 5 11.861 5 10s0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C9.208 3 10.139 3 12 3" />
			<path d="M9.092 6.218c.404-.206.926-.217 1.927-.218a6.503 6.503 0 0 0 4.818 6.785 2 2 0 0 1-.93.997c-.427.218-.987.218-2.107.218h-1.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C8 12.48 8 11.92 8 10.8V9.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874" />
		</svg>
	);
};

IconKeyLightAirPowerFilled.iconName = "key-light-air-power--filled";

export default IconKeyLightAirPowerFilled;
