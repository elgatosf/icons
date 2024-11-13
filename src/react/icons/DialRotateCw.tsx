/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconDialRotateCw = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M18.5 3A.75.75 0 0 1 20 3v4.17a.75.75 0 0 1-1.28.53l-.71-.71a8.503 8.503 0 0 0-12.02 0 .75.75 0 0 1-1.061-1.061A10 10 0 0 1 18.5 5.4z" />
			<path
				fillRule="evenodd"
				d="M12 20a7 7 0 1 1 0-14 7 7 0 0 1 0 14m0-1.5a5.5 5.5 0 1 1 3.323-9.883L12.22 11.72a.75.75 0 1 0 1.06 1.06l3.103-3.103A5.5 5.5 0 0 1 12 18.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconDialRotateCw.iconName = "dial-rotate-cw";

export default IconDialRotateCw;
