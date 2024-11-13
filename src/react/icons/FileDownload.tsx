/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFileDownload = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12 12a.75.75 0 0 1 .75.75v3.439l.97-.97a.75.75 0 1 1 1.06 1.062l-2.25 2.248a.75.75 0 0 1-1.06 0L9.22 16.28a.75.75 0 1 1 1.061-1.06l.968.968V12.75A.75.75 0 0 1 12 12" />
			<path
				fillRule="evenodd"
				d="M20 10.25V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5.75zm-1.5.75H13a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v16a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5zm-1.371-1.5L12.5 4.871V9a.5.5 0 0 0 .5.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconFileDownload;
