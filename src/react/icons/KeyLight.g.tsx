import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyLight = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 3 6.16 3 8.4 3h7.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C22 6.04 22 7.16 22 9.4v1.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C18.96 17 17.84 17 15.6 17h-2.85v4.25a.75.75 0 0 1-1.5 0V17H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 13.96 2 12.84 2 10.6zm6.4-4.9h7.2c1.145 0 1.913.001 2.505.05.574.046.849.13 1.03.222a2.5 2.5 0 0 1 1.092 1.093c.093.181.177.456.224 1.03.048.592.049 1.36.049 2.505v1.2c0 1.145-.001 1.913-.05 2.505-.046.574-.13.849-.223 1.03a2.5 2.5 0 0 1-1.092 1.092c-.181.093-.456.177-1.03.223-.592.049-1.36.05-2.505.05H8.4c-1.145 0-1.913-.001-2.505-.05-.574-.046-.849-.13-1.03-.223a2.5 2.5 0 0 1-1.093-1.092c-.092-.181-.176-.456-.222-1.03-.049-.592-.05-1.36-.05-2.505V9.4c0-1.145.001-1.913.05-2.505.046-.574.13-.849.222-1.03a2.5 2.5 0 0 1 1.093-1.093c.181-.092.456-.176 1.03-.222.592-.049 1.36-.05 2.505-.05"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyLight.iconName = "key-light";

export default IconKeyLight;
