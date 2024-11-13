/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const Icon2Circle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.03 16h5.742v-1.21h-3.817c.208-.184.45-.384.707-.598 1.314-1.09 3.066-2.541 3.066-4.132 0-1.518-1.375-2.21-2.684-2.21-1.463 0-2.849.67-2.882 2.397h1.661c.022-.737.43-1.232 1.144-1.232.638 0 1.067.43 1.067 1.111 0 1.403-2.571 3.433-3.78 4.389q-.123.095-.224.176v1.31Z" />
			<path
				fillRule="evenodd"
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h14a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Icon2Circle.iconName = "2-circle";

export default Icon2Circle;
