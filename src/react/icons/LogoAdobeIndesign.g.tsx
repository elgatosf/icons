import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeIndesign = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M14.677 10.923v3.385a.7.7 0 0 1-.277.038q-.15.014-.323.016a2 2 0 0 1-.638-.1 1.3 1.3 0 0 1-.523-.308 1.5 1.5 0 0 1-.347-.546 2.1 2.1 0 0 1-.13-.792c0-.4.084-.731.254-.977.169-.247.392-.439.653-.57.27-.138.57-.2.87-.2q.126.002.254.016c.069.007.138.023.207.038" />
			<path
				fillRule="evenodd"
				d="M6.039 3h11.923a3.267 3.267 0 0 1 3.27 3.27v11.46a3.267 3.267 0 0 1-3.27 3.27H6.039a3.266 3.266 0 0 1-3.27-3.27V6.27A3.266 3.266 0 0 1 6.04 3Zm3.438 4.708v7.923q-.002.124-.108.123H7.862c-.07 0-.1-.039-.1-.123V7.708c0-.07.038-.1.107-.1h1.5a.087.087 0 0 1 .1.077q.01.01.008.023M12.27 15.5a3.8 3.8 0 0 0 1.653.346c.4 0 .8-.038 1.185-.107.43-.077.854-.2 1.254-.37.054-.023.077-.069.077-.123l-.004-.062a10 10 0 0 0-.03-.43 9 9 0 0 1-.012-.415V7c-.008-.03-.039-.061-.077-.054h-1.562c-.054 0-.077.031-.077.085v2.43l-.119-.007-.12-.008q-.103-.009-.16-.007-1.141-.002-1.947.446a3.16 3.16 0 0 0-1.646 2.815c0 .7.138 1.285.423 1.754A2.7 2.7 0 0 0 12.27 15.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAdobeIndesign.iconName = "logo-adobe-indesign";

export default IconLogoAdobeIndesign;
