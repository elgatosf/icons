import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconZoomIn = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M11.25 7.75a.75.75 0 0 0-1.5 0v2h-2a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2z" />
			<path
				fillRule="evenodd"
				d="M15.247 16.307a7.5 7.5 0 1 1 1.06-1.06l4.473 4.473a.75.75 0 1 1-1.06 1.06zM16.5 10.5a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconZoomIn.iconName = "zoom-in";

export default IconZoomIn;
