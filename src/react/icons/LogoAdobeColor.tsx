/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fill="#FA0C00"
				d="M9.401 3H2v17.7zM14.608 3H22v17.7zM16.715 20.7l-4.71-11.176-3.236 7.618h3.448l1.408 3.558z"
			/>
		</svg>
	);
};

IconLogoAdobeColor.iconName = "logo-adobe--color";

export default IconLogoAdobeColor;
