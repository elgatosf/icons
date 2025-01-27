import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCubeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M11 2.494a2 2 0 0 0-2 0L4 5.381a2 2 0 0 0-.427.33L10 9.424l6.427-3.711a2 2 0 0 0-.427-.33zM9.5 10.289 3.073 6.578A2 2 0 0 0 3 7.113v5.774a2 2 0 0 0 1 1.732l5 2.887q.24.137.5.204zM10.5 17.71v-7.421l6.427-3.711q.072.26.073.535v5.774a2 2 0 0 1-1 1.732l-5 2.887q-.24.137-.5.204" />
				</svg>
			);
	}
};

IconCubeFilled.iconName = "cube--filled";

export default IconCubeFilled;
