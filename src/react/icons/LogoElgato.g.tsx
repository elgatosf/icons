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
			<path d="m13.45 8.997.021.016 8.291 4.765a10.02 10.02 0 0 1-3.365 5.854A9.94 9.94 0 0 1 11.962 22a9.88 9.88 0 0 1-7.044-2.929A9.96 9.96 0 0 1 2 12.001a9.96 9.96 0 0 1 2.918-7.072A9.88 9.88 0 0 1 11.962 2c2.033 0 3.987.611 5.653 1.766a10 10 0 0 1 3.856 5.256l-1.771 1.03a8 8 0 0 0-.218-.724c-1.129-3.192-4.152-5.337-7.52-5.337-4.4 0-7.98 3.593-7.98 8.01 0 4.415 3.58 8.009 7.98 8.009 1.71 0 3.34-.537 4.716-1.554a8 8 0 0 0 2.86-3.947l.005-.035-9.67-5.553v6.021l3.334-1.928 1.717.984-4.997 2.89-1.767-1.01V7.995l1.764-1.02 3.526 2.023z" />
		</svg>
	);
};

IconLogoElgato.iconName = "logo-elgato";

export default IconLogoElgato;
