import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightAirFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.218 7.092C8 7.52 8 8.08 8 9.2v1.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C9.52 14 10.08 14 11.2 14h1.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C16 12.48 16 11.92 16 10.8V9.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 6 13.92 6 12.8 6h-1.6c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874" />
			<path
				fillRule="evenodd"
				d="M5.245 6.455C5 7.208 5 8.139 5 10s0 2.792.245 3.545a5 5 0 0 0 3.21 3.21c.644.21 1.419.24 2.795.244v4.251a.75.75 0 0 0 1.5 0V17c1.376-.005 2.15-.035 2.795-.245a5 5 0 0 0 3.21-3.21C19 12.792 19 11.861 19 10s0-2.792-.245-3.545a5 5 0 0 0-3.21-3.21C14.792 3 13.861 3 12 3s-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21m3.673 8.874c.47.152 1.104.171 3.082.171s2.611-.018 3.082-.171a3.5 3.5 0 0 0 2.247-2.247c.152-.47.171-1.104.171-3.082s-.018-2.611-.171-3.082a3.5 3.5 0 0 0-2.247-2.247C14.612 4.52 13.978 4.5 12 4.5s-2.611.019-3.082.171a3.5 3.5 0 0 0-2.247 2.247C6.52 7.388 6.5 8.022 6.5 10s.019 2.611.171 3.082a3.5 3.5 0 0 0 2.247 2.247"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyLightAirFilled.iconName = "key-light-air--filled";

export default IconKeyLightAirFilled;
