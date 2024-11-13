/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoReddit = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M8.92 11.646c-.654 0-1.217.65-1.256 1.497s.534 1.191 1.188 1.191c.655 0 1.143-.307 1.182-1.154.04-.847-.46-1.534-1.114-1.534m7.426 1.497c-.038-.847-.6-1.497-1.255-1.497s-1.154.687-1.115 1.534.528 1.154 1.182 1.154 1.227-.344 1.188-1.191m-1.88 2.213a.185.185 0 0 0-.153-.254 23 23 0 0 0-2.308-.112c-.812 0-1.59.04-2.308.112a.185.185 0 0 0-.153.254 2.667 2.667 0 0 0 4.922 0" />
			<path
				fillRule="evenodd"
				d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10H3.448a.6.6 0 0 1-.424-1.024L4.93 19.07A9.97 9.97 0 0 1 2 12m13.656-4.002a1.67 1.67 0 0 1-1.622-1.282v.001a1.97 1.97 0 0 0-1.693 1.951v.006c1.48.056 2.833.473 3.905 1.136a2.335 2.335 0 1 1 2.424 3.96c-.074 2.714-3.032 4.897-6.665 4.897s-6.588-2.18-6.665-4.891a2.334 2.334 0 1 1 2.418-3.963c1.062-.658 2.4-1.075 3.866-1.137v-.009a2.69 2.69 0 0 1 2.4-2.672 1.667 1.667 0 1 1 1.632 2.003"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoReddit.iconName = "logo-reddit";

export default IconLogoReddit;
