import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNdi = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M9.741 16H7.324L4.263 9.442V16H2.78V8.045h2.423l3.056 6.57v-6.57H9.74zm8.678-4.018q0 .683-.119 1.241-.118.553-.333.967-.21.414-.531.73a3 3 0 0 1-.71.516 4 4 0 0 1-.87.333 7 7 0 0 1-.998.177q-.51.054-1.123.054h-2.498V8.045h2.761q.795 0 1.445.124.65.119 1.214.408.563.285.945.73.381.447.596 1.123.22.677.22 1.552Zm-1.768.027q0-1.461-.687-2.1t-2.122-.639h-.875v5.51h.81q1.478 0 2.176-.665.699-.666.698-2.106M21.22 16h-1.73V8.045h1.73z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconNdi.iconName = "ndi";

export default IconNdi;
