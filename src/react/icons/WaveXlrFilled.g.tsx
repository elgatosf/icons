import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWaveXlrFilled = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
			<path d="M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
			<path
				fillRule="evenodd"
				d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm13 8a5 5 0 1 1-10 0 5 5 0 0 1 10 0M7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0m11 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconWaveXlrFilled.iconName = "wave-xlr--filled";

export default IconWaveXlrFilled;
