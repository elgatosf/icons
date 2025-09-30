import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoX = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M17.0889 4H19.8032L13.8734 10.7774L20.8494 20H15.3872L11.1091 14.4066L6.21387 20H3.49798L9.84054 12.7508L3.14844 4H8.74926L12.6163 9.11262L17.0889 4ZM16.1363 18.3754H17.6403L7.93203 5.53928H6.31808L16.1363 18.3754Z" />
		</svg>
	);
};

IconLogoX.iconName = "logo-x";

export default IconLogoX;
