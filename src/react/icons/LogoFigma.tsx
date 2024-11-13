/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoFigma = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M5.047 5.742A3.74 3.74 0 0 1 8.789 2h6.42a3.742 3.742 0 0 1 2.053 6.871 3.742 3.742 0 0 1-2.053 6.871h-.08a3.73 3.73 0 0 1-2.517-.972v3.448c0 2.094-1.72 3.782-3.803 3.782-2.061 0-3.762-1.67-3.762-3.742a3.74 3.74 0 0 1 1.689-3.129A3.74 3.74 0 0 1 5.046 12a3.74 3.74 0 0 1 1.69-3.129 3.74 3.74 0 0 1-1.69-3.13Zm6.34 3.742H8.788a2.516 2.516 0 0 0-.016 5.032h2.613V9.484ZM12.611 12a2.516 2.516 0 0 0 2.516 2.516h.081a2.516 2.516 0 0 0 0-5.032h-.08A2.516 2.516 0 0 0 12.611 12m-3.823 3.742h-.016a2.516 2.516 0 0 0-2.5 2.516c0 1.385 1.141 2.516 2.536 2.516 1.417 0 2.577-1.15 2.577-2.556v-2.476H8.79Zm0-12.516h2.597v5.032H8.79a2.516 2.516 0 1 1 0-5.032Zm3.823 5.032V3.226h2.597a2.516 2.516 0 1 1 0 5.032z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconLogoFigma;
