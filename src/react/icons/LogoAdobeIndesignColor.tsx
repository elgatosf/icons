/**
 * Auto-generated file, do not edit.
 * To update the file, run the "build:react" script.
 */

import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeIndesignColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fill="#49021F"
				d="M6.039 3h11.923a3.267 3.267 0 0 1 3.27 3.27v11.46a3.267 3.267 0 0 1-3.27 3.27H6.039a3.266 3.266 0 0 1-3.27-3.27V6.27A3.266 3.266 0 0 1 6.04 3"
			/>
			<path
				fill="#F36"
				d="M9.477 7.708v7.923q-.002.124-.108.123H7.862c-.07 0-.1-.039-.1-.123V7.708c0-.07.038-.1.107-.1h1.5a.087.087 0 0 1 .1.076q.01.012.008.024M13.923 15.846a3.8 3.8 0 0 1-1.654-.346 2.7 2.7 0 0 1-1.161-1.046c-.285-.47-.423-1.054-.423-1.754a3.16 3.16 0 0 1 1.646-2.816c.538-.3 1.185-.446 1.946-.446q.058-.002.162.008c.069.008.146.008.238.015v-2.43c0-.054.023-.085.077-.085h1.562c.038-.008.069.023.076.054v7.338c0 .139.008.293.016.462.015.161.023.315.03.446 0 .054-.022.1-.076.123-.4.17-.823.292-1.254.37-.385.069-.785.107-1.185.107m.754-1.538v-3.385q-.104-.024-.208-.039a3 3 0 0 0-.253-.015c-.3 0-.6.062-.87.2-.261.13-.484.323-.653.57-.17.245-.254.576-.254.976-.008.27.038.539.13.793.077.207.193.392.346.546.147.138.324.246.524.307.207.07.423.1.638.1q.173-.002.323-.015c.1.008.192-.008.277-.038"
			/>
		</svg>
	);
};

IconLogoAdobeIndesignColor.iconName = "logo-adobe-indesign--color";

export default IconLogoAdobeIndesignColor;
