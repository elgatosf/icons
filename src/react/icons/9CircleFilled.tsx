/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const Icon9CircleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M13.287 10.467c0-.869-.517-1.485-1.364-1.485-.924 0-1.397.594-1.397 1.485 0 .858.495 1.518 1.342 1.518.87 0 1.42-.605 1.42-1.518Z" />
			<path
				fillRule="evenodd"
				d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm9.981 8.853c0 2.255-.627 4.301-3.179 4.301-1.705 0-2.805-.77-2.805-2.112h1.65c.033.407.187.913 1.155.913 1.507 0 1.584-1.76 1.606-2.882-.429.682-.957.98-1.892.98-1.452 0-2.53-1.002-2.53-2.542 0-1.66 1.287-2.662 2.915-2.662 2.41 0 3.08 1.848 3.08 4.004"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default Icon9CircleFilled;
