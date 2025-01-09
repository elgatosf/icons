import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamSwitchToFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M5.282 5.283a.75.75 0 0 0-1.06-1.061 11 11 0 0 0 0 15.556.75.75 0 0 0 1.06-1.06 9.5 9.5 0 0 1 0-13.435" />
			<path d="M8.11 8.111a.75.75 0 1 0-1.06-1.06 7 7 0 0 0 0 9.899.75.75 0 1 0 1.06-1.06 5.5 5.5 0 0 1 0-7.779M14.96 11.515a6.52 6.52 0 0 0-3.445 3.446 3 3 0 1 1 3.446-3.447M23 12q0 .912-.15 1.808a6.5 6.5 0 0 0-1.357-1.438 9.5 9.5 0 0 0-.716-4.005 9.5 9.5 0 0 0-2.06-3.082.75.75 0 1 1 1.061-1.061A11 11 0 0 1 23 12M18.467 9.321c.245.59.407 1.21.483 1.841a6.5 6.5 0 0 0-1.542-.161 5.5 5.5 0 0 0-1.519-2.89.75.75 0 0 1 1.06-1.06 7 7 0 0 1 1.518 2.27" />
			<path
				fillRule="evenodd"
				d="M17.5 23a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11m1.354-3.146 2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 0 0-.708.708L19.293 17H14.5a.5.5 0 0 0 0 1h4.793l-1.147 1.146a.5.5 0 0 0 .708.708"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconStreamSwitchToFilled.iconName = "stream-switch-to--filled";

export default IconStreamSwitchToFilled;
