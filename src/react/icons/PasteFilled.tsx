/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPasteFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.063 3A2 2 0 0 1 8 1.5h3A2 2 0 0 1 12.937 3h1.313c.966 0 1.75.784 1.75 1.75V6.5h-6A3.5 3.5 0 0 0 6.5 10v6H4.75A1.75 1.75 0 0 1 3 14.25V5a2 2 0 0 1 2-2zM8 3h3a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5A.5.5 0 0 1 8 3"
				clipRule="evenodd"
			/>
			<path d="M8 10a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2z" />
		</svg>
	);
};

IconPasteFilled.iconName = "paste--filled";

export default IconPasteFilled;
