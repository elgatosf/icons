import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMeteringEvaluative = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			aria-label={label}
			role="img"
			{...props}
		>
			<path d="M7.25 3C7.66421 3 8 3.33579 8 3.75C8 4.16421 7.66421 4.5 7.25 4.5H5C4.72386 4.5 4.5 4.72386 4.5 5V19C4.5 19.2761 4.72386 19.5 5 19.5H7.25C7.66421 19.5 8 19.8358 8 20.25C8 20.6642 7.66421 21 7.25 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H7.25Z" />
			<path d="M16.75 19.5C16.3358 19.5 16 19.8358 16 20.25C16 20.6642 16.3358 21 16.75 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H16.75C16.3358 3 16 3.33579 16 3.75C16 4.16421 16.3358 4.5 16.75 4.5H19C19.2761 4.5 19.5 4.72386 19.5 5V19C19.5 19.2761 19.2761 19.5 19 19.5H16.75Z" />
		</svg>
	);
};

IconMeteringEvaluative.iconName = "metering-evaluative";

export default IconMeteringEvaluative;
