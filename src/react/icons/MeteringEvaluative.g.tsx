import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconMeteringEvaluative = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7.25 3a.75.75 0 0 1 0 1.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h2.25a.75.75 0 0 1 0 1.5H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM16.75 19.5a.75.75 0 0 0 0 1.5H19a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2.25a.75.75 0 0 0 0 1.5H19a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5z" />
		</svg>
	);
};

IconMeteringEvaluative.iconName = "metering-evaluative";

export default IconMeteringEvaluative;
