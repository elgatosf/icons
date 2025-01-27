import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDroplet = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16.83 15.294a.75.75 0 1 0-1.45-.388 3.5 3.5 0 0 1-2.474 2.475.75.75 0 0 0 .388 1.449 5 5 0 0 0 3.536-3.536" />
			<path
				fillRule="evenodd"
				d="M10.844 2.95C8.628 4.872 4 9.435 4 14a8 8 0 1 0 16 0c0-4.564-4.628-9.127-6.844-11.05a1.75 1.75 0 0 0-2.312 0M7.8 8.372C6.434 10.232 5.5 12.195 5.5 14a6.5 6.5 0 1 0 13 0c0-1.805-.934-3.768-2.3-5.627-1.342-1.827-2.962-3.366-4.027-4.291a.26.26 0 0 0-.173-.07.26.26 0 0 0-.173.07c-1.065.925-2.685 2.464-4.027 4.29"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconDroplet.iconName = "droplet";

export default IconDroplet;
