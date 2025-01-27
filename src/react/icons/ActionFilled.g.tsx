import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconActionFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M10.5 2A2.5 2.5 0 0 0 8 4.5v1.056a.53.53 0 0 0 .46.515 6.5 6.5 0 0 1 5.47 5.468.53.53 0 0 0 .515.461H15.5A2.5 2.5 0 0 0 18 9.5v-5A2.5 2.5 0 0 0 15.5 2z" />
					<path
						fillRule="evenodd"
						d="M13 12.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0M4.646 9.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconActionFilled.iconName = "action--filled";

export default IconActionFilled;
