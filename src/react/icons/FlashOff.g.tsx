import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFlashOff = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.626 2.101a.75.75 0 0 1 .338.879L14.029 9h5.221a.75.75 0 0 1 .554 1.256l-3.038 3.328-1.062-1.062L17.55 10.5h-3.868l-1.295-1.295 1.095-3.407-2.148 2.354-1.062-1.062 4.424-4.846a.75.75 0 0 1 .93-.143" />
			<path
				fillRule="evenodd"
				d="m14.74 15.801 3.98 3.98a.75.75 0 1 0 1.06-1.061L5.28 4.22a.75.75 0 0 0-1.06 1.06l4.027 4.028-4.05 4.436A.75.75 0 0 0 4.75 15h5.221l-1.935 6.02a.75.75 0 0 0 1.268.736zm-1.06-1.061-4.37-4.37-2.86 3.13H11a.75.75 0 0 1 .714.98l-1.196 3.722 3.16-3.463Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFlashOff.iconName = "flash-off";

export default IconFlashOff;
