/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconElementsFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M22 6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" />
			<path
				fillRule="evenodd"
				d="M5.75 7a.75.75 0 0 0-.75.75V15a2 2 0 0 0 2 2h11.25a.75.75 0 0 0 0-1.5H7a.5.5 0 0 1-.5-.5V7.75A.75.75 0 0 0 5.75 7"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M2.75 10a.75.75 0 0 0-.75.75V18a2 2 0 0 0 2 2h11.25a.75.75 0 0 0 0-1.5H4a.5.5 0 0 1-.5-.5v-7.25a.75.75 0 0 0-.75-.75"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconElementsFilled;
