import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconGroupFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M7 10a5 5 0 0 0-5 5 2 2 0 0 0 2 2h6a2 2 0 0 0 .595-.09A2 2 0 0 0 12 15a4.99 4.99 0 0 0-1.65-3.713A4.98 4.98 0 0 0 7 10M16 17h-2.645c-.433 0-.694-.547-.543-.951.121-.327.188-.68.188-1.049 0-1.472-.53-2.82-1.41-3.864-.211-.25-.17-.641.131-.77A4.5 4.5 0 0 1 18 14.5v.499a2 2 0 0 1-2 2M13.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
				</svg>
			);
	}
};

IconGroupFilled.iconName = "group--filled";

export default IconGroupFilled;
