/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const Icon6Circle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M12.187 16.143c1.606 0 2.882-1.122 2.882-2.838 0-1.595-1.078-2.607-2.464-2.607-.869 0-1.529.32-1.98 1.111.011-1.067.231-2.882 1.562-2.882.627 0 1.045.33 1.045 1.067h1.584c0-1.507-1.177-2.145-2.574-2.145-2.387 0-3.168 2.068-3.168 4.224s.76 4.07 3.113 4.07m.033-4.367c.902 0 1.32.715 1.32 1.595 0 .891-.45 1.617-1.353 1.617-.88 0-1.386-.704-1.386-1.584 0-.869.385-1.628 1.42-1.628Z"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h14a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default Icon6Circle;
