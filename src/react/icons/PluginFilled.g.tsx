import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconPluginFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M3.333 6.667C3.333 5.747 4.08 5 5 5h2.083c.23 0 .417-.186.417-.417v-.416a2.5 2.5 0 0 1 5 0v.416c0 .23.187.417.417.417H15c.92 0 1.667.746 1.667 1.667v9.166c0 .92-.747 1.667-1.667 1.667H5c-.92 0-1.667-.746-1.667-1.667v-1.25c0-.92.746-1.666 1.667-1.666h.417a1.667 1.667 0 1 0 0-3.334H5c-.92 0-1.667-.746-1.667-1.666z"
						opacity={0.2}
					/>
				</svg>
			);
	}
};

IconPluginFilled.iconName = "plugin--filled";

export default IconPluginFilled;
