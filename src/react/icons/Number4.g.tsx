import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber4 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M16.08 14.863h-1.553v2.198h-1.96v-2.198H7.919v-1.82l4.186-6.104h2.422v6.496h1.554zm-3.457-6.3-3.248 4.886h3.22z" />
		</svg>
	);
};

IconNumber4.iconName = "number4";

export default IconNumber4;
