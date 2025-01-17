import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAvatarFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16m3-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2.362 6.5A6.99 6.99 0 0 1 10 17a6.99 6.99 0 0 1-5.362-2.5 7 7 0 0 1 10.724 0"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAvatarFilled.iconName = "avatar--filled";

export default IconAvatarFilled;
