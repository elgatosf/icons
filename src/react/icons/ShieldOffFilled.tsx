/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconShieldOffFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2.22 21.78a.75.75 0 0 1 0-1.06l18.5-18.5a.75.75 0 1 1 1.06 1.06l-2.67 2.67.861.479c.635.352 1.038 1.025.994 1.75-.496 8.203-6.09 12.194-8.182 13.407a1.55 1.55 0 0 1-1.566 0 17 17 0 0 1-4.223-3.52L3.28 21.78a.75.75 0 0 1-1.06 0m3.006-6.185L16.385 4.436 12.97 2.54a2 2 0 0 0-1.942 0l-7 3.889c-.635.352-1.038 1.025-.994 1.75.183 3.019 1.056 5.467 2.19 7.416Z" />
		</svg>
	);
};

export default IconShieldOffFilled;
