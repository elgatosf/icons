import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightPowerFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.4 3h3.622a6.5 6.5 0 0 0-.709 1.5H8.4c-1.145 0-1.913.001-2.505.05-.574.046-.849.13-1.03.222a2.5 2.5 0 0 0-1.093 1.093c-.092.181-.176.456-.222 1.03-.049.592-.05 1.36-.05 2.505v1.2c0 1.145.001 1.913.05 2.505.046.574.13.849.222 1.03a2.5 2.5 0 0 0 1.093 1.092c.181.093.456.177 1.03.223.592.049 1.36.05 2.505.05h7.2c1.145 0 1.913-.001 2.505-.05.574-.046.849-.13 1.03-.223a2.5 2.5 0 0 0 1.092-1.092c.093-.181.177-.456.224-1.03.02-.243.031-.516.038-.832A6.5 6.5 0 0 0 22 11.191c-.003 1.853-.04 2.848-.435 3.625a4 4 0 0 1-1.748 1.748C18.96 17 17.84 17 15.6 17h-2.85v4.25a.75.75 0 0 1-1.5 0V17H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 13.96 2 12.84 2 10.6V9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 3 6.16 3 8.4 3" />
			<path d="M17.5 13c.515 0 1.017-.06 1.497-.173-.006.292-.029.476-.106.627a1 1 0 0 1-.437.437C18.24 14 17.96 14 17.4 14H6.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C5 13.24 5 12.96 5 12.4V7.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C5.76 6 6.04 6 6.6 6h4.419a6.5 6.5 0 0 0 6.481 7" />
		</svg>
	);
};

IconKeyLightPowerFilled.iconName = "key-light-power--filled";

export default IconKeyLightPowerFilled;
