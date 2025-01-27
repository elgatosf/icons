import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckPlus = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11.333 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10.333 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M11.333 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13.667 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2M14.667 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0M13.667 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M17 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2M18 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M6.75 12.5a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" />
			<path
				fillRule="evenodd"
				d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2-.5h14a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconStreamDeckPlus.iconName = "stream-deck-plus";

export default IconStreamDeckPlus;
