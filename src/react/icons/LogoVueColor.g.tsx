import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoVueColor = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path fill="#41B883" d="M14.482 3 12 7.3 9.517 3H1.25L12 21.62 22.75 3z" />
			<path fill="#34495E" d="M14.481 3 12 7.3 9.516 3H5.55l6.45 11.171L18.449 3z" />
		</svg>
	);
};

IconLogoVueColor.iconName = "logo-vue--color";

export default IconLogoVueColor;
