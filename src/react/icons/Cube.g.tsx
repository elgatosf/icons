import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCube = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path
						fillRule="evenodd"
						d="M4 6.227a2 2 0 0 0-1 1.732v8.083a2 2 0 0 0 1 1.731l7 4.042a2 2 0 0 0 2 0l7-4.042a2 2 0 0 0 1-1.732V7.96a2 2 0 0 0-1-1.732l-7-4.042a2 2 0 0 0-2 0zm1.25 1.01L12 11.134l6.75-3.897-6.5-3.753a.5.5 0 0 0-.5 0zM19.5 8.536l-6.75 3.897v7.794l6.5-3.753a.5.5 0 0 0 .25-.433zm-8.25 11.691v-7.794L4.5 8.536v7.506a.5.5 0 0 0 .25.432z"
						clipRule="evenodd"
					/>
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
					<path
						fillRule="evenodd"
						d="M9 2.494a2 2 0 0 1 2 0l5 2.887a2 2 0 0 1 1 1.732v5.774a2 2 0 0 1-1 1.732l-5 2.887a2 2 0 0 1-2 0l-5-2.887a2 2 0 0 1-1-1.732V7.113a2 2 0 0 1 1-1.732zm1.5.866 5 2.887L10 9.423 4.5 6.247l5-2.887a1 1 0 0 1 1 0M4 7.113v5.774a1 1 0 0 0 .5.866l5 2.887v-6.351zm6.5 3.176L16 7.113v5.774a1 1 0 0 1-.5.866l-5 2.887z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCube.iconName = "cube";

export default IconCube;
