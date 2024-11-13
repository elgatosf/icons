/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconInbox = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h14a.5.5 0 0 1 .5.5v6H16a2 2 0 0 0-2 2 2 2 0 1 1-4 0 2 2 0 0 0-2-2H4.5V5a.5.5 0 0 1 .5-.5m-.5 8V19a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-6.5H16a.5.5 0 0 0-.5.5 3.5 3.5 0 1 1-7 0 .5.5 0 0 0-.5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconInbox.iconName = "inbox";

export default IconInbox;
