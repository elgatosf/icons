import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconNumber9 = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.815 11.811c0 2.87-.798 5.474-4.046 5.474-2.17 0-3.57-.98-3.57-2.688h2.1c.042.518.238 1.162 1.47 1.162 1.918 0 2.016-2.24 2.044-3.668-.546.868-1.218 1.246-2.408 1.246-1.848 0-3.22-1.274-3.22-3.234 0-2.114 1.638-3.388 3.71-3.388 3.066 0 3.92 2.352 3.92 5.096m-2.156-1.764c0-1.106-.658-1.89-1.736-1.89-1.176 0-1.778.756-1.778 1.89 0 1.092.63 1.932 1.708 1.932 1.106 0 1.806-.77 1.806-1.932" />
		</svg>
	);
};

IconNumber9.iconName = "number9";

export default IconNumber9;
