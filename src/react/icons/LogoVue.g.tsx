import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoVue = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1.25 3H10.1588L11.9997 6.17993L13.841 3H22.7495L11.9997 21.6193L1.25 3ZM5.86881 3.55851L11.9997 14.1713L18.1275 3.55851H14.1592L11.9997 7.29945L9.8411 3.55851H5.86881Z"
			/>
		</svg>
	);
};

IconLogoVue.iconName = "logo-vue";

export default IconLogoVue;
