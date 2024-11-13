/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconSettings = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M10.115 3.332c.63-1.773 3.139-1.773 3.77 0l.045.129a2 2 0 0 0 2.743 1.136l.123-.059c1.7-.808 3.473.966 2.665 2.665l-.058.124a2 2 0 0 0 1.136 2.743l.128.045c1.774.63 1.774 3.139 0 3.77l-.128.045a2 2 0 0 0-1.136 2.743l.058.123c.808 1.7-.965 3.473-2.665 2.665l-.123-.058a2 2 0 0 0-2.743 1.136l-.046.128c-.63 1.774-3.138 1.774-3.769 0l-.045-.128a2 2 0 0 0-2.743-1.136l-.124.058c-1.7.808-3.473-.965-2.665-2.665l.059-.123A2 2 0 0 0 3.46 13.93l-.129-.046c-1.773-.63-1.773-3.138 0-3.769l.129-.045a2 2 0 0 0 1.136-2.743l-.059-.124c-.808-1.7.966-3.473 2.665-2.665l.124.059A2 2 0 0 0 10.07 3.46zm2.356.503.046.128a3.5 3.5 0 0 0 4.8 1.989l.123-.059a.5.5 0 0 1 .666.666l-.058.124a3.5 3.5 0 0 0 1.988 4.8l.129.046a.5.5 0 0 1 0 .942l-.129.046a3.5 3.5 0 0 0-1.988 4.8l.059.123a.5.5 0 0 1-.667.666l-.123-.058a3.5 3.5 0 0 0-4.8 1.988l-.046.129a.5.5 0 0 1-.942 0l-.046-.129a3.5 3.5 0 0 0-4.8-1.988l-.124.059a.5.5 0 0 1-.666-.667l.059-.123a3.5 3.5 0 0 0-1.989-4.8l-.128-.046a.5.5 0 0 1 0-.942l.128-.046a3.5 3.5 0 0 0 1.989-4.8l-.059-.124a.5.5 0 0 1 .666-.666l.124.059a3.5 3.5 0 0 0 4.8-1.989l.046-.128a.5.5 0 0 1 .942 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconSettings.iconName = "settings";

export default IconSettings;
