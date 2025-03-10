import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconDropletFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M10.844 2.95C8.628 4.872 4 9.435 4 14a8 8 0 1 0 16 0c0-4.564-4.628-9.127-6.844-11.05a1.75 1.75 0 0 0-2.312 0m5.986 12.344a.75.75 0 1 0-1.45-.388 3.5 3.5 0 0 1-2.474 2.475.75.75 0 0 0 .388 1.449 5 5 0 0 0 3.536-3.536"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconDropletFilled.iconName = "droplet--filled";

export default IconDropletFilled;
