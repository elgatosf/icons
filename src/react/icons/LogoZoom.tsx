/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoZoom = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M12.888 11.035a.965.965 0 1 1 0 1.93.965.965 0 0 1 0-1.93m-3.4 0a.965.965 0 1 1 0 1.93.965.965 0 0 1 0-1.93" />
			<path
				fillRule="evenodd"
				d="M21.75 15.14a19.8 19.8 0 0 0 0-6.28 8 8 0 0 0-6.61-6.61 19.8 19.8 0 0 0-6.28 0 8 8 0 0 0-6.61 6.61 19.8 19.8 0 0 0 0 6.28 8 8 0 0 0 6.61 6.61 19.8 19.8 0 0 0 6.28 0 8 8 0 0 0 6.61-6.61M5.492 13.531h2.48a.613.613 0 0 0-.612-.612H5.935L7.654 11.2a.428.428 0 0 0-.304-.731H5.063c0 .338.274.612.612.612h1.232L5.189 12.8a.428.428 0 0 0 .303.732Zm12.25-3.108c.66 0 1.195.535 1.195 1.194v1.914a.613.613 0 0 1-.612-.612v-1.302a.583.583 0 0 0-1.164 0v1.914a.613.613 0 0 1-.613-.612v-1.302a.583.583 0 0 0-1.164 0v1.302a.61.61 0 0 1-.612.612v-1.914a1.196 1.196 0 0 1 2.083-.798 1.2 1.2 0 0 1 .888-.396Zm-4.854 3.154a1.577 1.577 0 1 0 0-3.154 1.577 1.577 0 0 0 0 3.154m-3.4 0a1.577 1.577 0 1 0 0-3.154 1.577 1.577 0 0 0 0 3.154"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoZoom.iconName = "logo-zoom";

export default IconLogoZoom;
