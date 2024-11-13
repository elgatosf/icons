/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconReceipt = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.75 6a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM7 9.75A.75.75 0 0 1 7.75 9h3.5a.75.75 0 0 1 0 1.5h-3.5A.75.75 0 0 1 7 9.75M7.75 12a.75.75 0 0 0 0 1.5h3.5a.75.75 0 0 0 0-1.5zm5.75-2.25a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z" />
			<path
				fillRule="evenodd"
				d="M6 2a2 2 0 0 0-2 2v17.25a.75.75 0 0 0 1.29.521l1.877-1.942 1.877 1.942a.75.75 0 0 0 1.079 0L12 19.83l1.877 1.942a.75.75 0 0 0 1.079 0l1.877-1.942 1.878 1.942A.75.75 0 0 0 20 21.25V4a2 2 0 0 0-2-2zm-.5 2a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 .5.5v15.395l-1.127-1.166a.75.75 0 0 0-1.079 0l-1.877 1.942-1.878-1.942a.75.75 0 0 0-1.078 0L9.583 20.17l-1.877-1.942a.75.75 0 0 0-1.079 0L5.5 19.395z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconReceipt;
