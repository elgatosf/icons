import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoLovable = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8.366 2.857a5.367 5.367 0 0 1 5.365 5.367v2.04h1.786a5.367 5.367 0 0 1 5.366 5.368A5.367 5.367 0 0 1 15.517 21H3V8.224a5.367 5.367 0 0 1 5.366-5.367"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconLogoLovable.iconName = "logo-lovable";

export default IconLogoLovable;
