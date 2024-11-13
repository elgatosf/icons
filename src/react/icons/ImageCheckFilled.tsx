/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconImageCheckFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7.022a6.5 6.5 0 0 0-1.5-.709V5a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v9.44l3.97-3.97a.75.75 0 0 1 1.06 0l2.928 2.927A6.47 6.47 0 0 0 11 17.5a6.47 6.47 0 0 0 1.022 3.5H5a2 2 0 0 1-2-2z" />
			<path d="M15.5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2.854-6.646a.5.5 0 0 0-.708-.708L16.5 18.793l-1.646-1.647a.5.5 0 0 0-.708.708l2 2a.5.5 0 0 0 .708 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconImageCheckFilled;
