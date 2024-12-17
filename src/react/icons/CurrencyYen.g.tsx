import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCurrencyYen = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M5.338 3.124a.75.75 0 0 1 1.039.214l-1.253.824a.75.75 0 0 1 .214-1.038" />
			<path d="M17.623 3.338 12 11.886 6.377 3.338l-1.253.824L10.28 12H6.75a.75.75 0 0 0 0 1.5h4.5V16h-4.5a.75.75 0 0 0 0 1.5h4.5v2.75a.75.75 0 0 0 1.5 0V17.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-2.5h4.5a.75.75 0 0 0 0-1.5h-3.53l5.157-7.838-1.253-.824Z" />
			<path d="M17.623 3.338a.75.75 0 1 1 1.254.824l-1.253-.824Z" />
		</svg>
	);
};

IconCurrencyYen.iconName = "currency-yen";

export default IconCurrencyYen;
