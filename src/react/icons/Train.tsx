/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconTrain = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M9.75 5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM8 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2m9-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
			<path
				fillRule="evenodd"
				d="M4 6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v11a2 2 0 0 1-2 2h-1.093l1.117 1.935a.75.75 0 0 1-1.299.75L15.175 19h-6.35l-1.55 2.685a.75.75 0 0 1-1.3-.75L7.092 19H6a2 2 0 0 1-2-2zm4-2.5h8A2.5 2.5 0 0 1 18.5 6v5h-13V6A2.5 2.5 0 0 1 8 3.5m-2.5 9h13V17a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconTrain;
