import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconHotkeyFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

	switch (props?.size) {
		case "l":
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					width={size}
					height={size}
					aria-label={label}
					role="img"
					{...props}
				>
					<path
						fillRule="evenodd"
						d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm3 1.75A.75.75 0 0 1 6.75 6h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 6 6.75"
						clipRule="evenodd"
					/>
					<path d="M3.75 16a.75.75 0 0 0 0 1.5h2v2a.75.75 0 0 0 1.5 0v-2h2a.75.75 0 0 0 0-1.5h-2v-2a.75.75 0 0 0-1.5 0v2z" />
					<path
						fillRule="evenodd"
						d="M12 15a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm3 1.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75"
						clipRule="evenodd"
					/>
				</svg>
			);
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
