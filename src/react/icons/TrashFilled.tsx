/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconTrashFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12 1.25A3.75 3.75 0 0 0 8.25 5h-4.5a.75.75 0 0 0 0 1.5h1.338l.801 13.617A2 2 0 0 0 7.886 22h8.228a2 2 0 0 0 1.997-1.883l.8-13.617h1.339a.75.75 0 0 0 0-1.5h-4.5A3.75 3.75 0 0 0 12 1.25M14.25 5a2.25 2.25 0 0 0-4.5 0zm-4 3a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-1.5 0v-9.5a.75.75 0 0 1 .75-.75m4.25.75a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconTrashFilled;
