import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber3 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.864 14.31c0 2.254-2.114 2.968-3.906 2.968-1.988 0-3.682-.714-3.822-3.01h2.1c.028 1.036.784 1.554 1.708 1.554.98 0 1.82-.56 1.82-1.68 0-1.274-1.162-1.596-2.156-1.596-.224 0-.462.028-.686.042v-1.414c.182.014.364.028.546.028.994 0 2.128-.294 2.128-1.568 0-.952-.77-1.47-1.596-1.47-.644 0-1.526.35-1.526 1.414H8.318c0-2.03 2.1-2.856 3.724-2.856s3.612.7 3.612 2.73c0 1.288-.896 2.156-2.156 2.352 1.372.21 2.366.98 2.366 2.506" />
		</svg>
	);
};

IconNumber3.iconName = "number3";

export default IconNumber3;
