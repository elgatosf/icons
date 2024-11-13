/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const Icon4kcuApp = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M10.185 14.185h.828v-1.042h-.828V8.045H8.01l-1.9 4.877v1.263h2.55V16h1.525zm-1.45-5.081v4.05H7.264z"
				clipRule="evenodd"
			/>
			<path d="M15.643 16h1.906l-2.191-4.42 2.057-3.535h-1.88l-1.826 3.62zm-3.642 0h1.665V8.045h-1.665z" />
			<path
				fillRule="evenodd"
				d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-1.5 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

Icon4kcuApp.iconName = "4kcu-app";

export default Icon4kcuApp;
