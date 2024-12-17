import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoTiktok = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M18.395 6.009A4.8 4.8 0 0 1 16.216 2h-3.439l-.005 13.78a2.89 2.89 0 0 1-2.885 2.782 2.89 2.89 0 0 1-2.89-2.89 2.894 2.894 0 0 1 2.89-2.891c.297 0 .583.049.853.133v-3.51a6 6 0 0 0-.853-.062 6.336 6.336 0 0 0-6.328 6.33 6.32 6.32 0 0 0 2.701 5.18A6.3 6.3 0 0 0 9.887 22c3.49 0 6.329-2.84 6.329-6.329V8.684c1.348.968 3 1.538 4.784 1.538V6.784c-.96 0-1.855-.286-2.605-.775" />
		</svg>
	);
};

IconLogoTiktok.iconName = "logo-tiktok";

export default IconLogoTiktok;
