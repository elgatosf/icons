import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLogoLinear = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2.245 14.305c-.044-.19.182-.31.32-.172l7.302 7.303c.138.137.018.363-.172.319a10.03 10.03 0 0 1-7.45-7.45M2 11.378a.2.2 0 0 0 .058.152L12.47 21.942c.04.04.095.061.152.058q.712-.045 1.393-.186a.194.194 0 0 0 .095-.33L2.515 9.89a.194.194 0 0 0-.33.095q-.14.681-.185 1.393m.842-3.437a.2.2 0 0 0 .042.22l12.955 12.955a.2.2 0 0 0 .22.042q.536-.24 1.037-.537a.196.196 0 0 0 .037-.308L3.687 6.867a.196.196 0 0 0-.308.037 10 10 0 0 0-.537 1.037m1.69-2.326a.197.197 0 0 1-.01-.271A9.99 9.99 0 0 1 11.99 2C17.518 2 22 6.481 22 12.01a9.99 9.99 0 0 1-3.344 7.467.197.197 0 0 1-.27-.009z" />
		</svg>
	);
};

IconLogoLinear.iconName = "logo-linear";

export default IconLogoLinear;
