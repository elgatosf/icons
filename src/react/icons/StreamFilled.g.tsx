import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5.05 4.343a.5.5 0 0 1 0 .707 7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707 0" />
					<path d="M7.172 6.465a.5.5 0 0 1 0 .707 4 4 0 0 0 0 5.657.5.5 0 1 1-.708.707 5 5 0 0 1 0-7.071.5.5 0 0 1 .708 0M14.95 14.95a.5.5 0 0 0 .707.707 8 8 0 0 0 0-11.314.5.5 0 0 0-.707.707 7 7 0 0 1 0 9.9" />
					<path d="M12.828 13.536a.5.5 0 0 1 0-.707 4 4 0 0 0 0-5.657.5.5 0 0 1 .708-.707 5 5 0 0 1 0 7.07.5.5 0 0 1-.708 0M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
				</svg>
			);
	}
};

IconStreamFilled.iconName = "stream--filled";

export default IconStreamFilled;
