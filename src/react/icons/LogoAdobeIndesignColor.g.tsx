import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
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
				d="M6.039 3h11.923a3.266 3.266 0 0 1 3.269 3.27v11.46A3.266 3.266 0 0 1 17.96 21H6.04a3.266 3.266 0 0 1-3.27-3.27V6.27A3.266 3.266 0 0 1 6.04 3"
			/>
			<path
				fill="#F36"
				d="M9.477 7.708v7.923c0 .084-.039.123-.108.123H7.861q-.102.002-.1-.123V7.708c0-.07.039-.1.108-.1h1.5a.087.087 0 0 1 .1.077c.008.007.008.015.008.023M13.923 15.846a3.8 3.8 0 0 1-1.654-.346 2.7 2.7 0 0 1-1.161-1.046q-.426-.705-.424-1.754a3.16 3.16 0 0 1 1.647-2.815q.805-.449 1.946-.447.057-.002.161.008c.07.008.146.008.239.016V7.03q-.002-.083.077-.085h1.561c.039-.008.07.023.077.054v7.339c0 .138.008.292.016.461.015.161.023.315.03.446 0 .054-.023.1-.076.123-.4.17-.824.293-1.254.37a6.7 6.7 0 0 1-1.185.107m.754-1.538v-3.385q-.105-.024-.208-.038a3 3 0 0 0-.254-.016c-.3 0-.6.062-.869.2-.261.131-.485.323-.654.57s-.254.576-.254.976c-.007.27.039.539.131.793.077.207.192.392.346.546.147.138.323.246.523.307.208.07.423.1.639.1q.173-.002.323-.015c.1.008.192-.008.277-.038"
			/>
		</svg>
	);
};

IconLogoAdobeIndesignColor.iconName = "logo-adobe-indesign--color";

export default IconLogoAdobeIndesignColor;
