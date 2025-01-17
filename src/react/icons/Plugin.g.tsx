import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPlugin = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						stroke="#000"
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 16.5h8a1.5 1.5 0 0 0 1.5-1.5V7A1.5 1.5 0 0 0 14 5.5h-1A1.5 1.5 0 0 1 11.5 4a1.5 1.5 0 0 0-3 0A1.5 1.5 0 0 1 7 5.5H6A1.5 1.5 0 0 0 4.5 7v1A1.5 1.5 0 0 0 6 9.5a1.5 1.5 0 0 1 0 3A1.5 1.5 0 0 0 4.5 14v1A1.5 1.5 0 0 0 6 16.5"
					/>
				</svg>
			);
	}
};

IconPlugin.iconName = "plugin";

export default IconPlugin;
