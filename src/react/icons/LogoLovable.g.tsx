import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoLovable = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8.36559 2.85657C11.3289 2.85657 13.7312 5.25981 13.7312 8.22436V10.2645H15.5168C18.4801 10.2645 20.8825 12.6677 20.8825 15.6322C20.8825 18.5967 18.4801 21 15.5168 21H3V8.22436C3 5.25981 5.40226 2.85657 8.36559 2.85657Z"
			/>
		</svg>
	);
};

IconLogoLovable.iconName = "logo-lovable";

export default IconLogoLovable;
