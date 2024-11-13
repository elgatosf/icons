/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconGameFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5.617 5A2 2 0 0 0 3.66 6.58l-1.915 8.938a2.879 2.879 0 0 0 5.118 2.33L9 15h6l2.137 2.849a2.879 2.879 0 0 0 5.117-2.33L20.339 6.58A2 2 0 0 0 18.383 5zM8.75 8.5a.75.75 0 1 0-1.5 0v.75H6.5a.75.75 0 0 0 0 1.5h.75v.75a.75.75 0 0 0 1.5 0v-.75h.75a.75.75 0 0 0 0-1.5h-.75zm7.25 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconGameFilled.iconName = "game--filled";

export default IconGameFilled;
