/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconFlame = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M11.058 2.78a.75.75 0 0 1 .174.892 2.86 2.86 0 0 0-.294 1.269 2.873 2.873 0 0 0 4.539 2.345c.34-.243.627-.558.835-.923a.75.75 0 0 1 1.265-.058A13.4 13.4 0 0 1 20 14.003a8 8 0 1 1-16 0c0-4.737 2.452-8.9 6.152-11.293a.75.75 0 0 1 .906.07M12 20.503l.132-.001a2.5 2.5 0 0 0 2.368-2.497c0-1.255-.692-2.561-1.477-3.617A13 13 0 0 0 12 13.18c-.284.297-.655.712-1.023 1.208-.785 1.056-1.477 2.362-1.477 3.617a2.5 2.5 0 0 0 2.5 2.498m6.5-6.5a6.49 6.49 0 0 1-2.709 5.28c.136-.401.209-.83.209-1.278 0-1.75-.933-3.381-1.773-4.512a14.4 14.4 0 0 0-1.684-1.884l-.033-.029-.009-.008-.003-.002-.001-.002a.75.75 0 0 0-.994 0l-.001.002-.003.002-.01.008-.032.03-.113.105a14.4 14.4 0 0 0-1.57 1.778C8.932 14.623 8 16.256 8 18.005c0 .447.073.877.209 1.278a6.5 6.5 0 0 1-2.709-5.28c0-3.517 1.52-6.679 3.942-8.864a4.372 4.372 0 0 0 7.462 2.897 11.9 11.9 0 0 1 1.596 5.967"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFlame.iconName = "flame";

export default IconFlame;
