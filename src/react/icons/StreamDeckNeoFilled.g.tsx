import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckNeoFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m5-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3.334 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3.333 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-.583 6.505a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM6 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0m10 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3.334 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-3.333 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0M6.75 14.505a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5zm10 0a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconStreamDeckNeoFilled.iconName = "stream-deck-neo--filled";

export default IconStreamDeckNeoFilled;
