import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightAir = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5 10c0-1.861 0-2.792.245-3.545a5 5 0 0 1 3.21-3.21C9.208 3 10.139 3 12 3s2.792 0 3.545.245a5 5 0 0 1 3.21 3.21C19 7.208 19 8.139 19 10s0 2.792-.245 3.545a5 5 0 0 1-3.21 3.21c-.644.21-1.419.24-2.795.244v4.251a.75.75 0 0 1-1.5 0V17c-1.376-.005-2.15-.035-2.795-.245a5 5 0 0 1-3.21-3.21C5 12.792 5 11.861 5 10m7 5.5c-1.978 0-2.611-.018-3.082-.171a3.5 3.5 0 0 1-2.247-2.247C6.52 12.612 6.5 11.978 6.5 10s.019-2.611.171-3.082a3.5 3.5 0 0 1 2.247-2.247C9.388 4.52 10.022 4.5 12 4.5s2.611.019 3.082.171a3.5 3.5 0 0 1 2.247 2.247c.152.47.171 1.104.171 3.082s-.018 2.611-.171 3.082a3.5 3.5 0 0 1-2.247 2.247c-.47.152-1.104.171-3.082.171"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyLightAir.iconName = "key-light-air";

export default IconKeyLightAir;
