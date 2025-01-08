import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightNeo = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 17c1.386 0 2.663-.47 3.68-1.26l1.04 1.04a.75.75 0 1 0 1.06-1.06l-1.04-1.04A5.97 5.97 0 0 0 18 11c0-1.387-.47-2.663-1.26-3.68l1.04-1.04a.75.75 0 0 0-1.06-1.06l-1.04 1.04A5.97 5.97 0 0 0 12 5c-1.386 0-2.663.47-3.68 1.26L7.28 5.22a.75.75 0 0 0-1.06 1.06l1.04 1.04A5.97 5.97 0 0 0 6 11c0 1.386.47 2.663 1.26 3.68l-1.04 1.04a.75.75 0 1 0 1.06 1.06l1.04-1.04A5.97 5.97 0 0 0 12 17m0-1.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M3.545 4.73C3 5.8 3 7.2 3 10v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.37.188.778.311 1.27.392V21a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1.153c.492-.08.9-.204 1.27-.392a5 5 0 0 0 2.185-2.185C21 16.2 21 14.8 21 12v-2c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C17.2 2 15.8 2 13 2h-2c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 3.545 4.73M13 3.5h-2c-1.425 0-2.403.001-3.162.063-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427C4.501 7.597 4.5 8.575 4.5 10v2c0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063h2c1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.529c.146-.288.257-.686.318-1.427.062-.759.063-1.737.063-3.162v-2c0-1.425-.001-2.403-.063-3.162-.06-.74-.172-1.139-.319-1.427a3.5 3.5 0 0 0-1.529-1.53c-.288-.146-.686-.257-1.427-.318C15.403 3.501 14.425 3.5 13 3.5m2.5 16.476C14.811 20 13.994 20 13 20h-2c-.994 0-1.811 0-2.5-.024V21a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyLightNeo.iconName = "key-light-neo";

export default IconKeyLightNeo;
