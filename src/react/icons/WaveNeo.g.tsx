import type { SVGProps } from "react";
import { sizeMap } from "../../metadata/sizing.js";
import type { IconProps } from "../types.js";

const IconWaveNeo = (props: IconProps & SVGProps<SVGSVGElement>) => {
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
				d="M7 6.5A4.5 4.5 0 0 1 11.5 2h1A4.5 4.5 0 0 1 17 6.5v9a4.5 4.5 0 0 1-4.5 4.5h-1A4.5 4.5 0 0 1 7 15.5H5.5a6 6 0 0 0 2.859 5.112.75.75 0 0 1-.786 1.278A7.5 7.5 0 0 1 4 15.5h-.75a.75.75 0 0 1 0-1.5H7zm5.5-3h-1a3 3 0 0 0-3 3v5h2.75v-.75a.75.75 0 0 1 1.5 0v.75h2.75v-5a3 3 0 0 0-3-3M11.25 13v2.25a.75.75 0 0 0 1.5 0V13h2.75v2.5a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3V13z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

IconWaveNeo.iconName = "wave-neo";

export default IconWaveNeo;
