/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPanelCollapse = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16.78 9.28a.75.75 0 0 0-1.06-1.06l-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06L14.06 12z" />
			<path
				fillRule="evenodd"
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm14 1.5h-9v15h9a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5m-14 0h3.5v15H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconPanelCollapse;
