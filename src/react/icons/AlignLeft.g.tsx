import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignLeft = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M18 6.5A1.5 1.5 0 0 0 16.5 5h-10A1.5 1.5 0 0 0 5 6.5v1A1.5 1.5 0 0 0 6.5 9h10A1.5 1.5 0 0 0 18 7.5zm-1 1v-1a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5"
						clipRule="evenodd"
					/>
					<path d="M2.5 2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0v-15a.5.5 0 0 1 .5-.5" />
					<path
						fillRule="evenodd"
						d="M12.5 11a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 5 13.5v-1A1.5 1.5 0 0 1 6.5 11zm.5 1.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAlignLeft.iconName = "align-left";

export default IconAlignLeft;
