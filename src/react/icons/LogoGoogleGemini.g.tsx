import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogleGemini = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M19.833 10.94a12.9 12.9 0 0 1-4.045-2.728 12.84 12.84 0 0 1-3.344-5.865.457.457 0 0 0-.887 0q-.236.934-.616 1.82a12.9 12.9 0 0 1-2.73 4.045 12.84 12.84 0 0 1-5.864 3.345.457.457 0 0 0 0 .886q.934.236 1.82.616 2.31.995 4.045 2.73a12.8 12.8 0 0 1 3.345 5.864.458.458 0 0 0 .887 0q.235-.934.615-1.82a12.9 12.9 0 0 1 2.73-4.045 12.84 12.84 0 0 1 5.864-3.345.458.458 0 0 0 0-.886 12 12 0 0 1-1.82-.616" />
		</svg>
	);
};

IconLogoGoogleGemini.iconName = "logo-google-gemini";

export default IconLogoGoogleGemini;
