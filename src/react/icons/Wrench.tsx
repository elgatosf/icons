/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconWrench = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4.67 8.205a5 5 0 0 0 5.887 6.184c.783-.169 1.714.003 2.39.68l4.285 4.285a.5.5 0 0 0 .707 0l1.415-1.415a.5.5 0 0 0 0-.707l-4.285-4.285c-.677-.676-.849-1.607-.68-2.39A5 5 0 0 0 8.205 4.67l3.063 3.062a2.5 2.5 0 0 1-3.536 3.536zM3.65 6.663a6.5 6.5 0 0 0 7.221 9.192c.365-.078.752.01 1.016.274l4.285 4.285a2 2 0 0 0 2.828 0L20.414 19a2 2 0 0 0 0-2.828l-4.285-4.285c-.264-.264-.352-.651-.274-1.016A6.5 6.5 0 0 0 6.663 3.65c-.551.268-.606.992-.173 1.426l3.717 3.717a1 1 0 0 1-1.414 1.414L5.076 6.49c-.434-.433-1.158-.378-1.426.173"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconWrench;
