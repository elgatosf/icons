import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraInputCheck = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m17 6-1.703-2.555A1 1 0 0 0 14.465 3h-4.93a1 1 0 0 0-.832.445L7 6H4a2 2 0 0 0-2 2v2a.75.75 0 0 0 1.5 0V8a.5.5 0 0 1 .5-.5h3a1.5 1.5 0 0 0 1.248-.668L9.803 4.5h4.394l1.555 2.332A1.5 1.5 0 0 0 17 7.5h3a.5.5 0 0 1 .5.5v3.732A6.5 6.5 0 0 1 22 12.81V8a2 2 0 0 0-2-2z" />
			<path d="M16.33 10.5q.157.272.279.56a6.4 6.4 0 0 0-1.474.384 3.5 3.5 0 0 0-4.885-1.475.75.75 0 0 1-.75-1.3 5 5 0 0 1 6.83 1.831m-5.33 7q0-.572.096-1.119a3.5 3.5 0 0 1-.846-.35.75.75 0 0 0-.75 1.3 5 5 0 0 0 1.512.57A7 7 0 0 1 11 17.5m1.022 3.5a6.5 6.5 0 0 1-.709-1.5H4a.5.5 0 0 1-.5-.5v-3A.75.75 0 0 0 2 16v3a2 2 0 0 0 2 2zM2 13a.75.75 0 0 1 .75-.75h4.629l-1.47-1.47a.75.75 0 1 1 1.06-1.06l2.75 2.75a.75.75 0 0 1 0 1.06l-2.75 2.75a.75.75 0 0 1-1.06-1.06l1.47-1.47H2.75A.75.75 0 0 1 2 13" />
			<path
				fillRule="evenodd"
				d="M23 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-3.354-1.854a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708l1.646 1.647z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCameraInputCheck.iconName = "camera-input-check";

export default IconCameraInputCheck;
