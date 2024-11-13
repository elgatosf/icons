/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFlipVerticalFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M17.25 3a.75.75 0 0 1 .53 1.28l-5.25 5.25a.75.75 0 0 1-1.06 0L6.22 4.28A.75.75 0 0 1 6.75 3zM3.5 12.75a.75.75 0 0 1 0-1.5h1a.75.75 0 0 1 0 1.5zM6.75 12c0 .414.336.75.75.75h1a.75.75 0 0 0 0-1.5h-1a.75.75 0 0 0-.75.75m9.75-.75a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5zm4 0a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5zm-7.25.75a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 .75-.75m4.693 8.537a.75.75 0 0 1-.693.463H6.75a.75.75 0 0 1-.53-1.28l5.25-5.25a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 .163.817" />
		</svg>
	);
};

IconFlipVerticalFilled.iconName = "flip-vertical--filled";

export default IconFlipVerticalFilled;
