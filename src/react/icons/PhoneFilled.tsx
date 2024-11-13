/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPhoneFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21 19v-4.134a1.25 1.25 0 0 0-.811-1.17l-2.435-.913a1.25 1.25 0 0 0-1.323.286l-1.452 1.452a13 13 0 0 1-5.5-5.5L10.93 7.57a1.25 1.25 0 0 0 .286-1.323l-.913-2.435A1.25 1.25 0 0 0 9.134 3H5c-1.105 0-2.012.898-1.889 1.996a18 18 0 0 0 15.893 15.893C20.102 21.012 21 20.105 21 19" />
		</svg>
	);
};

export default IconPhoneFilled;
