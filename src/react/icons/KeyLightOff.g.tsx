import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLightOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-.921.922c.281.288.52.619.705.982C22 6.04 22 7.16 22 9.4v1.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C18.96 17 17.84 17 15.6 17h-2.85v4.25a.75.75 0 0 1-1.5 0V17H8.06l-4.78 4.78a.75.75 0 0 1-1.06 0m7.34-6.28h6.04c1.145 0 1.913-.001 2.505-.05.574-.046.849-.13 1.03-.223a2.5 2.5 0 0 0 1.092-1.092c.093-.181.177-.456.224-1.03.048-.592.049-1.36.049-2.505V9.4c0-1.145-.001-1.913-.05-2.505-.046-.574-.13-.849-.223-1.03a2.5 2.5 0 0 0-.43-.602z"
				clipRule="evenodd"
			/>
			<path d="m4.233 16.588 1.193-1.193a1.9 1.9 0 0 1-.561-.168 2.5 2.5 0 0 1-1.093-1.092c-.092-.181-.176-.456-.222-1.03-.049-.592-.05-1.36-.05-2.505V9.4c0-1.145.001-1.913.05-2.505.046-.574.13-.849.222-1.03a2.5 2.5 0 0 1 1.093-1.093c.181-.092.456-.176 1.03-.222.592-.049 1.36-.05 2.505-.05h7.92l1.474-1.473C17.204 3 16.49 3 15.6 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v1.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.797 1.772" />
		</svg>
	);
};

IconKeyLightOff.iconName = "key-light-off";

export default IconKeyLightOff;
