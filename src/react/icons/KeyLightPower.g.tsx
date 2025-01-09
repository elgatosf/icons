import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightPower = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21.564 14.816c.396-.777.432-1.772.436-3.625a6.5 6.5 0 0 1-1.51 1.082c-.008.316-.02.59-.04.832-.046.574-.13.849-.223 1.03a2.5 2.5 0 0 1-1.092 1.092c-.181.093-.456.177-1.03.223-.592.049-1.36.05-2.505.05H8.4c-1.145 0-1.913-.001-2.505-.05-.574-.046-.849-.13-1.03-.223a2.5 2.5 0 0 1-1.093-1.092c-.092-.181-.176-.456-.222-1.03-.049-.592-.05-1.36-.05-2.505V9.4c0-1.145.001-1.913.05-2.505.046-.574.13-.849.222-1.03a2.5 2.5 0 0 1 1.093-1.093c.181-.092.456-.176 1.03-.222.592-.049 1.36-.05 2.505-.05h2.913a6.5 6.5 0 0 1 .709-1.5H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v1.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 17 6.16 17 8.4 17h2.85v4.25a.75.75 0 0 0 1.5 0V17h2.85c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748" />
		</svg>
	);
};

IconKeyLightPower.iconName = "key-light-power";

export default IconKeyLightPower;
