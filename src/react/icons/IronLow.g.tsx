import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconIronLow = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M11 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
			<path
				fillRule="evenodd"
				d="M8.5 3a.5.5 0 0 0 0 1H15a1 1 0 0 1 1 1v2.268A2 2 0 0 0 15 7H9a6 6 0 0 0-6 6 2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM16 9a1 1 0 0 0-1-1H9a5 5 0 0 0-5 5 1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z"
				clipRule="evenodd"
			/>
			<path d="M3.5 16a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z" />
		</svg>
	);
};

IconIronLow.iconName = "iron-low";

export default IconIronLow;
