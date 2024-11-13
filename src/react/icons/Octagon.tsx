/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconOctagon = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M15.107 4H8.893a.5.5 0 0 0-.353.146L4.146 8.54A.5.5 0 0 0 4 8.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V8.893a.5.5 0 0 0-.146-.353L15.46 4.146A.5.5 0 0 0 15.107 4m0-1.5a2 2 0 0 1 1.414.586l4.393 4.393a2 2 0 0 1 .586 1.414v6.214a2 2 0 0 1-.586 1.414l-4.393 4.393a2 2 0 0 1-1.414.586H8.893a2 2 0 0 1-1.414-.586l-4.393-4.393a2 2 0 0 1-.586-1.414V8.893a2 2 0 0 1 .586-1.414l4.393-4.393A2 2 0 0 1 8.893 2.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconOctagon.iconName = "octagon";

export default IconOctagon;
