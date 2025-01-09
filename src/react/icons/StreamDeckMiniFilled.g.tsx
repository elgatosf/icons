import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconStreamDeckMiniFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm3.75 7a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M9 14.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.25-4.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0 4.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m4.25-4.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0m0 4.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconStreamDeckMiniFilled.iconName = "stream-deck-mini--filled";

export default IconStreamDeckMiniFilled;
