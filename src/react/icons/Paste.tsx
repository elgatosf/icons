/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPaste = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M6.063 3A2 2 0 0 1 8 1.5h3A2 2 0 0 1 12.937 3H14a2 2 0 0 1 2 2v.75a.75.75 0 0 1-1.5 0V5a.5.5 0 0 0-.5-.5h-1.063A2 2 0 0 1 11 6H8a2 2 0 0 1-1.937-1.5H5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h.75a.75.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM8 3h3a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5v-.5A.5.5 0 0 1 8 3"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M10 8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm0 1.5a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPaste.iconName = "paste";

export default IconPaste;
