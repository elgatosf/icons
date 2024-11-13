/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconKeyboardFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M1 6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm7.75 6.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12 13.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m5.75-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M5.375 10a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m5.75-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m3.25 1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m5.5-1.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M5 15.25a.75.75 0 0 0 0 1.5h14a.75.75 0 0 0 0-1.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconKeyboardFilled.iconName = "keyboard--filled";

export default IconKeyboardFilled;
