/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconEarFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4.977 11.015C3.738 6.475 7.157 2 11.863 2A7.137 7.137 0 0 1 19 9.137v.43a7.57 7.57 0 0 1-2.363 5.494l-1.752 1.66c-.46.437-.784.998-.93 1.616l-.042.18A4.517 4.517 0 0 1 5 17.484V17c0-.94.081-1.712.152-2.379q.04-.37.069-.702a8.1 8.1 0 0 0-.198-2.734zM11.939 5.5c-3.262 0-4.721 4.236-1.972 6.14 1.265.875.645 2.86-.894 2.86H8.5a.75.75 0 0 0 0 1.5h.573c3.01 0 4.222-3.88 1.748-5.594C9.348 9.386 10.066 7 11.939 7c1.134 0 2.06.92 2.06 2.043V9.5a.75.75 0 0 0 1.5 0v-.457c0-1.963-1.61-3.543-3.56-3.543"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconEarFilled;
