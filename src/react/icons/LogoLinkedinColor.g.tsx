import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoLinkedinColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				fill="#0A66C2"
				d="M19.635 3H4.365C3.682 3 3.085 3.6 3 4.286v15.428C3 20.4 3.597 21 4.365 21h15.27c.683 0 1.28-.6 1.365-1.286V4.286C21 3.6 20.403 3 19.635 3"
			/>
			<path
				fill="#fff"
				d="M5.73 18.343h2.645V9.77H5.73zM5.474 7.029c0 .857.683 1.542 1.536 1.542s1.535-.685 1.535-1.542c0-.858-.682-1.543-1.535-1.543s-1.536.685-1.536 1.543M15.711 18.343h2.645l-.085-4.629c0-2.314-.427-4.114-3.157-4.114-1.024-.086-1.962.514-2.474 1.371v-1.2h-2.56v8.572h2.646v-4.286c0-1.114.255-2.228 1.62-2.228s1.365 1.285 1.365 2.314z"
			/>
		</svg>
	);
};

IconLogoLinkedinColor.iconName = "logo-linkedin--color";

export default IconLogoLinkedinColor;
