import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHotkey = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
					<path d="M5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 5 6" />
					<path
						fillRule="evenodd"
						d="M3 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1"
						clipRule="evenodd"
					/>
					<path d="M12.5 13.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
					<path
						fillRule="evenodd"
						d="M10 13a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2zm2-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1"
						clipRule="evenodd"
					/>
					<path d="M5.5 11.5a.5.5 0 0 1 .5.5v1.5h1.5a.5.5 0 0 1 0 1H6V16a.5.5 0 0 1-1 0v-1.5H3.5a.5.5 0 0 1 0-1H5V12a.5.5 0 0 1 .5-.5" />
				</svg>
			);
	}
};

IconHotkey.iconName = "hotkey";

export default IconHotkey;
