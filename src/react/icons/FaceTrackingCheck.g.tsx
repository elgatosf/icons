import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconFaceTrackingCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M2.75 2a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 0 1.5 0V3.5h1.75a.75.75 0 0 0 0-1.5zM2 18.75v2.5a.75.75 0 0 0 .75.75h2.5a.75.75 0 0 0 0-1.5H3.5v-1.75a.75.75 0 0 0-1.5 0M22 5.25v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0 0 1.5h1.75v1.75a.75.75 0 0 0 1.5 0" />
			<path
				fillRule="evenodd"
				d="M16 9c0 .912-.305 1.753-.82 2.426a6.5 6.5 0 0 0-2.268 1.47A4 4 0 1 1 16 9m-1.5 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
				clipRule="evenodd"
			/>
			<path d="M6.343 16.843a8 8 0 0 1 5.387-2.338 6.5 6.5 0 0 0-.569 1.55 6.5 6.5 0 0 0-3.757 1.849.75.75 0 1 1-1.06-1.06" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-2.646-1.854a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647 3.146-3.147a.5.5 0 0 1 .708 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconFaceTrackingCheck.iconName = "face-tracking-check";

export default IconFaceTrackingCheck;
