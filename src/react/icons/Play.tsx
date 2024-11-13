/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPlay = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m7.25 19.361 12-6.928a.5.5 0 0 0 0-.866l-12-6.928a.5.5 0 0 0-.75.433v13.856a.5.5 0 0 0 .75.433M20 13.732c1.333-.77 1.333-2.694 0-3.464L8 3.34c-1.333-.77-3 .192-3 1.732v13.856c0 1.54 1.667 2.502 3 1.732z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconPlay;
