/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconChapterSetFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14 3.75a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m0 5.5a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m-11 5.5a.75.75 0 0 1 .75-.75h8.272a6.5 6.5 0 0 0-.709 1.5H3.75a.75.75 0 0 1-.75-.75m8.845 5.957a6.5 6.5 0 0 1-.53-1.204l-.065-.003h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 .595-.293M3 5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m2-8a.5.5 0 0 1 .5.5v2.828a.5.5 0 1 1-1 0v-1.62l-3.147 3.146a.5.5 0 1 1-.707-.707L18.293 16h-1.621a.5.5 0 0 1 0-1z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconChapterSetFilled;
