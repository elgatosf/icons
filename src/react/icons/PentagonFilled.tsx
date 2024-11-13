/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconPentagonFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10.825 2.358a2 2 0 0 1 2.35 0l7.9 5.738a2 2 0 0 1 .726 2.236l-3.017 9.286A2 2 0 0 1 16.882 21H7.118a2 2 0 0 1-1.902-1.382L2.2 10.333a2 2 0 0 1 .727-2.237l7.899-5.738Z" />
		</svg>
	);
};

export default IconPentagonFilled;
