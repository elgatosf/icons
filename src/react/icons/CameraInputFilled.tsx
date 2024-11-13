/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraInputFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8.703 3.445 7 6H4a2 2 0 0 0-2 2v4.25h5.379l-1.47-1.47a.75.75 0 1 1 1.06-1.06l2.75 2.75a.75.75 0 0 1 0 1.06l-2.75 2.75a.75.75 0 0 1-1.06-1.06l1.47-1.47H2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3l-1.703-2.555A1 1 0 0 0 14.465 3h-4.93a1 1 0 0 0-.832.445M10.25 9.97a3.5 3.5 0 1 1 0 6.062.75.75 0 0 0-.75 1.3 5 5 0 1 0 0-8.661.75.75 0 1 0 .75 1.299"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCameraInputFilled.iconName = "camera-input--filled";

export default IconCameraInputFilled;
