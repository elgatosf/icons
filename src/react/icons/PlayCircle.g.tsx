import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPlayCircle = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M16.258 10.268c1.334.77 1.334 2.694 0 3.464L11 16.768c-1.333.77-3-.193-3-1.732V8.964c0-1.54 1.667-2.502 3-1.732zm-.75 2.165-5.258 3.036a.5.5 0 0 1-.75-.433V8.964a.5.5 0 0 1 .75-.433l5.258 3.036a.5.5 0 0 1 0 .866"
				clipRule="evenodd"
			/>
			<path
				fillRule="evenodd"
				d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-1.5 0a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconPlayCircle.iconName = "play-circle";

export default IconPlayCircle;
