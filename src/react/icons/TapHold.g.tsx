import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTapHold = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M8.386 1.181a5.25 5.25 0 0 1 3 .081l.193.068a5.25 5.25 0 0 1 2.396 1.804l.119.167c.573.844.888 1.839.905 2.862v.204a5.25 5.25 0 0 1-.613 2.338c.147.156.273.333.37.526a2.252 2.252 0 0 1 3.165 1.427A2.25 2.25 0 0 1 21 12.75v2.024a8.226 8.226 0 0 1-15.687 3.459L3.22 13.716a2.282 2.282 0 0 1 4.112-1.98l.169.338v-1.082a5.25 5.25 0 0 1-2.006-1.667l-.116-.168a5.25 5.25 0 0 1-.875-3.075l.01-.204a5.25 5.25 0 0 1 1.06-2.807l.126-.16a5.25 5.25 0 0 1 2.49-1.673zm1.364 4.32a.75.75 0 0 0-.75.75v8.983a.75.75 0 0 1-1.428.338L5.99 12.407a.783.783 0 0 0-1.41.678l2.093 4.518A6.727 6.727 0 0 0 19.5 14.775V12.75a.75.75 0 0 0-1.5 0v.5a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 0-1.5 0v2a.75.75 0 0 1-1.5 0v-6a.75.75 0 0 0-.75-.75m1.168-2.814a3.75 3.75 0 0 0-2.001-.093l-.281.075A3.75 3.75 0 0 0 6.95 3.754l-.185.226a3.75 3.75 0 0 0-.744 1.86l-.02.29a3.75 3.75 0 0 0 .625 2.197l.17.236q.308.39.703.685V6.25a2.25 2.25 0 0 1 4.5 0v1.878a2.25 2.25 0 0 1 1.052-.108c.255-.476.408-1 .441-1.541l.006-.292a3.75 3.75 0 0 0-.567-1.921l-.164-.241a3.75 3.75 0 0 0-1.577-1.237z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconTapHold.iconName = "tap-hold";

export default IconTapHold;
