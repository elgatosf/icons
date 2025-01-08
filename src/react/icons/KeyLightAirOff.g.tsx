import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightAirOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 20.72a.75.75 0 1 0 1.06 1.06l5.063-5.062.112.037c.644.21 1.419.24 2.795.244v4.251a.75.75 0 0 0 1.5 0V17c1.376-.005 2.15-.035 2.795-.245a5 5 0 0 0 3.21-3.21C19 12.792 19 11.861 19 10s0-2.792-.245-3.545l-.037-.112L21.78 3.28a.75.75 0 0 0-1.06-1.06zM12 15.5c-1.21 0-1.918-.007-2.392-.047l7.845-7.845c.04.474.047 1.181.047 2.392 0 1.978-.018 2.611-.171 3.082a3.5 3.5 0 0 1-2.247 2.247c-.47.152-1.104.171-3.082.171"
				clipRule="evenodd"
			/>
			<path d="m5.924 14.897 1.083-1.083a3.5 3.5 0 0 1-.336-.732C6.52 12.612 6.5 11.978 6.5 10s.019-2.611.171-3.082a3.5 3.5 0 0 1 2.247-2.247C9.388 4.52 10.022 4.5 12 4.5s2.611.019 3.082.171q.39.128.732.336l1.082-1.083a5 5 0 0 0-1.35-.68C14.791 3 13.86 3 12 3s-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21C5 7.208 5 8.139 5 10s0 2.792.245 3.545c.158.489.389.943.68 1.351" />
		</svg>
	);
};

IconKeyLightAirOff.iconName = "key-light-air-off";

export default IconKeyLightAirOff;
