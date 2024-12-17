import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoGoogle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.827 7.473C14.782 6.49 13.473 5.982 12 5.982c-2.6 0-4.81 1.754-5.6 4.118a6 6 0 0 0-.318 1.9c0 .664.118 1.3.318 1.9l-.012.01H6.4c.79 2.363 3 4.117 5.6 4.117 1.345 0 2.482-.363 3.373-.963a4.6 4.6 0 0 0 2.009-3.01H12v-3.872h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.355C16.964 21.109 14.7 22 12 22c-3.91 0-7.282-2.245-8.927-5.51v-.008A9.9 9.9 0 0 1 2 12c0-1.618.39-3.136 1.073-4.482C4.718 4.245 8.09 2 12 2c2.7 0 4.955.99 6.69 2.61z" />
		</svg>
	);
};

IconLogoGoogle.iconName = "logo-google";

export default IconLogoGoogle;
