import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCubeFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
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
					<path d="M3.77 6.382q.108-.086.23-.155l7-4.042a2 2 0 0 1 2 0l7 4.042a2 2 0 0 1 .23.155L12 11.134zM3.02 7.681Q3 7.818 3 7.959v8.083a2 2 0 0 0 1 1.731l7 4.042q.122.07.25.122v-9.504zM12.75 21.937q.128-.052.25-.122l7-4.042a2 2 0 0 0 1-1.732V7.96q0-.141-.02-.278l-8.23 4.752z" />
				</svg>
			);
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
