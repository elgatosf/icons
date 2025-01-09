import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHexagon = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="m19.25 7.526-7-4.042a.5.5 0 0 0-.5 0l-7 4.042a.5.5 0 0 0-.25.433v8.083a.5.5 0 0 0 .25.432l7 4.042a.5.5 0 0 0 .5 0l7-4.041a.5.5 0 0 0 .25-.434V7.96a.5.5 0 0 0-.25-.433M13 2.186a2 2 0 0 0-2 0l-7 4.04A2 2 0 0 0 3 7.96v8.083a2 2 0 0 0 1 1.731l7 4.042a2 2 0 0 0 2 0l7-4.042a2 2 0 0 0 1-1.732V7.96a2 2 0 0 0-1-1.732z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconHexagon.iconName = "hexagon";

export default IconHexagon;
