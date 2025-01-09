import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconCube = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M9.25 2.35a1.5 1.5 0 0 1 1.5 0l5.5 3.176A1.5 1.5 0 0 1 17 6.825v6.35a1.5 1.5 0 0 1-.75 1.3l-5.5 3.175a1.5 1.5 0 0 1-1.5 0l-5.5-3.175a1.5 1.5 0 0 1-.75-1.3v-6.35a1.5 1.5 0 0 1 .75-1.3zm1 .866 5.25 3.031L10 9.423 4.5 6.247l5.25-3.03a.5.5 0 0 1 .5 0M4 7.113v6.062a.5.5 0 0 0 .25.433L9.5 16.64v-6.351zm6.5 3.176L16 7.113v6.062a.5.5 0 0 1-.25.433L10.5 16.64z"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconCube.iconName = "cube";

export default IconCube;
