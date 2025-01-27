import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoVue = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M1.25 3h8.909l1.84 3.18L13.842 3h8.909L12 21.62zm4.619.559 6.13 10.612L18.129 3.56h-3.969L12 7.299 9.842 3.56z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoVue.iconName = "logo-vue";

export default IconLogoVue;
