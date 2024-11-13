/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckMini = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.75 9.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M7.5 15.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m5.75-5.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M12 15.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5m5.75-5.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0M16.5 15.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5" />
			<path
				fillRule="evenodd"
				d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm16 1.5H4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h16a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconStreamDeckMini;
