import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconLearn = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M9.25 3.201a1.5 1.5 0 0 1 1.5 0l6.5 3.753c1 .577 1 2.02 0 2.598l-.25.144V14.5a.5.5 0 1 1-1 0v-4.226l-1 .577v2.628a1.5 1.5 0 0 1-.75 1.3l-3.5 2.02a1.5 1.5 0 0 1-1.5 0l-3.5-2.02a1.5 1.5 0 0 1-.75-1.3v-2.628l-2.25-1.3a1.5 1.5 0 0 1 0-2.597zm.5.866L3.25 7.82a.5.5 0 0 0 0 .866l6.5 3.753a.5.5 0 0 0 .5 0l6.5-3.753a.5.5 0 0 0 0-.866l-6.5-3.753a.5.5 0 0 0-.5 0m1 9.238L14 11.428v2.051a.5.5 0 0 1-.25.433l-3.5 2.021a.5.5 0 0 1-.5 0l-3.5-2.02a.5.5 0 0 1-.25-.434v-2.05l3.25 1.876a1.5 1.5 0 0 0 1.5 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconLearn.iconName = "learn";

export default IconLearn;
