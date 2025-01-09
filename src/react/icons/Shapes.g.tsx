import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconShapes = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		default:
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M4.5 3A1.5 1.5 0 0 0 3 4.5v3A1.5 1.5 0 0 0 4.5 9h3A1.5 1.5 0 0 0 9 7.5v-3A1.5 1.5 0 0 0 7.5 3zm3 1h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5M12.5 11a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5zm3.5 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM14 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-2 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0M4.701 11.75c.577-1 2.02-1 2.598 0l1.732 3A1.5 1.5 0 0 1 7.732 17H4.268a1.5 1.5 0 0 1-1.299-2.25zm1.732.5 1.732 3a.5.5 0 0 1-.433.75H4.268a.5.5 0 0 1-.433-.75l1.732-3a.5.5 0 0 1 .866 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconShapes.iconName = "shapes";

export default IconShapes;
