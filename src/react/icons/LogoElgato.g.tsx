import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoElgato = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m13.449 8.997.022.016 8.291 4.765a10.02 10.02 0 0 1-3.365 5.854A9.94 9.94 0 0 1 11.962 22a9.88 9.88 0 0 1-7.044-2.929A9.96 9.96 0 0 1 2 12.001a9.96 9.96 0 0 1 2.918-7.072A9.88 9.88 0 0 1 11.962 2a9.87 9.87 0 0 1 5.652 1.766 10 10 0 0 1 3.857 5.256l-1.771 1.03a8 8 0 0 0-.219-.724c-1.128-3.192-4.15-5.337-7.52-5.337-4.4 0-7.979 3.593-7.979 8.01 0 4.415 3.58 8.009 7.98 8.009 1.71 0 3.34-.537 4.716-1.554a8 8 0 0 0 2.859-3.947l.005-.035L9.873 8.92v6.021l3.334-1.928 1.716.984-4.997 2.89-1.766-1.01V7.995l1.764-1.02z" />
		</svg>
	);
};

IconLogoElgato.iconName = "logo-elgato";

export default IconLogoElgato;
