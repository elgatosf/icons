/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconBluetooth = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11.445 2.315a.75.75 0 0 1 .807.128l5 4.5a.75.75 0 0 1 0 1.114L12.872 12l4.38 3.943a.75.75 0 0 1 0 1.115l-5 4.5A.75.75 0 0 1 11 21v-7.316l-3.748 3.374a.75.75 0 1 1-1.004-1.115L10.628 12l-4.38-3.943a.75.75 0 1 1 1.004-1.114L11 10.316V3a.75.75 0 0 1 .445-.685M12.5 13.684l3.129 2.816-3.129 2.816zm0-3.368V4.684L15.629 7.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default IconBluetooth;
