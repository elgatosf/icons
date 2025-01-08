import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconTagFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M16 2h-5.172a2 2 0 0 0-1.414.586l-7 7a2 2 0 0 0 0 2.828l5.172 5.172a2 2 0 0 0 2.828 0l7-7A2 2 0 0 0 18 9.172V4a2 2 0 0 0-2-2m-2 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconTagFilled.iconName = "tag--filled";

export default IconTagFilled;
