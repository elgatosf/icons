/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconVolumeMixer = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8.75 4a3.75 3.75 0 0 1 3.675 3h8.825a.75.75 0 0 1 0 1.5h-8.825a3.751 3.751 0 0 1-7.35 0H2.75a.75.75 0 0 1 0-1.5h2.325A3.75 3.75 0 0 1 8.75 4m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5"
				clipRule="evenodd"
			/>
			<path d="M2 16.25a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" />
			<path
				fillRule="evenodd"
				d="M18 11.75a.75.75 0 0 0-1.28-.53l-2.28 2.28h-.94A1.5 1.5 0 0 0 12 15v2.5a1.5 1.5 0 0 0 1.5 1.5h.94l2.28 2.28a.75.75 0 0 0 1.28-.53zm-2.72 3.03 1.22-1.22v5.38l-1.22-1.22a.75.75 0 0 0-.53-.22H13.5V15h1.25a.75.75 0 0 0 .53-.22"
				clipRule="evenodd"
			/>
			<path d="M19.255 12.184a.75.75 0 0 1 1.06 0 5.75 5.75 0 0 1 0 8.132.75.75 0 0 1-1.06-1.06 4.25 4.25 0 0 0 0-6.011.75.75 0 0 1 0-1.06Z" />
		</svg>
	);
};

IconVolumeMixer.iconName = "volume-mixer";

export default IconVolumeMixer;
