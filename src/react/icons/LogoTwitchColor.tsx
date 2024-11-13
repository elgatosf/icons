/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoTwitchColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path fill="#fff" d="m19.5 11.75-3 3h-3l-2.625 2.625V14.75H7.5V3.5h12z" />
			<path fill="#9146FF" d="M17.25 6.125h-1.5v4.5h1.5zM11.625 6.125h1.5v4.5h-1.5z" />
			<path
				fill="#9146FF"
				fillRule="evenodd"
				d="M6.75 2 3 5.75v13.5h4.5V23l3.75-3.75h3L21 12.5V2zm12.75 9.75-3 3h-3l-2.625 2.625V14.75H7.5V3.5h12z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoTwitchColor.iconName = "logo-twitch--color";

export default IconLogoTwitchColor;
