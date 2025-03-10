import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCameraInput = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="m17 6-1.703-2.555A1 1 0 0 0 14.465 3h-4.93a1 1 0 0 0-.832.445L7 6H4a2 2 0 0 0-2 2v2a.75.75 0 0 0 1.5 0V8a.5.5 0 0 1 .5-.5h3a1.5 1.5 0 0 0 1.248-.668L9.803 4.5h4.394l1.555 2.332A1.5 1.5 0 0 0 17 7.5h3a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5v-3A.75.75 0 0 0 2 16v3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
			<path d="M2 13a.75.75 0 0 1 .75-.75h4.629l-1.47-1.47a.75.75 0 1 1 1.06-1.06l2.75 2.75a.75.75 0 0 1 0 1.06l-2.75 2.75a.75.75 0 0 1-1.06-1.06l1.47-1.47H2.75A.75.75 0 0 1 2 13" />
			<path d="M10.25 9.969a3.5 3.5 0 1 1 0 6.062.75.75 0 0 0-.75 1.3 5 5 0 1 0 0-8.661.75.75 0 1 0 .75 1.299" />
		</svg>
	);
};

IconCameraInput.iconName = "camera-input";

export default IconCameraInput;
