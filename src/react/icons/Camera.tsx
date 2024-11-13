/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCamera = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 8a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M15.297 3.445 17 6h3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3l1.703-2.555A1 1 0 0 1 9.535 3h4.93a1 1 0 0 1 .832.445M7 7.5a1.5 1.5 0 0 0 1.248-.668L9.803 4.5h4.394l1.555 2.332A1.5 1.5 0 0 0 17 7.5h3a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V8a.5.5 0 0 1 .5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCamera.iconName = "camera";

export default IconCamera;
