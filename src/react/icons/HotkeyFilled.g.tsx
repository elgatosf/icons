import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHotkeyFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
						d="M5 3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"
						clipRule="evenodd"
					/>
					<path d="M6 12a.5.5 0 0 0-1 0v1.5H3.5a.5.5 0 0 0 0 1H5V16a.5.5 0 0 0 1 0v-1.5h1.5a.5.5 0 0 0 0-1H6z" />
					<path
						fillRule="evenodd"
						d="M10 13a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm2 1a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"
						clipRule="evenodd"
					/>
				</svg>
			);
	}
};

IconHotkeyFilled.iconName = "hotkey--filled";

export default IconHotkeyFilled;
