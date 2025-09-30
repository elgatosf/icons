import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTriangleFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M10.2679 4C11.0377 2.66667 12.9622 2.66667 13.732 4L21.8149 18C22.5847 19.3333 21.6225 21 20.0829 21H3.91705C2.37745 21 1.41519 19.3333 2.185 18L10.2679 4Z" />
		</svg>
	);
};

IconTriangleFilled.iconName = "triangle--filled";

export default IconTriangleFilled;
