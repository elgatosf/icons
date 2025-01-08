import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckMk2Filled = (props: IconProps & SVGProps<SVGSVGElement>) => {
	const size = sizeMap[props?.size ?? "m"];
	const label = props?.label ?? "Icon";

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
				d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10 5.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M11 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0M9 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M5 16a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3.988-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M8 12.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m3.976 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m1.988 1a1 1 0 1 1 2 0 1 1 0 0 1-2 0M18 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-1-2.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0m-2-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M14 9a1 1 0 1 1 2 0 1 1 0 0 1-2 0m4-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconStreamDeckMk2Filled.iconName = "stream-deck-mk2--filled";

export default IconStreamDeckMk2Filled;
