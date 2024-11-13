/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconRotate = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M6.499 4a.75.75 0 1 0-1.5 0v4.25c0 .414.336.75.75.75h4.25a.75.75 0 0 0 0-1.5h-2.69a6.5 6.5 0 0 1 9.286-.096.75.75 0 0 0 1.06-1.06A8 8 0 0 0 6.5 6.19V4Zm-1.001 7.982a.75.75 0 0 0-1.5-.002 8 8 0 0 0 .442 2.643.75.75 0 0 0 1.418-.49 6.6 6.6 0 0 1-.36-2.15Zm14.06-2.605a.75.75 0 1 0-1.418.49 6.6 6.6 0 0 1 .36 2.15.75.75 0 1 0 1.5.003 8 8 0 0 0-.442-2.643M7.39 16.585a.75.75 0 0 0-1.062 1.059 8 8 0 0 0 2.181 1.555.75.75 0 0 0 .655-1.349 6.5 6.5 0 0 1-1.774-1.265m11.808-1.095a.75.75 0 1 0-1.349-.655 6.5 6.5 0 0 1-1.265 1.773.75.75 0 0 0 1.058 1.063 8 8 0 0 0 1.556-2.181m-7.216 3.011a.75.75 0 0 0-.003 1.5 8 8 0 0 0 2.643-.442.75.75 0 1 0-.49-1.418 6.6 6.6 0 0 1-2.15.36" />
		</svg>
	);
};

IconRotate.iconName = "rotate";

export default IconRotate;
