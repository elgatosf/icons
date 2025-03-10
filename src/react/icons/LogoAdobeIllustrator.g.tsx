import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoAdobeIllustrator = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.23 12.208H9.278q.174-.488.338-1.077.114-.36.222-.711l.132-.428c.108-.33.192-.661.261-.992h.016l.091.323q.037.135.078.277c.062.223.13.446.208.684l.111.354q.055.176.112.354.104.348.208.662c.069.2.13.392.176.554" />
			<path
				fillRule="evenodd"
				d="M17.962 3H6.039a3.266 3.266 0 0 0-3.27 3.27v11.46A3.266 3.266 0 0 0 6.04 21h11.923a3.267 3.267 0 0 0 3.27-3.27V6.27A3.267 3.267 0 0 0 17.961 3M8.83 13.77h2.861l.63 1.83c.016.054.07.092.124.085h1.608q.113.002.076-.124l-2.807-7.923q-.01-.059-.1-.061H9.23c-.039.008-.07.046-.062.084q0 .257-.046.5-.032.098-.057.185l-.02.07-2.477 7.13c-.023.092 0 .139.085.139H8.1c.069.007.13-.039.146-.108zm6.33-5.116c.185.177.431.277.685.269a.9.9 0 0 0 .7-.27.97.97 0 0 0 .27-.707.97.97 0 0 0-.255-.685c-.169-.176-.4-.269-.7-.269-.254 0-.5.093-.684.27a.9.9 0 0 0-.277.684 1 1 0 0 0 .261.708m-.177 1.023V15.6c0 .077.039.123.116.123h1.507c.07 0 .1-.039.1-.123V9.677c0-.07-.03-.108-.1-.108h-1.523c-.069 0-.1.03-.1.108"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoAdobeIllustrator.iconName = "logo-adobe-illustrator";

export default IconLogoAdobeIllustrator;
