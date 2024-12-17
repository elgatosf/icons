import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconShapesFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M21 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-8 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zM3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
			<path
				fillRule="evenodd"
				d="M8.732 14.25c-.77-1.333-2.694-1.333-3.464 0L3.103 18c-.77 1.333.192 3 1.732 3h4.33c1.54 0 2.502-1.667 1.732-3z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconShapesFilled.iconName = "shapes--filled";

export default IconShapesFilled;
