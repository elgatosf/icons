import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGooglePhotosColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#FBBC04" d="M6.498 6.546a5 5 0 0 1 5 5V12H1.952a.454.454 0 0 1-.454-.454 5 5 0 0 1 5-5" />
			<path fill="#EA4335" d="M16.952 7a5 5 0 0 1-5 5h-.454V2.454c0-.25.203-.454.454-.454a5 5 0 0 1 5 5" />
			<path fill="#4285F4" d="M16.498 17.454a5 5 0 0 1-5-5V12h9.546c.25 0 .454.204.454.454a5 5 0 0 1-5 5" />
			<path fill="#34A853" d="M6.044 17a5 5 0 0 1 5-5h.454v9.546c0 .25-.203.454-.454.454a5 5 0 0 1-5-5" />
		</svg>
	);
};

IconLogoGooglePhotosColor.iconName = "logo-google-photos--color";

export default IconLogoGooglePhotosColor;
