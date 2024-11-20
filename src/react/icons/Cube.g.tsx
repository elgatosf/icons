import type { SVGProps } from "react";
import { sizeMap } from "../../catalogue/sizing.js";
import type { IconProps } from "../types.js";

const IconCube = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4 6.226a2 2 0 0 0-1 1.732v8.083a2 2 0 0 0 1 1.732l7 4.042a2 2 0 0 0 2 0l7-4.042a2 2 0 0 0 1-1.732V7.958a2 2 0 0 0-1-1.732l-7-4.041a2 2 0 0 0-2 0zm1.25 1.01L12 11.135l6.75-3.897-6.5-3.753a.5.5 0 0 0-.5 0l-6.5 3.753Zm14.25 1.3-6.75 3.897v7.794l6.5-3.753a.5.5 0 0 0 .25-.433zm-8.25 11.691v-7.794L4.5 8.536v7.505a.5.5 0 0 0 .25.433z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconCube.iconName = "cube";

export default IconCube;
