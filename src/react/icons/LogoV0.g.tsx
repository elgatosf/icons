import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoV0 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path
				fillRule="evenodd"
				d="M14.067 8.563h5.156q.122 0 .24.016l-5.383 5.383a2 2 0 0 1-.018-.243V8.563H12v5.156a3.78 3.78 0 0 0 3.781 3.781h5.156v-2.062h-5.156q-.124 0-.243-.018l5.386-5.386q.018.12.018.247v5.156h2.062v-5.156a3.78 3.78 0 0 0-3.78-3.781h-5.157zM1 7.875v.006l7.047 8.974c.847 1.078 2.58.48 2.58-.892V7.875H8.564v6.298L3.618 7.875z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoV0.iconName = "logo-v0";

export default IconLogoV0;
