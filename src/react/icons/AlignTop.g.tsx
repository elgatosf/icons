import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconAlignTop = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M6.5 18A1.5 1.5 0 0 1 5 16.5v-10A1.5 1.5 0 0 1 6.5 5h1A1.5 1.5 0 0 1 9 6.5v10A1.5 1.5 0 0 1 7.5 18zm1-1h-1a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5"
						clipRule="evenodd"
					/>
					<path d="M2 2.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 0-1h-15a.5.5 0 0 0-.5.5" />
					<path
						fillRule="evenodd"
						d="M11 12.5a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 13.5 5h-1A1.5 1.5 0 0 0 11 6.5zm1.5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconAlignTop.iconName = "align-top";

export default IconAlignTop;
