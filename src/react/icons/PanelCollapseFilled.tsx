/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPanelCollapseFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M5 3h3.5v18H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2" />
			<path
				fillRule="evenodd"
				d="M19 21h-9V3h9a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2M17.53 9.28a.75.75 0 0 0-1.06-1.06l-3.25 3.25a.75.75 0 0 0 0 1.06l3.25 3.25a.75.75 0 1 0 1.06-1.06L14.81 12z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPanelCollapseFilled.iconName = "panel-collapse--filled";

export default IconPanelCollapseFilled;
