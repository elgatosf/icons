/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconBrightnessSetFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.75 2.75a.75.75 0 0 0-1.5 0V5a.75.75 0 0 0 1.5 0zm6.321 3.24a.75.75 0 0 0-1.06-1.061l-1.592 1.59a.75.75 0 1 0 1.061 1.062zM4.929 18.01a.75.75 0 0 0 1.06 1.061l1.592-1.59a.75.75 0 1 0-1.061-1.062zM2.75 11.25a.75.75 0 0 0 0 1.5H5a.75.75 0 0 0 0-1.5zm3.24-6.321a.75.75 0 0 0-1.061 1.06l1.59 1.592A.75.75 0 0 0 7.582 6.52zM7 12a5 5 0 0 0 4.027 4.905 6.5 6.5 0 0 1 5.878-5.878A5.002 5.002 0 0 0 7 12" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M19.5 15a.5.5 0 0 1 .5.5v2.828a.5.5 0 0 1-1 0v-1.621l-3.146 3.147a.5.5 0 1 1-.708-.707L18.293 16h-1.621a.5.5 0 1 1 0-1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconBrightnessSetFilled;
